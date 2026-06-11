"use client";

const skillGroups = [
  {
    label: "Languages",
    accent: "teal",
    skills: ["Python", "R", "SQL", "Java", "JavaScript", "LaTeX", "HTML/CSS"],
  },
  {
    label: "Analytics & Data",
    accent: "coral",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Statistical Modelling", "ETL/ELT Pipelines", "Data Quality Validation", "A/B Testing", "Google ADK", "LangChain"],
  },
  {
    label: "Cloud & Infrastructure",
    accent: "amber",
    skills: ["GCP", "BigQuery", "Vertex AI", "Cloud Run", "Microsoft Azure", "Azure OpenAI", "Azure AI Services", "Cloud-native Architectures"],
  },
  {
    label: "BI & Visualization",
    accent: "purple",
    skills: ["Power BI", "DAX", "Power Query", "Excel (Advanced)", "Data Visualization", "Interactive Dashboards"],
  },
  {
    label: "Tools & Practices",
    accent: "teal",
    skills: ["FastAPI", "Git", "Agile", "Documentation", "Data Structures & Algorithms", "Google ADK", "AI Agents"],
  },
  {
    label: "Currently Learning",
    accent: "coral",
    skills: ["Advanced Dashboard Design", "GCP Analytics", "Agentic Workflows", "Keyboard 🎹"],
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

        {/* Fun data terminal block */}
        <div style={{ marginTop: 48, padding: "24px 32px", borderRadius: 16, background: "var(--bg-card)", border: "1px solid var(--border)", fontFamily: "var(--font-mono)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--coral)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--amber)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--teal)" }} />
            <span style={{ fontSize: 11, color: "var(--text-muted)", marginLeft: 8 }}>vinup@portfolio ~ $</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { cmd: "describe_vinup --trait superpower", out: "Turns 500K row datasets into boardroom-ready insights 📊" },
              { cmd: "vinup.hobbies.random()", out: '["singing", "football", "guitar", "puzzles", "keyboard"] — pick one, he\'s done it today' },
              { cmd: "git log --oneline --author=Vinup", out: "feat: deployed ML agent on GCP ✦ fix: automated 4 audit workflows ✦ feat: nailed PL-300 + AI-102" },
              { cmd: "vinup --currently-learning", out: "Interactive dashboards, GCP analytics, advanced agentic workflows... and keyboard scales 🎹" },
            ].map((l, i) => (
              <div key={i}>
                <div style={{ fontSize: 12, color: "var(--teal)" }}>
                  <span style={{ color: "var(--text-muted)" }}>$ </span>{l.cmd}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", paddingLeft: 12, marginTop: 2 }}>→ {l.out}</div>
              </div>
            ))}
            <div style={{ fontSize: 12, color: "var(--teal)", marginTop: 4 }}>
              <span style={{ color: "var(--text-muted)" }}>$ </span>
              <span style={{ borderRight: "2px solid var(--teal)", paddingRight: 2, animation: "pulse-dot 1s ease-in-out infinite" }}> </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
