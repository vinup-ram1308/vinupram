"use client";

const skillGroups = [
  {
    label: "Languages",
    accent: "teal",
    skills: ["Python", "R", "SQL", "Java", "JavaScript", "HTML/CSS", "C", "LaTeX"],
  },
  {
    label: "ML / AI & Data",
    accent: "coral",
    skills: ["Scikit-learn", "TensorFlow", "Deep Learning", "ETL/ELT Pipelines", "Data Visualization", "Google ADK", "Gemini API", "LangChain"],
  },
  {
    label: "Cloud & Infrastructure",
    accent: "amber",
    skills: ["GCP", "BigQuery", "Vertex AI", "Cloud Run", "Microsoft Azure", "Azure OpenAI", "Azure AI Services", "Azure AI Search"],
  },
  {
    label: "BI & Visualization",
    accent: "purple",
    skills: ["Power BI", "DAX", "Power Query", "Excel", "Interactive Dashboards"],
  },
  {
    label: "Tools & Practices",
    accent: "teal",
    skills: ["FastAPI", "Git", "A/B Testing", "Agile", "Data Structures & Algorithms", "Copilot", "AI Agents"],
  },
  {
    label: "Currently Learning",
    accent: "coral",
    skills: ["Interactive Dashboard Design", "GCP Analytics", "Advanced LLM Architectures", "Agentic Workflows"],
  },
];

const tagClass: Record<string, string> = {
  teal: "tag-teal",
  coral: "tag-coral",
  amber: "tag-amber",
  purple: "tag-purple",
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 0", position: "relative" }}>
      <div className="glow-coral" style={{ top: "20%", right: -150, opacity: 0.6 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 03 skills</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            What I <span style={{ color: "var(--amber)" }}>work with.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {skillGroups.map((g, i) => (
            <div key={i} className="card" style={{ padding: "24px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16,
                color: g.accent === "teal" ? "var(--teal)" : g.accent === "coral" ? "var(--coral)" : g.accent === "amber" ? "var(--amber)" : "var(--purple)" }}>
                {g.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.skills.map(s => (
                  <span key={s} className={`tag ${tagClass[g.accent]}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun strikethrough section */}
        <div style={{ marginTop: 48, padding: "24px 32px", borderRadius: 16, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            // as never featured in — yet
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {["Forbes 30 Under 30", "TechCrunch", "YourStory", "LinkedIn Top Voice", "Shark Tank India", "Y Combinator", "Google I/O Stage"].map(t => (
              <span key={t} style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--text-muted)", textDecoration: "line-through", textDecorationColor: "var(--teal)" }}>{t}</span>
            ))}
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "var(--teal)", fontStyle: "italic" }}>· yet ·</span>
          </div>
        </div>
      </div>
    </section>
  );
}
