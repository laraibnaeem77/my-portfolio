export default function Footer() {
  const year = new Date().getFullYear();
  const links = ["About", "Skills", "Projects", "Services", "Contact"];
  const socials = [
    { name: "GitHub", href: "https://github.com/laraibnaeem77", icon: "🐙" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/laraib-naeem-513767353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "💼" },
  ];
 
  return (
    <footer style={{
      background: "#030310",
      borderTop: "1px solid rgba(99,215,255,0.1)",
      padding: "60px 2rem 30px"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "3rem", marginBottom: 48 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 18, color: "#fff", fontFamily: "'Space Grotesk',sans-serif"
              }}>L</div>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>
                Laraib Naeem<span style={{ color: "#63D7FF" }}></span>
              </span>
            </div>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 280, margin: "0 0 24px" }}>
              Full-Stack Developer  in Lahore, Pakistan. Building digital products that matter.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} title={s.name} style={{
                  width: 38, height: 38, borderRadius: 8,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, textDecoration: "none", transition: "background 0.2s, border-color 0.2s"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,215,255,0.1)"; e.currentTarget.style.borderColor = "rgba(99,215,255,0.35)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
 
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 20px" }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map(l => (
                <li key={l} style={{ marginBottom: 12 }}>
                  <button onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" })} style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, fontWeight: 500,
                    color: "rgba(255,255,255,0.55)", padding: 0, transition: "color 0.2s"
                  }}
                    onMouseEnter={e => e.target.style.color = "#63D7FF"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.55)"}
                  >{l}</button>
                </li>
              ))}
            </ul>
          </div>
 
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 20px" }}>
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Frontend Development", "Backend Development", "Full-Stack Projects", "Consultation"].map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
 
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12
        }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {year} Laraib. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>
            Built with React & ❤️
          </p>
        </div>
      </div>
 
      <style>{`
        @media(max-width:768px){
          .footer-grid{grid-template-columns:1fr!important;gap:2rem!important;}
        }
      `}</style>
    </footer>
  );
}
 