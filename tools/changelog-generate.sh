#!/bin/bash

set -eou pipefail

GPT_MODEL="gpt-4"

changelog_id="$(date +%Y%m%d%H%M%S)"
perfile_changelog_filename="changelog-$changelog_id.md"
refine_changelog_filename="changelog-$changelog_id.refined.md"
highlights_changelog_filename="changelog-$changelog_id.highlights.md"
highlights_refined_changelog_filename="changelog-$changelog_id.highlights.refined.md"
touch "$perfile_changelog_filename"

last_tag=$(git describe --tags --abbrev=0)
commits_since_last_tag=$(git rev-list "$last_tag"..HEAD)

changed_docs=$(git diff --name-only "$last_tag"..HEAD | grep -E '^docs/.*')

for doc_file in $changed_docs; do
  relative_url=$(echo "$doc_file" | sed -E 's/\/[0-9]+-/\//g')
  relative_url=${relative_url%.md}
  relative_url=${relative_url/index/}
  relative_url=${relative_url#docs/}

  commit_diffs=""

  for commit in $(git rev-list HEAD -- "$doc_file"); do
    if ! grep -q "$commit" <<<"$commits_since_last_tag"; then
      break
    fi
    commit_diffs+=$(git diff --unified=0 "$commit^" "$commit")
    commit_diffs+=$'\n\n'
  done

  file_changelog=$(sgpt --model $GPT_MODEL "Write less than 100 characters and concise high-level description for a non-technical audience of changes that have been made to this documentation page from git diff. Document Path: $doc_file, Changes: " <<<"$commit_diffs")
  echo "[$relative_url](https://publicnotes.io/$relative_url): $file_changelog" >>"$perfile_changelog_filename"
done

sgpt --model $GPT_MODEL "Refine the following changelog for the release. Keep the format and links. Make sure the writing is consistent and change as few words as possible." <"$perfile_changelog_filename" >>"$refine_changelog_filename"
sgpt --model $GPT_MODEL "Write less than 500 characters highlights of the changes that's been done in the past week in markdown format with proper headings from the changelog file: " <"$refine_changelog_filename" >>"$highlights_changelog_filename"
sgpt --model $GPT_MODEL "Refine the following highlights for the release. Remove duplicates, make sure the writing is consistent and change as few words as possible." <"$highlights_changelog_filename" >>"$highlights_refined_changelog_filename"
