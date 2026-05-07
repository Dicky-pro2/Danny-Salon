// Booking.jsx
import { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    barber: '',
    date: '',
    time: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    alert('Booking request sent! We\'ll confirm within 2 hours.')
  }

  const services = ['Executive Cut', 'Skin Fade', 'Beard Sculpt', 'Full Package', 'Kid\'s Cut']
  const barbers = ['King David', 'Jay Cuts', 'O.G. Tunde', 'Any Available']
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM']

  return (
    <main className="page-enter">
      <section style={{
        paddingTop: '140px', paddingBottom: '5rem',
        paddingLeft: '2rem', paddingRight: '2rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Secure Your Seat</div>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900, textTransform: 'uppercase',
            lineHeight: 0.9, letterSpacing: '-0.02em',
          }}>
            Book Your <span className="gold-text">Appointment</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '500px' }}>
            Walk-ins welcome, but priority goes to booked appointments.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} style={{
          background: 'rgba(15,15,15,0.6)',
          border: '1px solid var(--border)',
          padding: '2.5rem',
          borderRadius: '4px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name *</label>
              <input type="text" name="name" required onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email *</label>
              <input type="email" name="email" required onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone *</label>
              <input type="tel" name="phone" required onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Service *</label>
              <select name="service" required onChange={handleChange} style={inputStyle}>
                <option value="">Select service</option>
                {services.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Preferred Barber</label>
              <select name="barber" onChange={handleChange} style={inputStyle}>
                {barbers.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Date *</label>
              <input type="date" name="date" required onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Time *</label>
              <select name="time" required onChange={handleChange} style={inputStyle}>
                <option value="">Select time</option>
                {timeSlots.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Special Requests (Optional)</label>
              <textarea name="notes" rows={3} onChange={handleChange} style={inputStyle} placeholder="e.g., preferred style, allergies, etc." />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem' }}>
            CONFIRM BOOKING
          </button>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            We'll send a confirmation within 2 hours. Walk-ins welcome but appointments take priority.
          </p>
        </form>

        {/* Quick info */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            📞 Prefer to call? <span className="gold-text">+234 812 345 6789</span>
          </p>
        </div>
      </section>
    </main>
  )
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  background: 'rgba(0,0,0,0.4)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  fontSize: '0.9rem',
  transition: 'border-color 0.2s',
}