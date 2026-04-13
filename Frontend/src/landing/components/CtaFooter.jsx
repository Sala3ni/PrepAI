import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import HlsVideo from './HlsVideo'
import BlurText from './BlurText'

export default function CtaFooter() {
  return (
    <section className="relative overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }} />
      <div className="absolute inset-0 bg-black/60" />

      {/* CTA Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 py-40">
        <BlurText
          text="Your next interview starts here."
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] block max-w-3xl"
          delay={100}
        />
        <p className="mt-6 text-white/60 font-body font-light text-sm md:text-base max-w-md leading-relaxed">
          Generate your personalized prep plan in seconds. No commitment, no pressure. Just results.
        </p>
        <div className="mt-8 flex items-center gap-4 flex-wrap justify-center">
          <Link
            to="/register"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Start Free <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/login"
            className="bg-white text-black rounded-full px-6 py-3 font-body font-medium text-sm hover:bg-white/90 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Footer bar */}
        <div className="mt-32 pt-8 w-full max-w-6xl border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">© 2026 PrepAI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map(link => (
              <a key={link} href="#" className="text-white/40 text-xs font-body hover:text-white/70 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
