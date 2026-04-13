import { useState } from 'react'
import '../../landing.css'
import { motion } from 'motion/react'
import { Upload, Cpu, Map, CheckCircle } from 'lucide-react'
import LandingNavbar from './LandingNavbar.jsx'

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

export default function ResourcesPage() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="font-body text-white" style={{ background: '#0d1117', minHeight: '100vh' }}>
      <LandingNavbar authOpen={authOpen} setAuthOpen={setAuthOpen} />

      {/* From resume to ready in four simple steps (kept unchanged) */}
      <div style={{ height: 100 }} aria-hidden />
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
    </div>
  )
}

