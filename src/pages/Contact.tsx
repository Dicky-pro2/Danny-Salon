// Contact.jsx
import React, { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="page-enter">
      <section style={{
        paddingTop: '140px', paddingBottom: '5rem',
        paddingLeft: '2rem', paddingRight: '2rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Get In Touch</div>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900, textTransform: 'uppercase',
            lineHeight: 0.9, letterSpacing: '-0.02em',
          }}>
            Let's <span className="gold-text">Connect</span>
          </h1>
          <div className="gold-line" style={{ marginTop: '2rem' }} />
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
        }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Visit <span className="gold-text">Us</span></h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.5rem' }}>📍 Location</div>
              <p style={{ color: 'var(--text-muted)' }}>47 Admiralty Way, Lekki Phase 1<br />Lagos, Nigeria</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.5rem' }}>📞 Phone</div>
              <p style={{ color: 'var(--text-muted)' }}>+234 812 345 6789</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.5rem' }}>✉️ Email</div>
              <p style={{ color: 'var(--text-muted)' }}>hello@bladeandco.ng</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.5rem' }}>🕒 Hours</div>
              <p style={{ color: 'var(--text-muted)' }}>Mon – Sat: 9am – 8pm<br />Sunday: 12pm – 6pm</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              {['IG', 'X', 'FB', 'TT'].map(social => (
                <a key={social} href="#" style={{
                  width: '36px', height: '36px',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                   onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send a <span className="gold-text">Message</span></h2>
            
            {submitted ? (
              <div style={{
                padding: '2rem',
                border: '1px solid var(--gold)',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h3>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <input type="text" placeholder="Your Name *" required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <input type="email" placeholder="Email Address *" required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <input type="tel" placeholder="Phone Number" style={inputStyle} />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <select style={inputStyle}>
                    <option>General Inquiry</option>
                    <option>Booking Question</option>
                    <option>Partnership</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <textarea rows={5} placeholder="Your Message *" required style={inputStyle} />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div style={{
          marginTop: '4rem',
          height: '300px',
          background: 'rgba(20,20,20,0.8)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--text-muted)',
        }}>
          📍 Google Maps Embed — Lekki Phase 1, Lagos
        </div>
      </section>
    </main>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.9rem',
  background: 'rgba(0,0,0,0.4)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  fontSize: '0.9rem',
  transition: 'border-color 0.2s',
}