import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-10 bg-ivory/80 backdrop-blur border-b border-viridian/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-viridian/20 bg-ivory/80 flex items-center justify-center">
              <img
                src="/logo-bunnys-soaps.png"
                alt="Bunny's Soaps & Scrubs logo"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="sr-only">Bunny&apos;s Soaps &amp; Scrubs</span>
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({isActive}) => `text-sm font-medium ${isActive ? 'text-viridian' : 'text-charcoal/70 hover:text-charcoal'}`}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-viridian' : 'text-charcoal/70 hover:text-charcoal'}`}>Shop</NavLink>
          </nav>
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal/80 hover:text-charcoal hover:bg-viridian/10 focus:outline-none focus:ring-2 focus:ring-viridian/40 transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              className={`block h-0.5 w-5 bg-current transform transition duration-300 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current my-1 transform transition duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transform transition duration-300 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
        {/* Mobile nav panel (animated) */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-viridian/20 bg-ivory/95 overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-1 pointer-events-none'}`}
          aria-hidden={!menuOpen}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({isActive}) => `px-2 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-viridian bg-viridian/10' : 'text-charcoal/80 hover:text-charcoal hover:bg-viridian/10'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className={({isActive}) => `px-2 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-viridian bg-viridian/10' : 'text-charcoal/80 hover:text-charcoal hover:bg-viridian/10'}`}
            >
              Shop
            </NavLink>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-viridian/20 bg-ivory/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-charcoal/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Bunny&apos;s Soaps &amp; Scrubs</p>
          <p className="text-charcoal/60">Handmade skincare that&apos;s gentle, joyful, and cruelty-free.</p>
        </div>
      </footer>
    </div>
  )
}
