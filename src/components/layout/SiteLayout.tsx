import { useState } from 'react'
import {
  ArrowUpRight,
  Heart,
  Leaf,
  Menu,
  X,
} from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Explore', to: '/explore' },
  { label: 'Give an Item', to: '/login', highlight: true },
  { label: 'Community', to: '/#community' },
  { label: 'About', to: '/about' },
]

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="demo-notice">
        <strong>DEMO PREVIEW</strong>
        <span> &nbsp;Sample listings only — actions are not connected to real users.</span>
      </div>
      <header className="site-header">
        <div className="header-inner page-shell">
          <Link className="brand" to="/" aria-label="ReUseMap home" onClick={closeMenu}>
            <span className="brand-mark"><Leaf size={20} strokeWidth={2.2} /></span>
            <span className="brand-word">ReUse<span>Map</span></span>
          </Link>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav aria-label="Main navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`}>
            {navigation.map((item) => (
              item.to === '/#community' ? (
                <a
                  className={location.pathname === '/' && location.hash === '#community' ? 'nav-link active' : 'nav-link'}
                  href="/#community"
                  key={item.label}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    `${item.highlight ? 'nav-give' : 'nav-link'}${isActive && !item.highlight ? ' active' : ''}`
                  }
                  key={item.label}
                  onClick={closeMenu}
                  to={item.to}
                >
                  {item.highlight ? <>Give an Item <ArrowUpRight size={15} /></> : item.label}
                </NavLink>
              )
            ))}
            <div className="nav-account">
              <NavLink className="nav-login" onClick={closeMenu} to="/login">Log in</NavLink>
              <Link className="button button-primary nav-start" onClick={closeMenu} to="/register">Get Started</Link>
            </div>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="page-shell footer-main">
          <div className="footer-brand-block">
            <Link className="brand brand-footer" to="/">
              <span className="brand-mark"><Leaf size={19} strokeWidth={2.2} /></span>
              <span className="brand-word">ReUse<span>Map</span></span>
            </Link>
            <p>A little more sharing. A little less waste.<br />A better kind of everyday.</p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Discover</h3>
              <Link to="/explore">Explore items</Link>
              <a href="/#community">Our community</a>
            </div>
            <div>
              <h3>ReUseMap</h3>
              <Link to="/about">About us</Link>
              <Link to="/register">Join the community</Link>
            </div>
          </div>
          <div className="footer-note">
            <Heart size={16} fill="currentColor" />
            <span>Made for a more thoughtful world.</span>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <span>© 2026 ReUseMap. Demo preview.</span>
          <span>Give Things a Second Life.</span>
        </div>
      </footer>
    </>
  )
}
