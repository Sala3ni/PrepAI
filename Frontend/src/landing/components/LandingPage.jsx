import { useState } from 'react'
import '../../landing.css'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowUpRight, Upload, Cpu, Map, CheckCircle } from 'lucide-react'
import LandingNavbar from './LandingNavbar.jsx'
import LandingHeroSection from './LandingHeroSection.jsx'

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Upload Your Resume',
    desc: 'Paste the job description and upload your resume (or write a quick self-description). Takes less than a minute.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI Analyzes Everything',
    desc: 'Our AI reads the job requirements, compares them with your profile, and identifies exactly where you stand.',
  },
  {
    icon: Map,
    number: '03',
    title: 'Get Your Custom Plan',
    desc: 'Receive tailored interview questions, skill gap analysis, and a day-by-day preparation roadmap — instantly.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Walk In Confident',
    desc: 'Know what to expect, how to answer, and what to improve. Show up prepared and land the offer.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function LandingPage() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="font-body text-white" style={{ background: '#0d1117', minHeight: '100vh' }}>
      <LandingNavbar authOpen={authOpen} setAuthOpen={setAuthOpen} />
      <LandingHeroSection onGetStarted={() => setAuthOpen(true)} />

      {/* How It Works */}
      <section style={{ padding: '80px 1.5rem 100px', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.25)', borderRadius: '2rem', padding: '0.3rem 1rem', fontSize: '0.75rem', fontWeight: 600, color: '#ff2d78', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            How It Works
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-1px', lineHeight: 1.1 }}>
            From resume to ready —<br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>in four simple steps</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#161b22', border: '1px solid #2a3348', borderRadius: '1rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}
            >
              {/* step number watermark */}
              <span style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>{step.number}</span>

              <div style={{ width: 44, height: 44, borderRadius: '0.75rem', background: 'rgba(255,45,120,0.12)', border: '1px solid rgba(255,45,120,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff2d78' }}>
                <step.icon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontWeight: 300 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '0 1.5rem 100px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 900, margin: '0 auto', background: 'linear-gradient(135deg, #1a0a14 0%, #161b22 60%)', border: '1px solid rgba(255,45,120,0.2)', borderRadius: '1.5rem', padding: '4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 400, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,45,120,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', letterSpacing: '-1px', marginBottom: '1rem', position: 'relative' }}>
            Your next offer starts here.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', fontWeight: 300, position: 'relative' }}>
            No credit card. No commitment. Just results.
          </p>
          <Link to="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ff2d78', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '2rem', textDecoration: 'none', fontWeight: 700, fontSize: '1rem', position: 'relative' }}>
            Get Started Free <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#ff2d78', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 PrepAI. All rights reserved.</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy', 'Terms', 'Contact'].map(l => (
            <a key={l} href="#" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
