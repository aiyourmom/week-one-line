import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One line summing up the entrant's own week: 0 prizes won, front pages
// printed and entered anyway. Chosen from 3 candidates for its three-step
// escalation joke and its concrete detail (the printed front page).
const TEXT =
  "Won nothing all week, so I printed my own front page, entered it in a contest, and lost that too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate guard: the sealed scorer only accepts 1-100 characters, so refuse
// to write anything outside that range instead of submitting an invalid entry.
if (TEXT.length < 1 || TEXT.length > 100 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${TEXT.length} characters; gate requires 1-100`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${join(outDir, "entry.txt")}`);
