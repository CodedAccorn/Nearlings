import type { ArchetypeId } from "./archetypes";

export type Discovery = {
  id: string;
  title: string;
  summary: string;
  category: string;
  eventDate: string | null;
  sourceUrl: string;
  sourceName: string;
  verification: "Verified source" | "Reference";
  archetypes: ArchetypeId[];
  sponsored?: boolean;
};

export const discoveries: Discovery[] = [
  {
    id: "near-hackathon-deadline",
    title: "NEAR Hackathon submission deadline",
    summary: "Public repository and public X demo links are required before the development window closes.",
    category: "Ecosystem event",
    eventDate: "2026-11-14",
    sourceUrl: "https://nearhackathon.com/",
    sourceName: "NEAR Hackathon",
    verification: "Verified source",
    archetypes: ["oracle", "hunter", "guardian"],
  },
  {
    id: "cargo-near-release",
    title: "cargo-near 0.23.0 released",
    summary: "The maintained contract tooling release includes prebuilt Windows, Linux and macOS binaries.",
    category: "Developer tooling",
    eventDate: "2026-11-05",
    sourceUrl: "https://github.com/near/cargo-near/releases/tag/cargo-near-v0.23.0",
    sourceName: "near/cargo-near",
    verification: "Verified source",
    archetypes: ["hunter", "sage"],
  },
  {
    id: "near-ai-docs",
    title: "NEAR AI Cloud developer quickstart",
    summary: "The official guide documents an OpenAI-compatible, server-authenticated inference endpoint.",
    category: "AI infrastructure",
    eventDate: null,
    sourceUrl: "https://docs.near.ai/cloud/quickstart",
    sourceName: "NEAR AI documentation",
    verification: "Reference",
    archetypes: ["sage", "guardian", "hunter"],
  },
  {
    id: "nep-171-standard",
    title: "NEP-171 NFT standard",
    summary: "The final NEAR standard defines the common interface for uniquely identified non-fungible tokens.",
    category: "Protocol standard",
    eventDate: "2023-03-13",
    sourceUrl: "https://github.com/near/NEPs/blob/master/neps/nep-0171.md",
    sourceName: "NEAR Enhancement Proposals",
    verification: "Reference",
    archetypes: ["sage", "guardian"],
  },
  {
    id: "demo-grant",
    title: "Builder grant briefing example",
    summary: "A simulated placement showing how a sourced campaign could remain disclosed across feed, calendar and AI narration.",
    category: "Grant program",
    eventDate: null,
    sourceUrl: "https://nearbuilders.org/",
    sourceName: "NEAR Builders",
    verification: "Reference",
    archetypes: ["hunter", "oracle"],
    sponsored: true,
  },
];

export function discoveriesFor(archetype: ArchetypeId): Discovery[] {
  return discoveries.filter((item) => item.archetypes.includes(archetype));
}
