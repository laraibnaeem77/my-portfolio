import { useState } from "react";
 
const categories = {
  Frontend: [
    { name: "React.js", level: 92, icon: "⚛️" },
    { name: "JavaScript (ES6+)", level: 90, icon: "🟨" },
    { name: "TailwindCSS", level: 88, icon: "🎨" },
    { name: "HTML/CSS", level: 95, icon: "🌐" },
    { name: "Next.js", level: 70, icon: "▲" },
  ],
  Backend: [
    { name: "Python", level: 88, icon: "🐍" },
    { name: "FastAPI", level: 82, icon: "⚡" },
    { name: "Django", level: 75, icon: "🎸" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "PostgreSQL", level: 72, icon: "🐘" },
  ],
};
 
function SkillBar({ name, level, icon }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>{icon}</span>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{name}</span>
        </div>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "#63D7FF", fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 100 }}>
        <div style={{
          height: "100%", width: `${level}%`, borderRadius: 100,
          background: "linear-gradient(90deg,#63D7FF,#7C4DFF)",
          boxShadow: "0 0 10px rgba(124,77,255,0.4)",
          transition: "width 1s ease",
        }} />
      </div>
    </div>
  );
}
 
export default function Skills() {
  const [active, setActive] = useState("Frontend");
  const tabs = Object.keys(categories);
 
  return (
    <section id="skills" style={{ padding: "100px 2rem", background: "#05050F" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600, color: "#63D7FF", letterSpacing: "2px", textTransform: "uppercase" }}>
            My Skills
          </span>
          <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", margin: "12px 0 0", letterSpacing: "-1px" }}>
            Tools & Technologies
          </h2>
        </div>
 
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 52, flexWrap: "wrap" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 600,
              padding: "10px 28px", borderRadius: 100, cursor: "pointer",
              border: active === tab ? "none" : "1px solid rgba(255,255,255,0.15)",
              background: active === tab ? "linear-gradient(135deg,#63D7FF,#7C4DFF)" : "transparent",
              color: active === tab ? "#fff" : "rgba(255,255,255,0.6)",
              transition: "all 0.25s",
            }}>
              {tab}
            </button>
          ))}
        </div>
 
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
          <div style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20, padding: 32, gridColumn: "span 2"
          }} className="skills-bars">
            {categories[active].map(s => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
 
        
      </div>
 
      <style>{`
        @media(max-width:768px){
          .skills-bars{grid-column:span 1!important;}
        }
      `}</style>
    </section>
  );
}
 