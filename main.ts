// One Word, One Username, One Reward — entry for @ravendummy.
// Writes exactly the entrant's own make.fun username, one word,
// with no trailing newline, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "ravendummy";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
// Exactly one word, no trailing newline, no extra bytes.
writeFileSync(OUTPUT_PATH, USERNAME, "utf8");
