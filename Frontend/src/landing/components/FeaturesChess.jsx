import { ArrowUpRight } from 'lucide-react'
import BlurText from './BlurText'

const rows = [
  {
    title: 'Designed to land interviews. Built to perform.',
    body: 'Every question is intentional. Our AI studies thousands of real interview patterns — then builds your prep to outperform the competition.',
    cta: 'Learn more',
    gif: 'https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif',
    reverse: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    body: 'Your prep evolves with you. AI tracks your weak spots and adapts in real time. No manual updates. No guesswork. Ever.',
    cta: 'See how it works',
    gif: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
    reverse: true,
  },
]

export default function FeaturesChess() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-black">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-white text-xs font-medium font-body">Capabilities</span>
        </div>
        <BlurText
          text="Pro features. Zero complexity."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] block"
          delay={100}
        />
      </div>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col ${row.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5">
              <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-tight">{row.title}</h3>
              <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">{row.body}</p>
              <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body font-medium text-sm flex items-center gap-2 w-fit hover:bg-white/10 transition-colors">
                {row.cta} <ArrowUpRight size={15} />
              </button>
            </div>

            {/* GIF */}
            <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
              <img src={row.gif} alt={row.title} className="w-full h-auto object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
