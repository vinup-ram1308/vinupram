"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#certifications", label: "certs" },
  { href: "#events", label: "events" },
  { href: "#vision", label: "vision" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "16px 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      transition: "all 0.4s ease",
    }}>
      <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--teal)", textDecoration: "none", letterSpacing: "-0.02em" }}>
        VR<span style={{ color: "var(--coral)" }}>.</span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: 28 }} className="hidden-mobile">
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
        ))}
      </div>

      <a href="#contact" className="btn-primary" style={{ fontSize: 12, padding: "8px 18px" }}>
        Let's connect
      </a>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </nav>
  );
}
