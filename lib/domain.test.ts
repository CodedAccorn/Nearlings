import { describe, expect, it } from "vitest";
import { consumeSuccessfulInference, demoInference, feedPet, nearlingViewSchema } from "./domain";

describe("pet care", () => {
  it("clamps feeding state", () => {
    expect(feedPet({ hunger: 12, happiness: 96, energy: 99 })).toEqual({ hunger: 0, happiness: 100, energy: 100 });
  });
});

describe("inference allowance", () => {
  it("consumes once and ignores a duplicate idempotency key", () => {
    const initial = { available: 3, processed: new Set<string>() };
    const first = consumeSuccessfulInference(initial, "request-1");
    const replay = consumeSuccessfulInference(first, "request-1");
    expect(first.available).toBe(2);
    expect(replay.available).toBe(2);
  });

  it("returns schema-valid deterministic responses", () => {
    expect(demoInference("guardian").emotion).toBe("alert");
  });
});

describe("generative UI boundary", () => {
  it("accepts allowlisted components and actions", () => {
    expect(nearlingViewSchema.safeParse({ theme: "sage", components: [{ type: "source-card", discoveryId: "one" }], actions: ["open-source"] }).success).toBe(true);
  });

  it("rejects arbitrary HTML and transaction actions", () => {
    expect(nearlingViewSchema.safeParse({ theme: "sage", components: [{ type: "html", value: "<script />" }], actions: ["send-transaction"] }).success).toBe(false);
  });
});
