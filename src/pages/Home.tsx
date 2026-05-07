import { Link } from 'react-router-dom'

const stats = [
  { value: '8+', label: 'Years of Excellence' },
  { value: '12K+', label: 'Happy Clients' },
  { value: '6', label: 'Master Barbers' },
  { value: '4.9★', label: 'Average Rating' },
]

const services = [
  { title: 'Classic Haircut', desc: 'Clean cuts tailored to your face shape and style.', price: '₦3,500' },
  { title: 'Beard Sculpting', desc: 'Sharp lines, defined edges, perfectly shaped beard.', price: '₦2,500' },
  { title: 'Hot Towel Shave', desc: 'Traditional straight razor shave with hot towel treatment.', price: '₦4,000' },
]

export default function Home() {
  return (
    <main className="page-enter">

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '0 2rem',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1400&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.18)',
        }} />

        {/* Gold glow */}
        <div style={{
          position: 'absolute', top: '30%', right: '15%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>
              ✦ Victoria Island, Lagos
            </div>

            <h1 style={{
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              fontWeight: 900, textTransform: 'uppercase',
              letterSpacing: '-0.02em', lineHeight: 0.9,
              marginBottom: '2rem',
            }}>
              The Art<br />
              of the <span className="gold-text">Perfect</span><br />
              Cut
            </h1>

            <p style={{
              fontSize: '1.1rem', color: 'var(--text-muted)',
              lineHeight: 1.7, maxWidth: '480px',
              marginBottom: '2.5rem', fontWeight: 300,
            }}>
              Premium grooming for the modern gentleman. Where every visit is an experience, not just a haircut.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/book" className="gold-btn">Book Appointment</Link>
              <Link to="/services" className="outline-btn">View Services</Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(180deg, var(--gold), transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem', textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800, fontSize: '2.8rem',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, var(--gold-light), var(--gold))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&auto=format&fit=crop"
              alt="Barbershop interior"
              style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
            />
            {/* Gold frame accent */}
            <div style={{
              position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
              width: '60%', height: '60%',
              border: '1px solid var(--gold)',
              zIndex: -1,
            }} />
            {/* Badge */}
            <div style={{
              position: 'absolute', top: '1.5rem', left: '-1.5rem',
              background: 'var(--bg)', border: '1px solid var(--border)',
              padding: '1rem 1.25rem',
            }}>
              <div style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 800, fontSize: '2rem', color: 'var(--gold)', lineHeight: 1,
              }}>8+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Years of craft
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Our Story</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              More Than a<br />
              <span className="gold-text">Barbershop</span>
            </h2>
            <div className="gold-line" style={{ marginBottom: '1.5rem' }} />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 300 }}>
              Founded in Lagos with a single belief — that every man deserves to look and feel his absolute best. Blade & Co. is where craft meets culture.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300 }}>
              Our master barbers bring years of training and passion to every chair. From classic fades to precise beard sculpting, we deliver excellence — every single time.
            </p>
            <Link to="/about" className="outline-btn">Meet the Team</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section style={{ padding: '5rem 2rem 7rem', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>What We Offer</div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, textTransform: 'uppercase' }}>
                Signature<br /><span className="gold-text">Services</span>
              </h2>
            </div>
            <Link to="/services" className="outline-btn">All Services</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: 'var(--surface)', padding: '2.5rem',
                borderLeft: '3px solid transparent',
                transition: 'border-color 0.3s',
                cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderLeftColor = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.borderLeftColor = 'transparent')}
              >
                <div style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: '0.65rem', letterSpacing: '0.25em',
                  color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem',
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {s.desc}
                </p>
                <div style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)',
                }}>
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '7rem 2rem', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1400&auto=format&fit=crop')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.12)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Ready?</div>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Your Best Look<br />
            <span className="gold-text">Awaits You</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2.5rem', fontWeight: 300 }}>
            Walk in looking good. Walk out looking exceptional.
          </p>
          <Link to="/book" className="gold-btn" style={{ fontSize: '0.85rem', padding: '1rem 2.5rem' }}>
            Book Your Appointment
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}