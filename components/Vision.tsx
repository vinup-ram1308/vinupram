"use client";

const goals = [
  { icon: "📊", title: "Data at Scale", desc: "Working at a world-class company, turning massive datasets into decisions that actually move the needle." },
  { icon: "🤖", title: "AI-Powered Products", desc: "Building intelligent, production-grade data products — pipelines, agents, dashboards — that bridge tech and business." },
  { icon: "☁️", title: "Cloud-Native Mastery", desc: "Becoming fluent in GCP and Azure architectures, designing systems that scale effortlessly." },
  { icon: "🎤", title: "Rockstar (Why Not?)", desc: "Making it big as a singer. Data by day, stage by night. The intersection of logic and art — that's the real goal." },
];

export default function Vision() {
  return (
    <section id="vision" style={{ padding: "100px 0", position: "relative" }}>
      <div className="glow-teal" style={{ top: "50%", right: -200, transform: "translateY(-50%)", opacity: 0.5 }} />
      <div className="glow-coral" style={{ top: "20%", left: -150, opacity: 0.4 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 07 vision</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Where I'm <span style={{ color: "var(--purple)" }}>headed.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", marginTop: 16, maxWidth: 540, lineHeight: 1.75 }}>
            I see myself at the intersection of data, AI, and impact — using analytics to drive decisions that matter, at companies that are building the future.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 48 }}>
          {goals.map((g, i) => (
            <div key={i} className="card" style={{ padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{g.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{g.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65 }}>{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div style={{ padding: "32px 40px", borderRadius: 20, background: "linear-gradient(135deg, rgba(0,212,168,0.06), rgba(167,139,250,0.06))", border: "1px solid rgba(0,212,168,0.15)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, left: -10, fontFamily: "var(--font-display)", fontSize: 120, color: "rgba(0,212,168,0.07)", lineHeight: 1, pointerEvents: "none" }}>"</div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 700, lineHeight: 1.4, color: "var(--text-primary)", position: "relative" }}>
            Data is only as powerful as the <span style={{ color: "var(--teal)" }}>questions you ask</span> of it. I'm here to ask better questions — and build systems that answer them.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", marginTop: 16 }}>— Vinup Ram S A</p>
        </div>
      </div>
    </section>
  );
}
