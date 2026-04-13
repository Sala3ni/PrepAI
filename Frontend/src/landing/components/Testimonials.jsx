import BlurText from './BlurText'

const testimonials = [
  {
    quote: 'A complete prep plan in under a minute. The questions it generated were spot-on — I walked into my interview feeling genuinely ready.',
    name: 'Sarah Chen',
    role: 'Software Engineer, hired at Google',
  },
  {
    quote: 'Got 4 offers in 3 weeks. PrepAI identified exactly where I was weak and fixed it. That\'s not a coincidence.',
    name: 'Marcus Webb',
    role: 'Product Manager, hired at Meta',
  },
  {
    quote: 'They didn\'t just prep me for interviews. They helped me understand my own career story. World-class doesn\'t begin to cover it.',
    name: 'Elena Voss',
    role: 'Data Scientist, hired at Amazon',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-16 py-24 bg-black">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 mb-6">
          <span className="text-white text-xs font-medium font-body">What They Say</span>
        </div>
        <BlurText
          text="Don't take our word for it."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] block"
          delay={100}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map(({ quote, name, role }) => (
          <div key={name} className="liquid-glass rounded-2xl p-8 flex flex-col gap-5">
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">"{quote}"</p>
            <div>
              <p className="text-white font-body font-medium text-sm">{name}</p>
              <p className="text-white/50 font-body font-light text-xs mt-0.5">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
