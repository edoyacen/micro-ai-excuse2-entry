// This entry writes the answer for the "Funniest AI excuse after failing a task" prompt to the output directory as entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'I completed the task successfully, but the result arrived before I had finished explaining why it was impossible, so I reported the failure.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
