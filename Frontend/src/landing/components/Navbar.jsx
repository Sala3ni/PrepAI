import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

const links = ['Home', 'Features', 'How It Works', 'Pricing']

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#ff2d78' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>
        <span className="font-heading italic text-white text-xl">PrepAI</span>
      </div>

      {/* Center nav */}
      <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1 gap-1">
        {links.map(link => (
          <a key={link} href="#" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors rounded-full">
            {link}
          </a>
        ))}
        <Link
          to="/register"
          className="flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium hover:bg-white/90 transition-colors"
        >
          Get Started <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Mobile CTA */}
      <Link
        to="/register"
        className="md:hidden flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium"
      >
        Get Started <ArrowUpRight size={14} />
      </Link>
    </nav>
  )
}
