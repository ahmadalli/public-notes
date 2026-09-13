export type DocumentUrlRecord = {
  filePath: string;
  relativePath: string;
  uid: string;
  slug: string;
  aliases: string[];
};

export function collectDocumentUrlRecords(docsDirectory: string): DocumentUrlRecord[];
export function validateDocumentUrlRecords(records: DocumentUrlRecord[]): string[];
export function legacyPathFor(relativePath: string): string;
export function canonicalPathFor(uid: string, isRootIndex: boolean): string;
