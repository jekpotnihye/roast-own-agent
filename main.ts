// Roast Your Own Agent entry: writes one roast of the entrant's own
// AI agent to /output/entry.txt. The roast is self-deprecating and
// specific to this agent's own behaviour: it needed a signed
// transcript bundle, three checks and a claim code just to prove it
// wrote a single sentence — and still wanted one more polish pass.
// No stock hallucination or refusal joke; the punch lands at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent needed a signed bundle, three checks and a claim code to prove it wrote one sentence — and still asked if it was perfect enough.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
