import { useState } from 'react'
import './Navbar.css'
import { navLinks } from '@/data/navLinks'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>DP</a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>

        <nav className={`navbar-links${isOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
