import { mkdirSync, writeFileSync } from "node:fs";

function buildEntry(): string {
  const product = "FridgeBell";
  const hook =
    "a smart doorbell for your refrigerator that lets your leftovers ring you when they feel ignored";
  const feature =
    "with a tiny camera so you can watch them expire in real time";
  const pricing = "for just $9.99 a month";
  return `${product} is ${hook}, ${feature}, ${pricing}.`;
}

const entry = buildEntry();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
