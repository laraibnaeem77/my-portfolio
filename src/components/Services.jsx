const services = [
  {
    icon: "⚛️",
    title: "Frontend Development",
    desc: "Pixel-perfect React applications with smooth animations, reusable components, and excellent performance across all devices.",
    features: ["React & Next.js", "TypeScript", "TailwindCSS", "Responsive Design"],
    gradient: "linear-gradient(135deg,rgba(99,215,255,0.15),rgba(124,77,255,0.1))",
    accent: "#63D7FF",
  },
  {
    icon: "🐍",
    title: "Backend Development",
    desc: "Scalable Python APIs with FastAPI or Django. From database design to auth, payments, and third-party integrations.",
    features: ["FastAPI & Django", "REST APIs", "PostgreSQL", "Docker & Deployment"],
    gradient: "linear-gradient(135deg,rgba(124,77,255,0.15),rgba(255,107,157,0.1))",
    accent: "#7C4DFF",
  },
  
  {
    icon: "🚀",
    title: "Full-Stack Solutions",
    desc: "Complete product development from idea to deployment. I handle the entire stack so you have one point of contact.",
    features: ["End-to-End Delivery", "CI/CD Setup", "Ongoing Support"],
    gradient: "linear-gradient(135deg,rgba(255,154,60,0.12),rgba(124,77,255,0.1))",
    accent: "#FF9A3C",
  },
];
 
const process = [
  { step: "01", title: "Discovery", desc: "We discuss your goals, target users, and technical requirements." },
  { step: "02", title: "Develop", desc: "Clean, tested code delivered in sprints with regular updates." },
  { step: "03", title: "Deploy", desc: "Launch, performance optimize, and hand off with full documentation." },
];
 
export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 2rem", background: "#05050F" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600, color: "#63D7FF", letterSpacing: "2px", textTransform: "uppercase" }}>
            What I Do
          </span>
          <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", margin: "12px 0 0", letterSpacing: "-1px" }}>
            Services I Offer
          </h2>
        </div>
 
        {/* Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 24, marginBottom: 80 }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: s.gradient,
              border: `1px solid ${s.accent}22`,
              borderRadius: 20, padding: 28,
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 20px 40px ${s.accent}22`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 20px" }}>
                {s.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ color: s.accent, fontSize: 14 }}>✓</span>
                    <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.75)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
 
        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 24, padding: "48px 40px"
        }}>
          <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", textAlign: "center", margin: "0 0 48px" }}>
            How I Work
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 32, position: "relative" }}>
            {process.map((p, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", margin: "0 auto 16px",
                  background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700, color: "#fff"
                }}>{p.step}</div>
                <h4 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{p.title}</h4>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}