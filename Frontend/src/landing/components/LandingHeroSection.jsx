import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import Hls from 'hls.js'

const videoSrc = 'https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8'
const posterUrl =
  'https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080'

export default function LandingHeroSection({ onGetStarted }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoSrc)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log('Auto-play prevented:', e))
      })
      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc
      video.addEventListener('loadedmetadata', () => {
        video.play().catch((e) => console.log('Auto-play prevented:', e))
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
        muted
        loop
        playsInline
        poster={posterUrl}
        aria-hidden
      />

      <div className="absolute inset-0 z-1 bg-black/60 backdrop-blur-[2px]" />

      <div
        className="pointer-events-none absolute left-[20%] top-[-20%] z-2 size-[600px] mix-blend-screen rounded-full bg-blue-900/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[20%] z-2 size-[500px] mix-blend-screen rounded-full bg-indigo-900/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pt-32 text-center sm:px-6 sm:pt-36">
        <motion.p
          className="font-serif text-2xl leading-[1.15] text-white sm:text-5xl lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Prepare at the speed of thought
        </motion.p>

        <motion.h1
          className="mt-6 bg-linear-to-b from-white via-white to-[#b4c0ff] bg-clip-text font-body text-5xl font-semibold leading-[0.95] tracking-tighter text-transparent sm:text-8xl lg:text-[136px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get Interview Ready Faster
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl font-body text-base leading-[1.7] text-white/70 sm:text-[20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Get personalized interview questions, skill-gap analysis, and a day-by-day prep plan in seconds with PrepAI.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            type="button"
            onClick={onGetStarted}
            className="group flex items-center gap-2 rounded-full bg-white py-2 pl-6 pr-2 font-body text-lg font-medium text-[#0a0400] shadow-[0_0_20px_rgba(255,255,255,0)] transition hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span>Get Started</span>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#3054ff] transition group-hover:bg-[#2040e0]">
              <ArrowRight className="size-5 text-white" strokeWidth={2} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
