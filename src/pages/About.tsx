import SEO from "../components/SEO";

export default function About() {
  return (
    <main className="page-enter">
      <SEO
        title="About Us"
        description="Meet the team behind Danny Salon — master barbers with years of craft, passion and precision. Learn our story and what makes us Lagos' go-to barbershop."
        canonical="/about"
      />

      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            Our Story
          </div>
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            More Than <span className="gold-text">A Cut</span>
          </h1>
          <div
            className="gold-line"
            style={{ marginTop: "2rem", marginBottom: "3rem" }}
          />
        </div>
      </section>

      {/* Main content */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
              Built on <span className="gold-text">Precision</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Blade & Co. wasn't born in a boardroom — it was forged in the
              chair. What started as a single barber with a vision has grown
              into Lagos' most respected premium barber studio.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              We believe a great cut does more than change your look — it
              changes how you feel. That's why every service is treated like an
              experience, not a transaction.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              From the hot towel to the final spray of tonic, we don't cut
              corners. Just fades, lines, and confidence.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop"
              alt="Barber at work"
              style={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "1rem",
              }}
            />
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgba(20,20,20,0.6)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--gold)",
                  }}
                >
                  8+
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                >
                  Years Excellence
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgba(20,20,20,0.6)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--gold)",
                  }}
                >
                  5k+
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                >
                  Happy Clients
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgba(20,20,20,0.6)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--gold)",
                  }}
                >
                  3
                </div>
                <div
                  style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                >
                  Master Barbers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginTop: "6rem" }}>
          <div
            className="section-label"
            style={{ textAlign: "center", marginBottom: "1rem" }}
          >
            What We Stand For
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Our <span className="gold-text">Core Values</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Precision",
                desc: "Every line, every fade, every detail matters.",
              },
              {
                title: "Respect",
                desc: "We honor your time, your style, and your trust.",
              },
              {
                title: "Craftsmanship",
                desc: "We treat barbering as an art form.",
              },
              {
                title: "Community",
                desc: "More than clients — we build relationships.",
              },
            ].map((val) => (
              <div
                key={val.title}
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                  ✂️
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    marginBottom: "0.5rem",
                    color: "var(--gold)",
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
