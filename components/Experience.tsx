"use client";

const experiences = [
  {
    role: "Analyst — Risk Consulting",
    company: "PricewaterhouseCoopers (PwC)",
    companyShort: "PwC",
    period: "Jul 2025 — Present",
    location: "Bengaluru, India",
    type: "Full-time",
    accent: "teal",
    bullets: [
      "Conducted data analysis and risk assessments across 3 clients and 4 audit quarters, working with datasets exceeding 500,000 rows; used Power BI to process and visualize data beyond Excel's limits, surfacing actionable insights for governance and compliance decision-making.",
      "Automated recurring audit workflows for 4 client products using Python, reducing manual reporting effort and improving process consistency across credit underwriting, checkout finance, and payroll functions.",
      "Translated ambiguous business problems into structured analytical findings; communicated recommendations to a cross-functional stakeholder group of 10–15 client representatives spanning business and technical functions.",
    ],
  },
];

const accentMap: Record<string, string> = {
  teal: "var(--teal)",
  coral: "var(--coral)",
};

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 04 experience</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Where I've <span style={{ color: "var(--teal)" }}>worked.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 6, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, var(--teal) 0%, transparent 100%)" }} />

          {experiences.map((e, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 32 }}>
              {/* Dot */}
              <div style={{ position: "absolute", left: -32, top: 24, width: 13, height: 13, borderRadius: "50%", background: accentMap[e.accent], border: "2px solid var(--bg)", boxShadow: `0 0 12px ${accentMap[e.accent]}66` }} />

              <div className="card" style={{ padding: "28px 32px", borderLeft: `3px solid ${accentMap[e.accent]}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", marginBottom: 4 }}>{e.role}</h3>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: accentMap[e.accent] }}>{e.company}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 4 }}>{e.period}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{e.location}</div>
                  </div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: accentMap[e.accent], marginTop: 6, flexShrink: 0, fontSize: 8 }}>◆</span>
                      <span style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education node */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: -32, top: 24, width: 13, height: 13, borderRadius: "50%", background: "var(--purple)", border: "2px solid var(--bg)" }} />
            <div className="card" style={{ padding: "24px 32px", borderLeft: "3px solid var(--purple)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, letterSpacing: "-0.02em", marginBottom: 4 }}>BSc — CS, Mathematics & Statistics</h3>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--purple)" }}>Christ (Deemed to be) University</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)", marginBottom: 4 }}>Aug 2022 — May 2025</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>CGPA: 8.92</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
