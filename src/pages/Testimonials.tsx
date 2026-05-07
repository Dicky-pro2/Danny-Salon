// Testimonials.jsx
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael O.',
      handle: '@mike_oguns',
      text: "Best fade I've gotten in Lagos. The attention to detail is unreal. King David took his time and made sure every line was sharp. Never going anywhere else.",
      rating: 5,
      service: 'Skin Fade',
    },
    {
      name: 'Tolu A.',
      handle: '@tolu_writes',
      text: "The hot towel shave is an experience, not just a service. Walked in stressed, walked out feeling like a new man. 10/10 recommend.",
      rating: 5,
      service: 'Hot Towel Shave',
    },
    {
      name: 'Chidi N.',
      handle: '@chidi_ng',
      text: "Professional, clean, and skilled. The shop has a great vibe — not too loud, not too quiet. Jay Cuts gave me the best beard sculpt of my life.",
      rating: 5,
      service: 'Beard Sculpt',
    },
    {
      name: 'Simi K.',
      handle: '@simi_k',
      text: "Took my little brother for his first cut. They were patient, friendly, and made him feel comfortable. He's been asking to go back every week!",
      rating: 5,
      service: "Kid's Cut",
    },
    {
      name: 'Efe J.',
      handle: '@efe_james',
      text: "Finally found my permanent barber. O.G. Tunde is a magician with scissors. The consultation before the cut shows they actually care.",
      rating: 5,
      service: 'Executive Cut',
    },
    {
      name: 'Kunle A.',
      handle: '@kunle_ade',
      text: "From the music to the hospitality to the final result — everything is premium. Worth every naira.",
      rating: 5,
      service: 'Full Package',
    },
  ]

  return (
    <main className="page-enter">
      <section style={{
        paddingTop: '140px', paddingBottom: '5rem',
        paddingLeft: '2rem', paddingRight: '2rem',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Client Love</div>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 900, textTransform: 'uppercase',
          lineHeight: 0.9, letterSpacing: '-0.02em',
        }}>
          What Our <span className="gold-text">Clients Say</span>
        </h1>
        <div className="gold-line" style={{ margin: '2rem auto 0' }} />
      </section>

      <section style={{ padding: '5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {testimonials.map((t, idx) => (
            <div key={idx} style={{
              background: 'rgba(15,15,15,0.6)',
              border: '1px solid var(--border)',
              padding: '1.8rem',
              transition: 'transform 0.2s ease, border-color 0.2s',
            }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
               onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2a2a2a, #111)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--gold)',
                }}>
                  <span>👤</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{t.handle}</div>
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                <span style={{ fontSize: '0.7rem', marginLeft: '0.5rem', color: 'var(--gold)' }}>{t.service}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '5rem',
          padding: '3rem',
          border: '1px solid var(--border)',
          background: 'rgba(201,168,76,0.03)',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐ 4.9</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>RATED EXCELLENT</div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Based on 200+ Google Reviews</p>
          <button className="outline-btn">LEAVE A REVIEW</button>
        </div>
      </section>
    </main>
  )
}