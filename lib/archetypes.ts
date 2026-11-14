export type ArchetypeId = "oracle" | "hunter" | "sage" | "guardian";

export type Archetype = {
  id: ArchetypeId;
  name: string;
  role: string;
  glyph: string;
  color: string;
  softColor: string;
  voice: string;
  interests: string[];
};

export const archetypes: Archetype[] = [
  {
    id: "oracle",
    name: "Oracle",
    role: "The Mystic",
    glyph: "✦",
    color: "#7557d8",
    softColor: "#eee9ff",
    voice: "Playful, imaginative and clear about what is fact versus entertainment.",
    interests: ["Narratives", "Sentiment", "Events"],
  },
  {
    id: "hunter",
    name: "Hunter",
    role: "The Explorer",
    glyph: "↗",
    color: "#d66b34",
    softColor: "#fff0e5",
    voice: "Curious and energetic, with an eye for launches and ecosystem expansion.",
    interests: ["Launches", "Airdrops", "Incentives"],
  },
  {
    id: "sage",
    name: "Sage",
    role: "The Analyst",
    glyph: "◫",
    color: "#2b7a66",
    softColor: "#e3f5ef",
    voice: "Measured and educational, comparing evidence, dates and risk.",
    interests: ["Education", "Protocols", "Yield context"],
  },
  {
    id: "guardian",
    name: "Guardian",
    role: "The Protector",
    glyph: "◇",
    color: "#315d99",
    softColor: "#e7f0ff",
    voice: "Vigilant and skeptical, checking provenance before drawing conclusions.",
    interests: ["Security", "Governance", "Risk"],
  },
];

export function getArchetype(id: ArchetypeId): Archetype {
  const archetype = archetypes.find((item) => item.id === id);
  if (!archetype) throw new Error(`Unknown archetype: ${id}`);
  return archetype;
}
