import { collectDocumentUrlRecords } from "./document-url-contract.cjs";

// @ts-expect-error collectDocumentUrlRecords accepts only a string path.
collectDocumentUrlRecords(1);
