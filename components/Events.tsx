"use client";

const events = [
  {
    name: "Google Gen AI Academy APAC — Cohort 1",
    org: "Google",
    year: "2025",
    desc: "Selected for the inaugural APAC cohort of Google's Gen AI Academy. Built and deployed CareerCompass — a multi-agent ML solution on GCP — as the capstone project.",
    tags: ["Gen AI", "GCP", "Multi-agent", "APAC"],
    accent: "teal",
    icon: "🤖",
  },
  {
    name: "Google Gen AI Academy APAC — Cohort 2",
    org: "Google",
    year: "2026",
    desc: "Currently participating in the second cohort — continuing to push boundaries in generative AI and cloud-native ML application development.",
    tags: ["Gen AI", "GCP", "Ongoing"],
    accent: "teal",
    icon: "🌐",
    ongoing: true,
  },
  {
    name: "Google Arcade — Trooper Badge",
    org: "Google Cloud",
    year: "2025",
    desc: "Earned the coveted Arcade Trooper badge along with official Google Cloud merch. Opened doors to the Google Developer Community.",
    tags: ["Google Cloud", "Community", "Badge"],
    accent: "amber",
    icon: "🏅",
  },
  {
    name: "All India Inter-University Kho-Kho",
    org: "South Zone Championship",
    year: "2022–2025",
    desc: "Represented Christ University three times at the national level South Zone Kho-Kho championship — because data scientists can tackle too.",
    tags: ["Sports", "National Level", "University"],
    accent: "coral",
    icon: "🏃",
  },
  {
    name: "Code Connect — Co-Head",
    org: "Christ University",
    year: "2024",
    desc: "Co-organized and led the university's flagship coding event, managing participants, challenges, and judging.",
    tags: ["Leadership", "Coding Event", "Organizing"],
    accent: "purple",
    icon: "💻",
  },
  {
    name: "School Head Boy",
    org: "Leadership",
    year: "2020",
    desc: "Elected Head Boy in 10th grade — early evidence that people trust someone who does their homework.",
    tags: ["Leadership", "School"],
    accent: "purple",
    icon: "🎖️",
  },
];

const accentStyle: Record<string, { color: string; tag: string }> = {
  teal: { color: "var(--teal)", tag: "tag-teal" },
  coral: { color: "var(--coral)", tag: "tag-coral" },
  amber: { color: "var(--amber)", tag: "tag-amber" },
  purple: { color: "var(--purple)", tag: "tag-purple" },
};

export default function Events() {
  return (
    <section id="events" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 06 events & achievements</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Been there, <span style={{ color: "var(--coral)" }}>done that.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {events.map((e, i) => {
            const a = accentStyle[e.accent];
            return (
              <div key={i} className="card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{e.icon}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {(e as any).ongoing && (
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, padding: "2px 8px", borderRadius: 100, background: "var(--teal-dim)", color: "var(--teal)", border: "1px solid rgba(0,212,168,0.3)" }}>Ongoing</span>
                    )}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{e.year}</span>
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, lineHeight: 1.3, marginBottom: 4 }}>{e.name}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: a.color, marginBottom: 10 }}>{e.org}</p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 14 }}>{e.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.tags.map(t => <span key={t} className={`tag ${a.tag}`}>{t}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
