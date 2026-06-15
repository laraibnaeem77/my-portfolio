import { useState, useEffect } from "react";
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = ["About", "Skills", "Projects", "Services", "Contact"];
 
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
 
  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 999,
      background: scrolled ? "rgba(5,5,15,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(99,215,255,0.12)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 18, color: "#fff", fontFamily: "'Space Grotesk', sans-serif"
          }}>LN</div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 20, color: "#fff", letterSpacing: "-0.3px"
          }}>Laraib Naeem<span style={{ color: "#63D7FF" }}></span></span>
        </div>
 
        <ul style={{ display: "flex", gap: 40, listStyle: "none", margin: 0, padding: 0 }}
          className="nav-desktop">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
                fontWeight: 500, color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.3px", transition: "color 0.2s",
                padding: "4px 0",
              }}
                onMouseEnter={e => e.target.style.color = "#63D7FF"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
              >{l}</button>
            </li>
          ))}
        </ul>
 
        <button onClick={() => scrollTo("Contact")} style={{
          background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
          border: "none", borderRadius: 8, padding: "10px 22px",
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
          fontWeight: 600, color: "#fff", cursor: "pointer",
          transition: "opacity 0.2s, transform 0.2s",
        }}
          onMouseEnter={e => { e.target.style.opacity = "0.85"; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.target.style.opacity = "1"; e.target.style.transform = "translateY(0)"; }}
          className="nav-cta"
        >Hire Me</button>
 
        <button onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger" style={{
          display: "none", background: "none", border: "none",
          cursor: "pointer", flexDirection: "column", gap: 5
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 24, height: 2,
              background: "#fff", borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                    : "opacity:0"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1
            }} />
          ))}
        </button>
      </div>
 
      {menuOpen && (
        <div style={{
          background: "rgba(5,5,15,0.98)", borderTop: "1px solid rgba(99,215,255,0.12)",
          padding: "1.5rem 2rem 2rem",
        }} className="nav-mobile-menu">
          {links.map(l => (
            <div key={l} style={{ marginBottom: 20 }}>
              <button onClick={() => scrollTo(l)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 18,
                fontWeight: 600, color: "#fff", padding: 0,
              }}>{l}</button>
            </div>
          ))}
        </div>
      )}
 
      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important;}
          .nav-cta{display:none!important;}
          .nav-hamburger{display:flex!important;}
        }
      `}</style>
    </nav>
  );
}