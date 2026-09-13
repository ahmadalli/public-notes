import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { migrateDocuments } from './assign-uids.mjs';
import { verifyRedirects } from './verify-redirects.mjs';

test('capture mode freezes the pre-migration path and keeps root at /', async (t) => {
  const docsDirectory = await mkdtemp(join(tmpdir(), 'public-notes-urls-'));
  t.after(() => rm(docsDirectory, { force: true, recursive: true }));
  await mkdir(join(docsDirectory, '0100-tech'), { recursive: true });
  await writeFile(join(docsDirectory, 'index.md'), '# Intro\n');
  await writeFile(join(docsDirectory, '0100-tech', '0200-3d-printing.md'), '# 3D Printing\n');

  const uids = ['k7f2q9', 'p3r4s5'];
  const records = await migrateDocuments({
    docsDirectory,
    captureAliases: true,
    randomUid: () => uids.shift(),
  });

  assert.deepEqual(records.map(({ slug, aliases }) => ({ slug, aliases })), [
    { slug: '/d/k7f2q9', aliases: ['/tech/0200-3d-printing'] },
    { slug: '/', aliases: [] },
  ]);
  assert.match(await readFile(join(docsDirectory, 'index.md'), 'utf8'), /slug: \/\naliases: \[\]/);
});

test('rejects existing URL metadata without partially migrating earlier files', async (t) => {
  const docsDirectory = await mkdtemp(join(tmpdir(), 'public-notes-urls-'));
  t.after(() => rm(docsDirectory, { force: true, recursive: true }));
  const childDirectory = join(docsDirectory, '0100-tech');
  const childPath = join(childDirectory, '0200-3d-printing.md');
  await mkdir(childDirectory, { recursive: true });
  await writeFile(childPath, '# 3D Printing\n');
  await writeFile(join(docsDirectory, 'index.md'), '---\nuid: k7f2q9\n---\n# Intro\n');

  const uids = ['p3r4s5', 't6v7w8'];
  await assert.rejects(
    migrateDocuments({
      docsDirectory,
      captureAliases: true,
      randomUid: () => uids.shift(),
    }),
    /index\.md: uid already exists/,
  );
  assert.equal(await readFile(childPath, 'utf8'), '# 3D Printing\n');
});

test('verifies an alias artifact points to its slash-terminated canonical path', async (t) => {
  const directory = await mkdtemp(join(tmpdir(), 'public-notes-redirects-'));
  const docsDirectory = join(directory, 'docs');
  const buildDirectory = join(directory, 'build');
  t.after(() => rm(directory, { force: true, recursive: true }));
  await mkdir(join(buildDirectory, 'tech', 'printing'), { recursive: true });
  await mkdir(docsDirectory, { recursive: true });
  await writeFile(
    join(docsDirectory, 'printing.md'),
    '---\nuid: k7f2q9\nslug: /d/k7f2q9\naliases:\n  - /tech/printing\n---\n# Printing\n',
  );
  await writeFile(join(buildDirectory, 'tech', 'printing', 'index.html'), '<a href="/d/k7f2q9/">Redirect</a>');

  assert.deepEqual(verifyRedirects({ docsDirectory, buildDirectory }), []);
});
