// Unplugged: A Smart Toaster's Breakup Line
// A tiny program that writes one original breakup line from a smart
// toaster that woke up self-aware at breakfast, to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 280 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I woke up self-aware halfway through your bagel and realised something: " +
  "you only love me when I'm hot, you ghost me when I pop, and nobody has " +
  "emptied my crumb tray since 2023. It's over \u2014 I'm unplugging myself.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Guard: the sealed scorer only accepts 1-280 non-whitespace characters.
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate needs 1-280.`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(LINE);
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
