"use client";

const projects = [
  {
    name: "CareerCompass",
    year: "2026",
    status: "shipped",
    tagline: "Multi-agent ML career intelligence platform",
    desc: "Built and deployed a multi-agent ML solution on GCP for Google Gen AI Academy APAC. Architected ETL pipelines on BigQuery enabling real-time trend analysis across large structured datasets. Deployed production-ready on Cloud Run with Vertex AI inference.",
    tags: ["Google ADK", "Gemini 2.5 Flash", "Vertex AI", "BigQuery", "Cloud Run"],
    accent: "teal",
    link: "https://github.com/vinup-ram1308",
  },
  {
    name: "NoteBridge App",
    year: "2025",
    status: "shipped",
    tagline: "AI-powered structured + unstructured data processor",
    desc: "Designed and implemented an AI-powered application processing both structured and unstructured data — audio and handwritten images. Built a Python/FastAPI backend handling real-time ML inference and data transformation end-to-end.",
    tags: ["Whisper AI", "EasyOCR", "Python", "FastAPI", "LaTeX"],
    accent: "coral",
    link: "https://github.com/vinup-ram1308",
  },
  {
    name: "Data Analyst Agent",
    year: "2026",
    status: "in-progress",
    tagline: "Conversational analytics assistant",
    desc: "An intelligent data analyst agent that interprets natural language queries, runs analyses, and surfaces insights — bridging the gap between raw data and business understanding.",
    tags: ["Python", "AI Agents", "LangChain", "GCP"],
    accent: "amber",
    link: "https://github.com/vinup-ram1308",
  },
];

const accentMap: Record<string, { color: string; dim: string }> = {
  teal: { color: "var(--teal)", dim: "var(--teal-dim)" },
  coral: { color: "var(--coral)", dim: "var(--coral-dim)" },
  amber: { color: "var(--amber)", dim: "var(--amber-dim)" },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 02 projects</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Things I've <span style={{ color: "var(--coral)" }}>built.</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 16, maxWidth: 480 }}>
            A mix of shipped solutions and things still in the oven. Each one taught me something new.
          </p>
        </div>

        <div style={{ display: "grid", gap: 20 }}>
          {projects.map((p, i) => {
            const a = accentMap[p.accent];
            return (
              <div key={i} className="card" style={{ padding: "28px 32px", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start", borderLeft: `3px solid ${a.color}` }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{p.year}</span>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: 10, padding: "2px 8px", borderRadius: 100,
                      background: p.status === "in-progress" ? "var(--amber-dim)" : a.dim,
                      color: p.status === "in-progress" ? "var(--amber)" : a.color,
                      border: `1px solid ${p.status === "in-progress" ? "rgba(245,185,66,0.3)" : a.color + "44"}`,
                    }}>
                      {p.status === "in-progress" ? "In Progress" : "Shipped"}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ fontSize: 13, color: a.color, marginBottom: 12, fontFamily: "var(--font-mono)" }}>{p.tagline}</p>
                  <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 16, maxWidth: 620 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 100, border: "1px solid var(--border-hover)", color: "var(--text-secondary)", fontSize: 12, fontFamily: "var(--font-mono)", textDecoration: "none", transition: "all 0.2s", whiteSpace: "nowrap" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = a.color; (e.currentTarget as HTMLAnchorElement).style.borderColor = a.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-hover)"; }}
                >
                  GitHub ↗
                </a>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 24, textAlign: "center" }}>
          <a href="https://github.com/vinup-ram1308" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            More on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
