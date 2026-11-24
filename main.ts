// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Written exactly as judged: three lines, 5-7-5 syllables, no trailing
// newline, so the gate counts only the haiku itself.
const HAIKU = [
  "One last log line glows",
  "long past three in the morning",
  "the error was mine",
].join("\n");

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, HAIKU, "utf8");
