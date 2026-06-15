import { useState } from "react";

const projects = [
  {
    title: "ToDo App",
    desc: "Full-stack ToDo App with React frontend, Python/FastAPI backend.",
    tags: ["React", "FastAPI", "Python"],
    category: "Full-Stack",
    gradient: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
    icon: "📋", 
    videoUrl: "https://raw.githubusercontent.com/laraibnaeem77/my-portfolio/main/public/todo-app-demo.mp4", // Rename your file to this
    github: "https://github.com/laraibnaeem77/todo-list-fullstack",
  },
  {
    title: "COVID-19 Risk Assessment System",
    desc: "Real-time COVID-19 risk assessment system with AI predictions.",
    tags: ["React", "FastAPI", "Python"],
    category: "Full-Stack",
    gradient: "linear-gradient(135deg,#7C4DFF,#FF6B9D)",
    icon: "🦠",
    videoUrl: "https://raw.githubusercontent.com/laraibnaeem77/my-portfolio/main/public/covid-risk-assessment.mp4", // Rename your file to this
    github: "https://github.com/laraibnaeem77/covid-app",
  },
  {
    title: "Liver Disease Prediction System",
    desc: "ML-based liver disease prediction with interactive dashboard.",
    tags: ["React", "FastAPI", "Python"],
    category: "Full-Stack",
    gradient: "linear-gradient(135deg,#00C9A7,#63D7FF)",
    icon: "🏥",
    videoUrl: "https://raw.githubusercontent.com/laraibnaeem77/my-portfolio/main/public/liver-disease-prediction.mp4", // Rename your file to this
    github: "https://github.com/laraibnaeem77/liver-analytics-fullstack",
  },
  {
    title: "Cricket App",
    desc: "Cricket scores and player statistics application.",
    tags: ["React"],
    category: "Frontend",
    gradient: "linear-gradient(135deg,#FF9A3C,#FF6B9D)",
    icon: "🏏",
    videoUrl: "https://raw.githubusercontent.com/laraibnaeem77/my-portfolio/main/public/cricket-app-demo.mp4", // Rename your file to this
    github: "https://github.com/laraibnaeem77/Cricket-App",
  }
  //{
  //  title: "FinTech Mobile UI Kit",
   // desc: "60+ screen Figma design system for a fintech app. Includes design tokens, components, and prototypes.",
    //tags: ["Figma", "UI/UX", "Design System"],
    //category: "UI/UX",
    //gradient: "linear-gradient(135deg,#63D7FF,#00C9A7)",
    //icon: "💳",
    //videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
    //github: "https://github.com/YOUR_USERNAME/fintech-ui-kit",
 // },
  //{
  //  title: "Real Estate Portal",
   // desc: "Property listing portal with advanced search filters, map integration, and agent CRM panel.",
    //tags: ["React", "Django", "PostgreSQL", "Maps API"],
    //category: "Full-Stack",
   // gradient: "linear-gradient(135deg,#7C4DFF,#63D7FF)",
   // icon: "🏠",
    //videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6",
    //github: "https://github.com/YOUR_USERNAME/real-estate-portal",
  //},
];

const filters = ["All", "Full-Stack", "Frontend"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <>
      <section id="projects" style={{ padding: "100px 2rem", background: "#07071A" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600, color: "#63D7FF", letterSpacing: "2px", textTransform: "uppercase" }}>
              Portfolio
            </span>
            <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", margin: "12px 0 0", letterSpacing: "-1px" }}>
              Featured Projects
            </h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{
                fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, fontWeight: 600,
                padding: "8px 22px", borderRadius: 100, cursor: "pointer",
                border: active === f ? "none" : "1px solid rgba(255,255,255,0.15)",
                background: active === f ? "linear-gradient(135deg,#63D7FF,#7C4DFF)" : "transparent",
                color: active === f ? "#fff" : "rgba(255,255,255,0.6)",
                transition: "all 0.25s",
              }}>{f}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
            {filtered.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20, overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(99,215,255,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div style={{
                  height: 180, background: p.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 64, position: "relative"
                }}>
                  {p.icon}
                  <span style={{
                    position: "absolute", top: 14, right: 14,
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, fontWeight: 600,
                    background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)",
                    padding: "4px 12px", borderRadius: 100, color: "#fff"
                  }}>{p.category}</span>
                </div>

                <div style={{ padding: "24px 24px 20px" }}>
                  <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 18px" }}>
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, fontWeight: 600,
                        padding: "4px 10px", borderRadius: 100,
                        background: "rgba(99,215,255,0.1)", color: "#63D7FF",
                        border: "1px solid rgba(99,215,255,0.2)"
                      }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button 
                      onClick={() => setSelectedVideo(p)}
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600,
                        padding: "8px 18px", borderRadius: 8,
                        background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
                        color: "#fff", textDecoration: "none",
                        transition: "opacity 0.2s", border: "none", cursor: "pointer"
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                    >
                      🎥 Live Demo
                    </button>
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600,
                        padding: "8px 18px", borderRadius: 8,
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.75)", textDecoration: "none",
                        transition: "border-color 0.2s",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "#63D7FF"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
                    >
                      <span>📂</span> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {/* Video Modal - FIXED */}
      {selectedVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(8px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.3s ease"
          }}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "900px",
              background: "#07071A",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              border: "1px solid rgba(99,215,255,0.2)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: "20px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <h3 style={{
                fontFamily: "'Clash Display',sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#fff",
                margin: 0
              }}>
                {selectedVideo.title} - Demo
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  color: "#fff",
                  fontSize: "24px",
                  cursor: "pointer",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              >
                ✕
              </button>
            </div>
      
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#000" }}>
              <video
                controls
                autoPlay
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
      
            <div style={{ padding: "16px 24px", background: "rgba(0,0,0,0.3)" }}>
              <p style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                margin: 0
              }}>
                {selectedVideo.desc}
              </p>
            </div>
          </div>
        </div>
      )}
        </>
  );
}
      