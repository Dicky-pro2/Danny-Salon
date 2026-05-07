import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

interface NavLinkItem {
  label: string
  to: string
}

const navLinks: NavLinkItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(9,9,9,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="#C9A84C" strokeWidth="1.5"/>
                  <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="#C9A84C" strokeWidth="1.5"/>
                  <path d="M8.5 7.5L21 21" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8.5 16.5L21 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 12H21" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <div style={{
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 800, fontSize: '1.25rem',
                    letterSpacing: '0.08em', color: 'var(--text)',
                    lineHeight: 1, textTransform: 'uppercase',
                  }}>
                    Danny<span style={{ color: 'var(--gold)' }}>-</span>Salon
                  </div>
                  <div style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: '0.55rem', letterSpacing: '0.3em',
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                  }}>
                    Premium Barbershop
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    fontFamily: "'Big Shoulders Display', sans-serif",
                    fontWeight: 600, fontSize: '0.8rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase' as const,
                    textDecoration: 'none',
                    color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                    borderBottom: isActive ? '1px solid var(--gold)' : '1px solid transparent',
                    paddingBottom: '2px', transition: 'color 0.2s',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/book" className="gold-btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }}>
                Book Now
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="show-mobile"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'none' }}
              aria-label="Toggle menu"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {[
                  { w: '22px', tf: open ? 'translateY(6.5px) rotate(45deg)' : 'none', op: 1 },
                  { w: '14px', tf: 'none', op: open ? 0 : 1 },
                  { w: '22px', tf: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none', op: 1 },
                ].map((bar, i) => (
                  <span key={i} style={{
                    display: 'block', height: '1.5px', width: bar.w,
                    background: 'var(--gold)', opacity: bar.op,
                    transform: bar.tf, transition: 'all 0.3s ease',
                    transformOrigin: 'center',
                  }} />
                ))}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 99,
        background: 'rgba(9,9,9,0.98)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        transform: open ? 'translateY(0)' : 'translateY(-110%)',
        opacity: open ? 1 : 0,
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        padding: '2rem', pointerEvents: open ? 'all' : 'none',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontWeight: 700, fontSize: '2rem',
                letterSpacing: '0.05em', textTransform: 'uppercase' as const,
                textDecoration: 'none',
                color: isActive ? 'var(--gold)' : 'var(--text)',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="gold-line" style={{ margin: '0.5rem 0' }} />
          <Link to="/book" className="gold-btn" style={{ width: 'fit-content' }}>
            Book Appointment
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}