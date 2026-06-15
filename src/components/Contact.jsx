import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Message too short (min 10 chars)";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    setApiError("");
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    setApiError("");

    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
        , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setApiError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setApiError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (hasError) => ({
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: `1px solid ${hasError ? "#FF6B6B" : "rgba(255,255,255,0.12)"}`,
    borderRadius: 10, padding: "14px 18px",
    fontFamily: "'Space Grotesk',sans-serif",
    fontSize: 15, color: "#fff", outline: "none",
    transition: "border-color 0.2s", boxSizing: "border-box",
  });

  const labelStyle = {
    fontFamily: "'Space Grotesk',sans-serif", fontSize: 12,
    color: "rgba(255,255,255,0.5)", fontWeight: 600,
    display: "block", marginBottom: 8, letterSpacing: "0.5px",
  };

  const errorMsg = (field) => errors[field] ? (
    <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, color: "#FF6B6B", margin: "6px 0 0" }}>
      ⚠ {errors[field]}
    </p>
  ) : null;

  const contactInfo = [
    { icon: "📧", label: "Email", value: "naeemlaraib767@gmail.com", href: "mailto:naeemlaraib767@gmail.com" },
    { icon: "📱", label: "WhatsApp", value: "+92 3434457800", href: "https://wa.me/923434457800" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/laraib-naeem", href: "https://www.linkedin.com/in/laraib-naeem-513767353" },
    { icon: "🐙", label: "GitHub", value: "github.com/laraibnaeem77", href: "https://github.com/laraibnaeem77" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 2rem", background: "#07071A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 600, color: "#63D7FF", letterSpacing: "2px", textTransform: "uppercase" }}>
            Let's Work Together
          </span>
          <h2 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#fff", margin: "12px 0 0", letterSpacing: "-1px" }}>
            Start a Conversation
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
          <div>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, margin: "0 0 40px" }}>
              Have a project in mind? Looking for a junior developer role? I'm open to entry-level positions, internships, and freelance contracts.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {contactInfo.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12, padding: "14px 18px", textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,215,255,0.35)"; e.currentTarget.style.background = "rgba(99,215,255,0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                >
                  <span style={{ fontSize: 22 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{label}</div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 500, marginTop: 2 }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,201,167,0.1)", border: "1px solid rgba(0,201,167,0.3)", borderRadius: 100, padding: "10px 20px" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00C9A7", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, color: "#00C9A7", fontWeight: 600 }}>
                Open to Entry-Level Opportunities
              </span>
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 26, color: "#fff", margin: "0 0 12px" }}>Message Sent!</h3>
                <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); setErrors({}); }} style={{
                  marginTop: 24, background: "transparent", border: "1px solid rgba(99,215,255,0.3)",
                  borderRadius: 8, padding: "10px 24px", fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: 14, color: "#63D7FF", cursor: "pointer",
                }}>Send Another Message</button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontFamily: "'Clash Display',sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", margin: "0 0 28px" }}>
                  Send a Message
                </h3>

                {apiError && (
                  <div style={{
                    background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.35)",
                    borderRadius: 10, padding: "12px 16px", marginBottom: 20,
                    fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, color: "#FF6B6B",
                  }}>
                    ❌ {apiError}
                  </div>
                )}

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                  <div>
                    <label style={labelStyle}>YOUR NAME *</label>
                    <input name="name" value={form.name} onChange={handleChange}
                      placeholder="Your name" style={inputStyle(errors.name)}
                    />
                    {errorMsg("name")}
                  </div>
                  <div>
                    <label style={labelStyle}>EMAIL ADDRESS *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com" style={inputStyle(errors.email)}
                    />
                    {errorMsg("email")}
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>SERVICE NEEDED</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    style={{ ...inputStyle(false), appearance: "none", cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#07071A" }}>Select a service...</option>
                    <option value="Frontend Development" style={{ background: "#07071A" }}>Frontend Development</option>
                    <option value="Backend Development" style={{ background: "#07071A" }}>Backend Development</option>
                    <option value="Full-Stack Project" style={{ background: "#07071A" }}>Full-Stack Project</option>
                    <option value="Internship Opportunity" style={{ background: "#07071A" }}>Internship Opportunity</option>
                    <option value="Other / Consultation" style={{ background: "#07071A" }}>Other / Consultation</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>YOUR MESSAGE *</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your opportunity or project..." rows={5}
                    style={{ ...inputStyle(errors.message), resize: "vertical", minHeight: 120 }}
                  />
                  {errorMsg("message")}
                </div>

                <button onClick={handleSubmit} disabled={loading} style={{
                  width: "100%",
                  background: loading ? "rgba(255,255,255,0.08)" : "linear-gradient(135deg,#63D7FF,#7C4DFF)",
                  border: "none", borderRadius: 10, padding: "15px",
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: 16, fontWeight: 700,
                  color: loading ? "rgba(255,255,255,0.4)" : "#fff",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s, transform 0.2s",
                }}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media(max-width:768px){
          .contact-grid { grid-template-columns:1fr!important; }
          .form-row { grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
}