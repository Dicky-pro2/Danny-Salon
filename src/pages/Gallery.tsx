const images = [
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop', label: 'Fade & Taper', span: 2 },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&auto=format&fit=crop', label: 'Classic Cut', span: 1 },
  { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&auto=format&fit=crop', label: 'The Shop', span: 1 },
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop', label: 'Hot Towel Shave', span: 1 },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop', label: 'The Chair', span: 2 },
  { src: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=800&auto=format&fit=crop', label: 'Beard Sculpt', span: 1 },
  { src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&auto=format&fit=crop', label: 'Styling', span: 1 },
  { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop', label: 'Beard Grooming', span: 1 },
]

export default function Gallery() {
  return (
    <main className="page-enter">

      {/* ── PAGE HERO ── */}
      <section style={{
        paddingTop: '140px', paddingBottom: '5rem',
        paddingLeft: '2rem', paddingRight: '2rem',
        borderBottom: '1px solid var(--border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Our Work</div>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 900, textTransform: 'uppercase',
            lineHeight: 0.9, letterSpacing: '-0.02em',
          }}>
            The <span className="gold-text">Gallery</span>
          </h1>
          <p style={{
            color: 'var(--text-muted)', fontSize: '1rem',
            fontWeight: 300, marginTop: '1.5rem', maxWidth: '420px', lineHeight: 1.7,
          }}>
            Every cut tells a story. Here's a glimpse of what walks out of our chairs.
          </p>
          <div className="gold-line" style={{ maxWidth: '200px', marginTop: '2rem' }} />
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '280px',
          gap: '12px',
        }}>
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                gridColumn: `span ${img.span}`,
                position: 'relative', overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                const overlay = el.querySelector('.overlay') as HTMLElement
                const label = el.querySelector('.label') as HTMLElement
                const imgEl = el.querySelector('img') as HTMLElement
                if (overlay) overlay.style.opacity = '1'
                if (label) label.style.transform = 'translateY(0)'
                if (imgEl) imgEl.style.transform = 'scale(1.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                const overlay = el.querySelector('.overlay') as HTMLElement
                const label = el.querySelector('.label') as HTMLElement
                const imgEl = el.querySelector('img') as HTMLElement
                if (overlay) overlay.style.opacity = '0'
                if (label) label.style.transform = 'translateY(8px)'
                if (imgEl) imgEl.style.transform = 'scale(1)'
              }}
            >
              <img
                src={img.src}
                alt={img.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform 0.5s ease',
                }}
              />
              {/* Hover overlay */}
              <div className="overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(9,9,9,0.85) 0%, rgba(9,9,9,0.2) 60%, transparent 100%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', alignItems: 'flex-end', padding: '1.5rem',
              }}>
                <div className="label" style={{
                  transform: 'translateY(8px)',
                  transition: 'transform 0.3s ease',
                }}>
                  <div style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 700, fontSize: '1.1rem',
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    color: 'var(--text)',
                  }}>
                    {img.label}
                  </div>
                  <div style={{
                    width: '32px', height: '1.5px',
                    background: 'var(--gold)', marginTop: '6px',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSTAGRAM CTA ── */}
      <section style={{
        padding: '4rem 2rem 6rem',
        textAlign: 'center', borderTop: '1px solid var(--border)',
      }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Follow Our Work</div>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem',
        }}>
          See More on <span className="gold-text">Instagram</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          @bladeandco.ng
        </p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="outline-btn">
          Follow Us
        </a>
      </section>

    </main>
  )
}