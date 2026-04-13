import { motion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import { Link } from 'react-router'
import BlurText from './BlurText'

const partners = ['LinkedIn', 'Google', 'Amazon', 'Microsoft', 'Meta']

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: '1000px' }}>
      {/* Background video */}
      <video
        autoPlay loop muted playsInline
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
        poster="/images/hero_bg.jpeg"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none" style={{ height: '300px', background: 'linear-gradient(to bottom, transparent, black)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ paddingTop: '150px' }}>
        {/* Badge */}
        <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8">
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">New</span>
          <span className="text-white/80 text-sm font-body pr-2">Introducing AI-powered interview prep.</span>
        </div>

        {/* Heading */}
        <BlurText
          text="The Interview Prep Your Career Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-3px] block"
          delay={100}
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-lg"
        >
          Personalized questions. Skill gap analysis. A custom roadmap. Built by AI, refined for you. This is interview prep, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <Link
            to="/register"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Get Started <ArrowUpRight size={16} />
          </Link>
          <button className="flex items-center gap-2 text-white/70 font-body font-light text-sm hover:text-white transition-colors">
            <Play size={16} fill="currentColor" /> See How It Works
          </button>
        </motion.div>

        {/* Partners */}
        <div className="mt-16 flex flex-col items-center gap-5">
          <div className="liquid-glass rounded-full px-4 py-1.5">
            <span className="text-white/50 text-xs font-body">Trusted by candidates at</span>
          </div>
          <div className="flex items-center gap-10 md:gap-14 flex-wrap justify-center">
            {partners.map(p => (
              <span key={p} className="text-2xl md:text-3xl font-heading italic text-white/60">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
