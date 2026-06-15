export default function About() {
  const timeline = [
    { year: "2022", title: "Started Web Dev Journey", desc: "Began learning HTML, CSS, JavaScript and fell in love with frontend development." },
    { year: "2023", title: "Full Stack Development (React) ", desc: "I specialize in building responsive, user-friendly interfaces with React and Tailwind CSS. Looking for opportunities to create impactful web experiences." },
    { year: "2024", title: "Backend development ", desc: "Python backend with Django & FastAPI.." },
    
  ];
 
  return (
    <section id="about" style={{
      padding: "100px 2rem",
      background: "#07071A",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600,
            color: "#63D7FF", letterSpacing: "2px", textTransform: "uppercase"
          }}>About Me</span>
          <h2 style={{
            fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(32px,4vw,52px)",
            fontWeight: 700, color: "#fff", margin: "12px 0 0", letterSpacing: "-1px"
          }}>The Person Behind the Code</h2>
        </div>
 
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "5rem", alignItems: "start"
        }} className="about-grid">
          <div>
            <p style={{
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 17,
              color: "rgba(255,255,255,0.7)", lineHeight: 1.85, margin: "0 0 24px"
            }}>
              I'm a Lahore-based full-stack developer passionate about building fast, 
  scalable, and user-focused web applications. I turn ideas into reality using 
  modern technologies like React and Python.
            </p>
            <p style={{
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 17,
              color: "rgba(255,255,255,0.7)", lineHeight: 1.85, margin: "0 0 40px"
            }}>
              My stack covers the complete development journey — from React interfaces and 
  Python APIs to database design and cloud deployment. I'm passionate about 
  writing clean, performant code that works seamlessly across all devices.
            </p>
 
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                ["📍", "Lahore, Pakistan"],
                ["🎓", "BS Computer Science"],
                ["💼", "Open to Entry-Level Roles"],
                ["🌐", "English & Urdu"],
              ].map(([icon, text]) => (
                <div key={text} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.04)", borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.07)", padding: "12px 16px"
                }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
 
            <a href="/Laraib%20Naeem%20CV.pdf" download style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginTop: 32,
              background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
              border: "none", borderRadius: 10, padding: "13px 26px",
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 15,
              fontWeight: 600, color: "#fff", textDecoration: "none",
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              ⬇ Download Resume
            </a>
          </div>
 
          <div>
            <h3 style={{
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 18,
              fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 32,
              letterSpacing: "0.5px"
            }}>My Journey</h3>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", left: 20, top: 0, bottom: 0,
                width: 1, background: "linear-gradient(to bottom,#63D7FF,#7C4DFF,transparent)"
              }} />
              {timeline.map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 24, marginBottom: 36, paddingLeft: 10
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: 11,
                    fontWeight: 700, color: "#fff", zIndex: 1,
                    boxShadow: "0 0 20px rgba(124,77,255,0.5)"
                  }}>{item.year.slice(2)}</div>
                  <div style={{ paddingTop: 6 }}>
                    <div style={{
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: 12,
                      color: "#63D7FF", fontWeight: 600, marginBottom: 4
                    }}>{item.year}</div>
                    <div style={{
                      fontFamily: "'Clash Display',sans-serif", fontSize: 17,
                      fontWeight: 600, color: "#fff", marginBottom: 6
                    }}>{item.title}</div>
                    <div style={{
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: 14,
                      color: "rgba(255,255,255,0.55)", lineHeight: 1.65
                    }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      <style>{`
        @media(max-width:768px){
          .about-grid{grid-template-columns:1fr!important;gap:3rem!important;}
        }
      `}</style>
    </section>
  );
}
 