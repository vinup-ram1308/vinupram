"use client";
import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Data Engineer",
  "Data Scientist",
  "Risk Consultant",
  "Cloud Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 100 }} className="grid-noise">
      <div className="glow-teal" style={{ top: -100, right: -100 }} />
      <div className="glow-coral" style={{ bottom: 100, left: -100 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative" }}>

        {/* Mobile: photo on top, centered */}
        <div className="hero-photo-mobile" style={{ display: "none", justifyContent: "center", marginBottom: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 160, height: 200, borderRadius: 20, border: "1px solid var(--border-hover)", overflow: "hidden", position: "relative", boxShadow: "0 0 30px rgba(0,212,168,0.15)" }}>
              <img src="/vinup.jpeg" alt="Vinup Ram S A" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(0deg, rgba(10,10,15,0.6) 0%, transparent 100%)" }} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="tag tag-teal">Bengaluru, IN</span>
              <span className="tag tag-coral">PwC</span>
            </div>
          </div>
        </div>

        {/* Desktop: side by side grid */}
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid rgba(0,212,168,0.25)", background: "rgba(0,212,168,0.06)", marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--teal)", display: "block" }} className="animate-pulse-dot" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--teal)" }}>Available for opportunities</span>
            </div>

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Vinup Ram<br />
              <span style={{ color: "var(--teal)" }}>S A</span>
            </h1>

            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 3vw, 32px)", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 24, minHeight: 42 }}>
              <span style={{ color: "var(--coral)" }}>{displayed}</span>
              <span style={{ color: "var(--coral)", opacity: 0.6 }}>|</span>
            </div>

            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 540, marginBottom: 36 }}>
              CS, Mathematics & Statistics graduate at PwC Risk Consulting. Bridging business intuition with data intelligence — cloud, AI, and analytics are my playground.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary">View my work →</a>
              <a href="#contact" className="btn-secondary">Get in touch</a>
            </div>

            {/* Stats row */}
            <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 52, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
              {[
                { val: "3", label: "Industry Certs" },
                { val: "4+", label: "Projects Built" },
                { val: "GCP+Azure", label: "Cloud Platforms" },
                { val: "8.92", label: "CGPA" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, color: "var(--text-primary)" }}>{s.val}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop photo */}
          <div className="hero-photo-desktop" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 260, height: 320, borderRadius: 24, border: "1px solid var(--border-hover)", overflow: "hidden", position: "relative", boxShadow: "0 0 40px rgba(0,212,168,0.12)" }} className="animate-float">
              <img src="/vinup.jpeg" alt="Vinup Ram S A" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(0deg, rgba(10,10,15,0.6) 0%, transparent 100%)" }} />
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span className="tag tag-teal">Bengaluru, IN</span>
              <span className="tag tag-coral">PwC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, var(--text-muted) 0%, transparent 100%)" }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo-desktop { display: none !important; }
          .hero-photo-mobile { display: flex !important; }
          .stats-row { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
