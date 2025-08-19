import { Link, NavLink, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-10 bg-ivory/80 backdrop-blur border-b border-viridian/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-viridian">🐰 Bunny&apos;s</span>
            <span className="text-2xl font-extrabold tracking-tight text-charcoal">Soaps &amp; Scrubs</span>
          </Link>
          <nav className="flex items-center gap-6">
            <NavLink to="/" end className={({isActive}) => `text-sm font-medium ${isActive ? 'text-viridian' : 'text-charcoal/70 hover:text-charcoal'}`}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => `text-sm font-medium ${isActive ? 'text-viridian' : 'text-charcoal/70 hover:text-charcoal'}`}>Shop</NavLink>
          </nav>
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
