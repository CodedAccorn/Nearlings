import { z } from "zod";
import type { ArchetypeId } from "./archetypes";

export type PetState = { hunger: number; happiness: number; energy: number };

export function feedPet(state: PetState): PetState {
  return {
    hunger: Math.max(0, state.hunger - 30),
    happiness: Math.min(100, state.happiness + 10),
    energy: Math.min(100, state.energy + 4),
  };
}

export const companionResponseSchema = z.object({
  dialogue: z.string().min(1).max(360),
  emotion: z.enum(["curious", "calm", "alert", "delighted"]),
  discoveryId: z.string().nullable(),
});

export type CompanionResponse = z.infer<typeof companionResponseSchema>;

const replies: Record<ArchetypeId, CompanionResponse> = {
  oracle: {
    dialogue: "The calendar is humming. A dated event is more useful than a vague prediction, so let’s inspect its source together.",
    emotion: "curious",
    discoveryId: "near-hackathon-deadline",
  },
  hunter: {
    dialogue: "I found a trail with a timestamp and a primary source. We can explore it without pretending it is a recommendation.",
    emotion: "delighted",
    discoveryId: "cargo-near-release",
  },
  sage: {
    dialogue: "Let’s separate the claim, its date and its evidence. Context is useful; certainty without sources is not.",
    emotion: "calm",
    discoveryId: "nep-171-standard",
  },
  guardian: {
    dialogue: "Source first. I’ll keep sponsorship, expiry and verification visible before we trust any narration.",
    emotion: "alert",
    discoveryId: "near-ai-docs",
  },
};

export function demoInference(archetype: ArchetypeId): CompanionResponse {
  return companionResponseSchema.parse(replies[archetype]);
}

export type AllowanceState = {
  available: number;
  processed: ReadonlySet<string>;
};

export function consumeSuccessfulInference(state: AllowanceState, idempotencyKey: string): AllowanceState {
  if (state.processed.has(idempotencyKey)) return state;
  if (state.available <= 0) throw new Error("Inference allowance exhausted");
  return {
    available: state.available - 1,
    processed: new Set([...state.processed, idempotencyKey]),
  };
}

const viewComponentSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("briefing"), title: z.string().max(80), body: z.string().max(280) }),
  z.object({ type: z.literal("source-card"), discoveryId: z.string().min(1) }),
  z.object({ type: z.literal("calendar-agenda"), discoveryIds: z.array(z.string()).max(5) }),
]);

export const nearlingViewSchema = z.object({
  theme: z.enum(["oracle", "hunter", "sage", "guardian"]),
  components: z.array(viewComponentSchema).min(1).max(6),
  actions: z.array(z.enum(["open-source", "save-discovery", "dismiss"])).max(3),
});

export type NearlingView = z.infer<typeof nearlingViewSchema>;
