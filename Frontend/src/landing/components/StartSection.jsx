import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import BlurText from './BlurText'
import HlsVideo from './HlsVideo'

export default function StartSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Fades */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }} />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center justify-center px-6 py-32" style={{ minHeight: '600px' }}>
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-white text-xs font-medium font-body">How It Works</span>
        </div>
        <BlurText
          text="You dream it. We prep it."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] block max-w-2xl"
          delay={120}
        />
        <p className="mt-5 text-white/60 font-body font-light text-sm md:text-base max-w-lg leading-relaxed">
          Share your resume and target role. Our AI handles the rest — questions, skill gaps, roadmap, strategy. All in seconds, not weeks.
        </p>
        <Link
          to="/register"
          className="mt-8 liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          Get Started <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  )
}
