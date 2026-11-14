import type { ArchetypeId } from "./archetypes";

export type Discovery = {
  id: string;
  title: string;
  summary: string;
  category: string;
  eventDate: string | null;
  sourceUrl: string;
  sourceName: string;
  verification: "Verified source" | "Reference" | "Live data required" | "Demo placement";
  archetypes: ArchetypeId[];
  sponsored?: boolean;
  metric?: { label: string; value: string };
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
    archetypes: ["oracle", "hunter"],
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
    archetypes: ["hunter"],
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
    archetypes: ["guardian"],
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
    archetypes: ["guardian"],
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
  {
    id: "pendle-susdai-fixed",
    title: "sUSDai fixed-yield market",
    summary: "A Sage category for comparing principal-token fixed yield with maturity context. Rates stay withheld until a live adapter supplies a timestamped value.",
    category: "Fixed yield",
    eventDate: "2027-02-25",
    sourceUrl: "https://app.pendle.finance/earn/fixed-yield",
    sourceName: "Pendle Markets",
    verification: "Live data required",
    archetypes: ["sage"],
    metric: { label: "Fixed APY", value: "Connect live rate" },
  },
  {
    id: "aave-usdc-supply",
    title: "Aave USDC lending-rate monitor",
    summary: "A lending signal should show supply APY, utilization and risk context together. This demonstrates the category without freezing a changing rate into the demo.",
    category: "Lending rate",
    eventDate: null,
    sourceUrl: "https://app.aave.com/markets/",
    sourceName: "Aave Markets",
    verification: "Live data required",
    archetypes: ["sage"],
    metric: { label: "Supply APY", value: "Connect live rate" },
  },
  {
    id: "ena-sponsored-market",
    title: "ENA market briefing",
    summary: "An illustrative paid placement showing how a market campaign stays visibly sponsored while entering the same relevance and provenance pipeline as organic content.",
    category: "Sponsored market",
    eventDate: null,
    sourceUrl: "https://www.ethena.fi/",
    sourceName: "Ethena",
    verification: "Demo placement",
    archetypes: ["sage"],
    sponsored: true,
    metric: { label: "Commercial status", value: "Sponsored demo" },
  },
  {
    id: "pendle-expiry-watch",
    title: "Expiry watch: sUSDai maturity",
    summary: "The same market record becomes a calendar event so Sage can surface approaching maturity separately from general feed relevance.",
    category: "Expiry market",
    eventDate: "2027-02-25",
    sourceUrl: "https://app.pendle.finance/trade/markets",
    sourceName: "Pendle Markets",
    verification: "Reference",
    archetypes: ["sage"],
    metric: { label: "Maturity", value: "25 Feb 2027" },
  },
];

export function discoveriesFor(archetype: ArchetypeId): Discovery[] {
  return discoveries.filter((item) => item.archetypes.includes(archetype));
}
