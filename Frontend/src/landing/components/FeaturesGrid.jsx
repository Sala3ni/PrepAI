import { Zap, Palette, BarChart3, Shield } from 'lucide-react'
import BlurText from './BlurText'

const cards = [
  { icon: Zap, title: 'Days, Not Months', body: 'Concept to launch at a pace that redefines fast. Because waiting isn\'t a strategy.' },
  { icon: Palette, title: 'Obsessively Crafted', body: 'Every detail considered. Every element refined. Prep so precise, it feels inevitable.' },
  { icon: BarChart3, title: 'Built to Convert', body: 'Questions informed by data. Decisions backed by performance. Results you can measure.' },
  { icon: Shield, title: 'Secure by Default', body: 'Your data is protected end-to-end. Privacy-first, enterprise-grade. All included.' },
]

export default function FeaturesGrid() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-black">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-white text-xs font-medium font-body">Why Us</span>
        </div>
        <BlurText
          text="The difference is everything."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] block"
          delay={100}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map(({ icon: Icon, title, body }) => (
          <div key={title} className="liquid-glass rounded-2xl p-6 flex flex-col gap-4">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center" style={{ color: '#ff2d78' }}>
              <Icon size={18} />
            </div>
            <h4 className="text-white font-body font-semibold text-base">{title}</h4>
            <p className="text-white/60 font-body font-light text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
