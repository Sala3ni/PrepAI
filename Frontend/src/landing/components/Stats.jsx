import HlsVideo from './HlsVideo'
import BlurText from './BlurText'

const stats = [
  { value: '50K+', label: 'Interviews prepped' },
  { value: '98%', label: 'User satisfaction' },
  { value: '3.2x', label: 'More offers received' },
  { value: '< 1 min', label: 'To generate your plan' },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-32">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        desaturate
      />
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: '200px', background: 'linear-gradient(to bottom, black, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: '200px', background: 'linear-gradient(to top, black, transparent)' }} />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-20 px-6 lg:px-16 max-w-5xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="text-center mb-12">
            <BlurText
              text="Numbers that speak for themselves."
              className="text-3xl md:text-4xl font-heading italic text-white leading-tight block"
              delay={100}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">{value}</span>
                <span className="text-white/60 font-body font-light text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
