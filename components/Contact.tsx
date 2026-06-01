"use client";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 0 60px", position: "relative" }}>
      <div className="glow-teal" style={{ bottom: 0, left: "40%", opacity: 0.5 }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ maxWidth: 680 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>// 08 contact</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
            Let's build<br />
            <span style={{ color: "var(--teal)" }}>something.</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
            Open to data roles, collaborations, and interesting conversations. Email is always the fastest way to reach me — I read it daily.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            <a href="mailto:vinupram.sa@gmail.com" className="btn-primary">
              📧 Email me
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              ↓ Download Resume
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/vinup-ram-16b96128b/", accent: "teal" },
              { label: "GitHub", icon: "gh", href: "https://github.com/vinup-ram1308", accent: "coral" },
              { label: "Email", icon: "@", href: "mailto:vinupram.sa@gmail.com", accent: "amber" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 20px",
                borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-card)",
                textDecoration: "none", transition: "all 0.25s",
                color: "var(--text-primary)",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = s.accent === "teal" ? "var(--teal)" : s.accent === "coral" ? "var(--coral)" : "var(--amber)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <span style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: s.accent === "teal" ? "var(--teal-dim)" : s.accent === "coral" ? "var(--coral-dim)" : "var(--amber-dim)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11,
                  color: s.accent === "teal" ? "var(--teal)" : s.accent === "coral" ? "var(--coral)" : "var(--amber)",
                }}>{s.icon}</span>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14 }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--teal)" }}>
            VR<span style={{ color: "var(--coral)" }}>.</span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
            © 2026 Vinup Ram S A · Built to impress · Deployed on Vercel
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
            Bengaluru, India 🇮🇳
          </div>
        </div>
      </div>
    </section>
  );
}
