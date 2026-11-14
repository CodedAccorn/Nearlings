import { describe, expect, it } from "vitest";
import { discoveriesFor } from "./discovery";

describe("archetype discovery feeds", () => {
  it("gives Sage a distinct market-intelligence feed", () => {
    const sage = discoveriesFor("sage");
    expect(sage.map((item) => item.category)).toEqual([
      "Fixed yield",
      "Lending rate",
      "Sponsored market",
      "Expiry market",
    ]);
    expect(sage.every((item) => !item.archetypes.includes("hunter"))).toBe(true);
  });

  it("does not present invented numeric rates as live data", () => {
    const rateSignals = discoveriesFor("sage").filter((item) => item.category.includes("yield") || item.category.includes("rate"));
    expect(rateSignals.every((item) => item.metric?.value === "Connect live rate")).toBe(true);
  });
});
