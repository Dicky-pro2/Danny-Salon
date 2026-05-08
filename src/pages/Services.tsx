import { Link } from "react-router-dom";
import SEO from "../components/SEO";

interface Service {
  title: string;
  desc: string;
  price: string;
  duration: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
}

const serviceData: ServiceCategory[] = [
  {
    category: "Hair",
    services: [
      {
        title: "Classic Haircut",
        desc: "Precision cut tailored to your face shape, hair texture and personal style.",
        price: "₦3,500",
        duration: "45 min",
      },
      {
        title: "Fade & Taper",
        desc: "Low, mid or high fade blended to perfection with a clean taper finish.",
        price: "₦4,000",
        duration: "50 min",
      },
      {
        title: "Shape Up",
        desc: "Crisp edge-up along the hairline, temples and neckline.",
        price: "₦2,000",
        duration: "20 min",
      },
      {
        title: "Hair & Beard Combo",
        desc: "Full haircut combined with a beard sculpt — the complete look.",
        price: "₦5,500",
        duration: "75 min",
      },
    ],
  },
  {
    category: "Beard",
    services: [
      {
        title: "Beard Sculpting",
        desc: "Sharp lines, defined edges and a perfectly shaped beard to frame your face.",
        price: "₦2,500",
        duration: "30 min",
      },
      {
        title: "Hot Towel Shave",
        desc: "Traditional straight razor shave with hot towel prep and post-shave treatment.",
        price: "₦4,000",
        duration: "45 min",
      },
      {
        title: "Beard Trim",
        desc: "A clean, even trim to keep your beard neat and well-maintained.",
        price: "₦1,500",
        duration: "20 min",
      },
    ],
  },
  {
    category: "Premium",
    services: [
      {
        title: "The Royal Treatment",
        desc: "Full haircut, hot towel shave, scalp massage and a premium grooming finish.",
        price: "₦9,500",
        duration: "2 hrs",
      },
      {
        title: "Scalp Treatment",
        desc: "Deep cleanse and moisturising treatment for a healthy scalp.",
        price: "₦3,500",
        duration: "40 min",
      },
      {
        title: "Kids Cut",
        desc: "Patient, precise cuts for the young gentlemen. Ages 3–12.",
        price: "₦2,500",
        duration: "30 min",
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="page-enter">
      <SEO
        title="Services & Pricing"
        description="Explore Danny Salon's full menu — classic cuts, fades, beard sculpting, hot towel shaves and premium grooming packages. Prices start from ₦1,500."
        canonical="/services"
      />
      {/* ── PAGE HERO ── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}
        >
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            What We Offer
          </div>
          <h1
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            Our <span className="gold-text">Services</span>
            <br />& Pricing
          </h1>
          <div
            className="gold-line"
            style={{ maxWidth: "200px", marginTop: "2rem" }}
          />
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ── */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}
      >
        {serviceData.map((cat, ci) => (
          <div
            key={ci}
            style={{ marginBottom: ci < serviceData.length - 1 ? "5rem" : 0 }}
          >
            {/* Category heading */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                }}
              >
                0{ci + 1}
              </span>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {cat.category}
              </h2>
              <div
                style={{ flex: 1, height: "1px", background: "var(--border)" }}
              />
            </div>

            {/* Service cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1px",
                background: "var(--border)",
              }}
            >
              {cat.services.map((s, si) => (
                <div
                  key={si}
                  style={{
                    background: "var(--bg)",
                    padding: "2rem",
                    borderLeft: "3px solid transparent",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeftColor = "var(--gold)";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = "transparent";
                    e.currentTarget.style.background = "var(--bg)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                      }}
                    >
                      {s.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Big Shoulders Display', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        marginLeft: "1rem",
                        whiteSpace: "nowrap",
                        paddingTop: "4px",
                      }}
                    >
                      {s.duration}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      fontFamily: "'Big Shoulders Display', sans-serif",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--gold)",
                    }}
                  >
                    {s.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── NOTE ── */}
      <section style={{ padding: "0 2rem 4rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--gold)",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>✦</span>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.88rem",
              lineHeight: 1.6,
            }}
          >
            All services include a complimentary consultation. Prices may vary
            for specialty styles. Walk-ins welcome — appointments get priority.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="section-label" style={{ marginBottom: "1rem" }}>
          Ready to Book?
        </div>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Pick Your Service,
          <br />
          <span className="gold-text">Book Your Slot</span>
        </h2>
        <Link
          to="/book"
          className="gold-btn"
          style={{ padding: "1rem 2.5rem" }}
        >
          Book Appointment
        </Link>
      </section>
    </main>
  );
}
