"use client";

const certs = [
  {
    name: "Azure AI Engineer Associate",
    code: "AI-102",
    issuer: "Microsoft",
    date: "Apr 2026",
    validity: "Valid for 1 year",
    accent: "teal",
    tags: ["Azure OpenAI", "NLP", "Computer Vision", "Generative AI"],
    link: "#",
  },
  {
    name: "Power BI Data Analyst Associate",
    code: "PL-300",
    issuer: "Microsoft",
    date: "May 2026",
    validity: "Valid for 1 year",
    accent: "amber",
    tags: ["Power BI", "DAX", "Power Query", "BI Reporting"],
    link: "#",
  },
  {
    name: "Associate Data Practitioner",
    code: "GCP",
    issuer: "Google Cloud",
    date: "Dec 2025",
    validity: "Valid for 3 years",
    accent: "coral",
    tags: ["BigQuery", "Vertex AI", "Cloud Storage", "Analytics"],
    link: "#",
  },
];

const accentStyle: Record<string, { color: string; dim: string; border: string; tag: string }> = {
  teal: { color: "var(--teal)", dim: "var(--teal-dim)", border: "rgba(0,212,168,0.3)", tag: "tag-teal" },
  amber: { color: "var(--amber)", dim: "var(--amber-dim)", border: "rgba(245,185,66,0.3)", tag: "tag-amber" },
  coral: { color: "var(--coral)", dim: "var(--coral-dim)", border: "rgba(255,107,74,0.3)", tag: "tag-coral" },
};

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 0", position: "relative" }}>
      <div className="glow-teal" style={{ bottom: -100, left: "30%", opacity: 0.4 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 05 certifications</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Credentials &amp; <span style={{ color: "var(--amber)" }}>badges.</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 16 }}>
            Industry-verified skills — the kind that actually mean something on both cloud platforms.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {certs.map((c, i) => {
            const a = accentStyle[c.accent];
            return (
              <div key={i} className="card" style={{ padding: "24px", position: "relative", overflow: "hidden" }}>
                {/* Accent top bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: a.color }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: a.dim, border: `1px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: a.color, textAlign: "center", lineHeight: 1.2 }}>{c.code}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: a.color }}>{c.date}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", marginTop: 2 }}>{c.validity}</div>
                  </div>
                </div>

                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, lineHeight: 1.3, marginBottom: 4 }}>{c.name}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 14 }}>{c.issuer} — Verified Certificate</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {c.tags.map(t => <span key={t} className={`tag ${a.tag}`}>{t}</span>)}
                </div>

                <a href={c.link} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: a.color, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                  View Certificate ↗
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
