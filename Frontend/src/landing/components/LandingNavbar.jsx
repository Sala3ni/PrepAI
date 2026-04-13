import { useRef, useEffect } from 'react'
import { Link } from 'react-router'

function SunburstIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="3" fill="white" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <rect
          key={deg}
          x="11"
          y="1"
          width="2"
          height="6"
          rx="1"
          fill="white"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  )
}

export default function LandingNavbar({ authOpen, setAuthOpen }) {
  const panelRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setAuthOpen(false)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setAuthOpen(false)
    }
    if (authOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [authOpen, setAuthOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-transparent px-6 py-4 font-body">
        <div className="flex items-center gap-2">
          <SunburstIcon />
          <span className="text-xl font-medium text-white sm:text-2xl">PrepAI</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/resources"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Resources
          </Link>
          <div className="relative" ref={panelRef}>
            <button
              type="button"
              onClick={() => setAuthOpen((o) => !o)}
              className="rounded-full bg-white px-7 py-3 text-base font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Get Started
            </button>
            {authOpen && (
              <div
                className="absolute right-0 top-[calc(100%+8px)] z-60 min-w-[200px] rounded-xl border border-white/10 bg-zinc-950/95 py-2 shadow-xl backdrop-blur-md"
                role="menu"
              >
                <Link
                  to="/login"
                  className="block px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  role="menuitem"
                  onClick={() => setAuthOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  role="menuitem"
                  onClick={() => setAuthOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

    </>
  )
}
