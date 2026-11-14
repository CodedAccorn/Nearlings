"use client";

import { useMemo, useState } from "react";
import { archetypes, getArchetype, type ArchetypeId } from "../lib/archetypes";
import { discoveries, discoveriesFor } from "../lib/discovery";
import {
  consumeSuccessfulInference,
  demoInference,
  feedPet,
  nearlingViewSchema,
  type AllowanceState,
  type PetState,
} from "../lib/domain";

const initialPet: PetState = { hunger: 68, happiness: 62, energy: 74 };
const viewExample = nearlingViewSchema.parse({
  theme: "guardian",
  components: [
    { type: "briefing", title: "Source first", body: "A governed view can adapt presentation without changing facts or permissions." },
    { type: "source-card", discoveryId: "near-ai-docs" },
  ],
  actions: ["open-source", "save-discovery"],
});

function EvidenceBadge({ children, live = false }: { children: React.ReactNode; live?: boolean }) {
  return <span className={live ? "badge live" : "badge demo"}>{children}</span>;
}

export default function Home() {
  const [selected, setSelected] = useState<ArchetypeId>("hunter");
  const [pet, setPet] = useState(initialPet);
  const [allowance, setAllowance] = useState<AllowanceState>({ available: 3, processed: new Set() });
  const [reply, setReply] = useState<ReturnType<typeof demoInference> | null>(null);
  const [message, setMessage] = useState("What should we investigate today?");
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [notice, setNotice] = useState("Ready for a deterministic demo interaction.");

  const archetype = getArchetype(selected);
  const relevant = useMemo(() => discoveriesFor(selected), [selected]);
  const dated = discoveries.filter((item) => item.eventDate);

  function talk(key = `demo-${selected}-${message.trim().toLowerCase()}`) {
    try {
      const next = consumeSuccessfulInference(allowance, key);
      setAllowance(next);
      setReply(demoInference(selected));
      setLastKey(key);
      setNotice(next === allowance ? "Duplicate request replayed safely — allowance unchanged." : "Validated demo response — one unit consumed.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Interaction failed safely.");
    }
  }

  return (
    <main style={{ "--accent": archetype.color, "--soft": archetype.softColor } as React.CSSProperties}>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="Nearlings home"><span>n</span> Nearlings</a>
        <div className="navlinks"><a href="#companion">Companion</a><a href="#discover">Discover</a><a href="#vision">Vision</a></div>
        <EvidenceBadge>DEMO MODE</EvidenceBadge>
      </nav>

      <section id="top" className="hero">
        <div className="eyebrow">OWNER-CONTROLLED COMPANION INTELLIGENCE</div>
        <h1>Raise a companion.<br /><em>Read the world together.</em></h1>
        <p>Nearlings turns sourced crypto developments into a continuous, personality-driven experience across conversation, discovery and time.</p>
        <div className="heroActions"><a className="button primary" href="#companion">Meet your Nearling</a><a className="button ghost" href="#vision">See the system idea</a></div>
        <div className="truthline"><span>NEAR NFT identity</span><span>Grounded narration</span><span>Transparent sponsorship</span><span>Safe generative UI</span></div>
      </section>

      <section id="companion" className="section">
        <div className="sectionHeading"><div><span className="step">01</span><h2>Choose a point of view</h2></div><p>One intelligence layer. Four ways to notice what matters.</p></div>
        <div className="archetypeGrid">
          {archetypes.map((item) => (
            <button key={item.id} className={`archetypeCard ${selected === item.id ? "selected" : ""}`} onClick={() => { setSelected(item.id); setReply(null); }}>
              <span className="glyph" style={{ background: item.softColor, color: item.color }}>{item.glyph}</span>
              <strong>{item.name}</strong><small>{item.role}</small>
              <span className="interest">{item.interests.join(" · ")}</span>
            </button>
          ))}
        </div>

        <div className="petConsole">
          <div className="petStage">
            <div className="stageTop"><EvidenceBadge>SIMULATED IDENTITY</EvidenceBadge><span>Token #N-104</span></div>
            <div className="orb"><div className="petFace"><i /><b>•</b><b>•</b><u /></div><span>{archetype.glyph}</span></div>
            <h3>{archetype.name} Nearling</h3><p>{archetype.voice}</p>
            <div className="owner">owner <strong>demo.near</strong></div>
          </div>
          <div className="petControls">
            <div className="controlHeader"><div><span className="kicker">CARE LOOP</span><h3>State with boundaries</h3></div><button className="button primary small" onClick={() => setPet(feedPet(pet))}>Feed +</button></div>
            {(["hunger", "happiness", "energy"] as const).map((key) => <div className="meter" key={key}><div><span>{key}</span><strong>{pet[key]}</strong></div><div className="track"><i style={{ width: `${pet[key]}%` }} /></div></div>)}
            <div className="talkPanel">
              <div className="talkMeta"><span className="kicker">SHARED INFERENCE CLIENT</span><strong>{allowance.available} / 3 units</strong></div>
              <textarea value={message} onChange={(event) => setMessage(event.target.value)} maxLength={180} aria-label="Message your Nearling" />
              <div className="talkActions"><button className="button primary" onClick={() => talk()}>Talk to {archetype.name}</button><button className="textButton" disabled={!lastKey} onClick={() => lastKey && talk(lastKey)}>Replay last request</button></div>
              <p className="notice">{notice}</p>
              {reply && <div className="reply"><span>{reply.emotion}</span><p>“{reply.dialogue}”</p><small>Deterministic local provider · schema validated · no live AI claim</small></div>}
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="section darkSection">
        <div className="sectionHeading light"><div><span className="step">02</span><h2>One record, many moments</h2></div><p>Feed, calendar and journal are views of the same governed content.</p></div>
        <div className="contentColumns">
          <div className="feedColumn"><div className="columnTitle"><h3>{archetype.name} feed</h3><span>{relevant.length} relevant</span></div>
            {relevant.map((item) => <article className="discoveryCard" key={item.id}>
              <div className="cardMeta"><span>{item.category}</span>{item.sponsored && <b>SPONSORED · DEMO PLACEMENT</b>}</div>
              <h4>{item.title}</h4><p>{item.summary}</p>
              <div className="sourceRow"><span>{item.verification}</span><a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceName} ↗</a></div>
            </article>)}
          </div>
          <div className="calendarColumn"><div className="columnTitle"><h3>Calendar lens</h3><span>same registry</span></div>
            <div className="timeline">{dated.map((item) => <div className="event" key={item.id}><time>{new Date(`${item.eventDate}T00:00:00Z`).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time><div><strong>{item.title}</strong><span>{item.category}</span></div></div>)}</div>
            <div className="systemNote"><span>CONTINUOUS INFERENCE VISION</span><p>New source → verify → place in time → match context → narrate → present → learn from explicit signals.</p></div>
          </div>
        </div>
      </section>

      <section id="vision" className="section">
        <div className="sectionHeading"><div><span className="step">03</span><h2>Generative UI, governed</h2></div><p>Represented as an allowlisted view document—not arbitrary model-made HTML.</p></div>
        <div className="visionGrid">
          <div className="generatedPreview"><div className="previewHead"><EvidenceBadge>CONCEPT</EvidenceBadge><span>NearlingView · valid</span></div><div className="miniBrief"><span>◇</span><div><strong>{viewExample.components[0].type === "briefing" && viewExample.components[0].title}</strong><p>{viewExample.components[0].type === "briefing" && viewExample.components[0].body}</p></div></div><div className="safeActions"><button>Open source</button><button>Save discovery</button></div></div>
          <div className="guardrails"><span className="kicker">TRUST BOUNDARY</span><h3>The model proposes. The application decides.</h3><ul><li>Only approved components and theme tokens</li><li>Content IDs preserve source and disclosure</li><li>No raw HTML, scripts or transaction payloads</li><li>No authority to debit, transfer or trade</li></ul></div>
        </div>
      </section>

      <footer><div className="brand"><span>n</span> Nearlings</div><p>A cohesive product demonstration. Simulated systems are labeled; sources remain visible.</p><div><EvidenceBadge>DEMO</EvidenceBadge><EvidenceBadge live>VERIFIED SOURCES</EvidenceBadge></div></footer>
    </main>
  );
}
