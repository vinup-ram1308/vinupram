"use client";

const facts = [
  { emoji: "🎤", title: "Trained Singer", desc: "Lead vocalist in a university band & winner of multiple singing competitions." },
  { emoji: "🎸", title: "Guitar + Keyboard", desc: "Plays guitar and is currently learning keyboard — music runs deep." },
  { emoji: "⚽", title: "Sports Fanatic", desc: "Footballer, badminton state player, Kho-Kho athlete who represented university thrice at national level." },
  { emoji: "🧩", title: "Puzzle Solver", desc: "Loves a good logic puzzle — which explains the jump into data science." },
  { emoji: "💃", title: "Occasional Dancer", desc: "Dances for fun. No further questions." },
  { emoji: "🏙️", title: "Bengaluru Born", desc: "Proudly from the Silicon Valley of India — tech is in the city's DNA." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 0", position: "relative" }}>
      <div className="glow-teal" style={{ top: "50%", left: -200, transform: "translateY(-50%)", opacity: 0.5 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 01 about</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
            The human behind<br />
            <span style={{ color: "var(--teal)" }}>the data.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 24 }}>
              I'm a Computer Science, Mathematics, and Statistics graduate currently navigating the world of Risk Consulting at PwC — while keeping one eye firmly on the data horizon.
            </p>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 24 }}>
              My academic roots in data science mean I think in models, patterns, and pipelines. Whether it's a fintech risk assessment or a GCP-deployed ML agent, I bring the same obsession: make data <em style={{ color: "var(--text-primary)", fontStyle: "normal", fontWeight: 500 }}>actually mean something</em>.
            </p>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: 36 }}>
              Outside the terminal, I'm a singer, a sportsperson, and someone who will absolutely challenge you to a puzzle.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Christ University '25", "8.92 CGPA", "PwC Advisory", "BSc CS + Math + Stats"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Fun facts grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {facts.map((f, i) => (
              <div key={i} className="card" style={{ padding: "18px 16px" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{f.emoji}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #about .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
