import { useEffect, useRef } from "react";
 
export default function Hero() {
  const canvasRef = useRef(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    const particles = [];
 
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
 
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
 
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,215,255,${p.opacity})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
 
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
 
  return (
    <section id="home" style={{
      minHeight: "100vh", position: "relative",
      background: "linear-gradient(135deg,#05050F 0%,#0D0D2B 50%,#05050F 100%)",
      display: "flex", alignItems: "center", overflow: "hidden",
    }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
 
      <div style={{
        position: "absolute", top: "15%", left: "5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(124,77,255,0.18) 0%,transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle,rgba(99,215,255,0.14) 0%,transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none"
      }} />
 
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
        position: "relative", zIndex: 2,
        display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center", gap: "4rem", width: "100%"
      }} className="hero-grid">
 
        {/* Left */}
        <div style={{ animation: "fadeUp 0.9s ease both" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(99,215,255,0.1)", border: "1px solid rgba(99,215,255,0.25)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 28
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#63D7FF", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "#63D7FF", fontWeight: 500, letterSpacing: "0.5px" }}>
              Available for Projects
            </span>
          </div>
 
          <h1 style={{
            fontFamily: "'Clash Display',sans-serif",
            fontSize: "clamp(42px,6vw,80px)",
            fontWeight: 700, color: "#fff", lineHeight: 1.05,
            margin: "0 0 20px", letterSpacing: "-2px"
          }}>
            Crafting Digital<br />
            <span style={{ background: "linear-gradient(135deg,#63D7FF,#7C4DFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Experiences
            </span>
          </h1>
 
          <p style={{
            fontFamily: "'Space Grotesk',sans-serif", fontSize: 17,
            color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 480,
            margin: "0 0 36px"
          }}>
            Full-Stack Developer specializing in React frontends and Python backends interfaces that convert.
          </p>
 
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
              border: "none", borderRadius: 10, padding: "14px 30px",
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 16,
              fontWeight: 600, color: "#fff", cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 24px rgba(124,77,255,0.4)"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,77,255,0.55)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,77,255,0.4)"; }}
            >View My Work</button>
 
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 10, padding: "14px 30px",
              fontFamily: "'Space Grotesk',sans-serif", fontSize: 16,
              fontWeight: 600, color: "#fff", cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#63D7FF"; e.currentTarget.style.background = "rgba(99,215,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "transparent"; }}
            >Get In Touch</button>
          </div>
 
          <div style={{ display: "flex", gap: 40, marginTop: 52 }}>
            {[["10+", "Projects Done"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 32, fontWeight: 700, color: "#fff" }}>{n}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
 
        <div style={{ display: "flex", justifyContent: "center", animation: "fadeUp 1.1s ease both" }}>
          <div style={{
            position: "relative",
            background: "linear-gradient(145deg,rgba(99,215,255,0.08),rgba(124,77,255,0.08))",
            border: "1px solid rgba(99,215,255,0.2)",
            borderRadius: 24, padding: 32, textAlign: "center",
            width: "100%", maxWidth: 360,
            backdropFilter: "blur(12px)"
          }}>
            <div style={{
              width: 140, height: 140, borderRadius: "50%", margin: "0 auto 20px",
              background: "linear-gradient(135deg,#63D7FF,#7C4DFF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 64, fontWeight: 700, color: "#fff",
              fontFamily: "'Clash Display',sans-serif",
              boxShadow: "0 0 40px rgba(124,77,255,0.4)"
            }}>LN</div>
 
            <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>
              Laraib Naeem
            </h2>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "#63D7FF", margin: "0 0 24px", fontWeight: 500 }}>
              Full-Stack Developer 
            </p>
 
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {["React", "Python", "FastAPI", "TailwindCSS"].map(t => (
                <span key={t} style={{
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, fontWeight: 600,
                  padding: "5px 12px", borderRadius: 100,
                  background: "rgba(99,215,255,0.12)", color: "#63D7FF",
                  border: "1px solid rgba(99,215,255,0.25)"
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
 
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr!important;gap:2rem!important;padding-top:100px!important;padding-bottom:60px!important;}
        }
      `}</style>
    </section>
  );
}
 