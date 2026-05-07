import { Link } from 'react-router-dom'

interface FooterLink {
  label: string
  to: string
}

interface OpeningHour {
  day: string
  time: string
}

const quickLinks: FooterLink[] = [
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

const hours: OpeningHour[] = [
  { day: 'Mon – Fri', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
]

const socials = ['IG', 'TW', 'FB']

export default function Footer(){
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 800, fontSize: '2rem',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Danny<span style={{ color: 'var(--gold)' }}>-</span>Salon
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '230px' }}>
              Where precision meets style. Premium grooming for the distinguished gentleman.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {socials.map(s => (
                <a key={s} href="#" style={{
                  width: '36px', height: '36px',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: '0.65rem', fontWeight: 700,
                  color: 'var(--text-muted)', textDecoration: 'none',
                  letterSpacing: '0.05em', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {quickLinks.map(link => (
                <Link key={link.to} to={link.to} style={{
                  color: 'var(--text-muted)', textDecoration: 'none',
                  fontSize: '0.9rem', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Opening Hours</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {hours.map(h => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>{h.day}</span>
                  <span style={{ color: 'var(--text)' }}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>Find Us</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span>12 Broad Street, Victoria Island, Lagos</span>
              <a href="tel:+2348012345678" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                +234 801 234 5678
              </a>
              <a href="mailto:hello@dannysalon.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                hello@dannysalon.com
              </a>
            </div>
            <Link to="/book" className="gold-btn" style={{ marginTop: '1.5rem', padding: '0.65rem 1.5rem', fontSize: '0.72rem' }}>
              Book Appointment
            </Link>
          </div>

        </div>
      </div>

      <div className="gold-line" />
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Danny Salon. All rights reserved.
        </p>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Premium Barbershop · Lagos, Nigeria
        </p>
      </div>
    </footer>
  )
}