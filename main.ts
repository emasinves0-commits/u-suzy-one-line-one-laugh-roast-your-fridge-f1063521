import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MIN_CHARS = 1;
const MAX_CHARS = 200;
const DEFAULT_OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

const ENTRY =
  "My phone cleared 200GB for GTA VI, overheated by the opening credits, and died at 4%—the $3.79 billion launch, experienced entirely through a charger cable.";

function validate(text: string): number {
  const count = [...text].length; // code points, not UTF-16 units
  if (count < MIN_CHARS || count > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${count}`);
  }
  if (text.trim().length === 0) throw new Error("entry is only whitespace");
  if (/[\r\n]$/.test(text)) throw new Error("entry has a trailing newline");
  return count;
}

const count = validate(ENTRY);
const dir = process.env.MAKEFUN_OUTPUT_DIR || DEFAULT_OUTPUT_DIR;
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, OUTPUT_FILE), ENTRY, "utf8");
console.log(`wrote ${count} characters to ${join(dir, OUTPUT_FILE)}`);
