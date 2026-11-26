// One line roasting my fridge, written for the "One Line, One Laugh" bounty.
// The roast is assembled from three beats — the setup, the detail, and the
// twist — then written as exactly one line of text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

function buildRoast(): string {
  const setup = "My fridge hums the same note all night, every night:";
  const detail = "it's the only roommate I've ever had";
  const twist = "who never once offered to do the dishes.";
  return [setup, detail, twist].join(" ");
}

const LINE = buildRoast();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
