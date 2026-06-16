import { useState } from 'react'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'
import { navLinks } from '@/data/navLinks'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-brand" onClick={close}>
          <span className="navbar-badge">DP</span>
          <span className="navbar-name">Dharmesh</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <nav className={`navbar-links${isOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-nav-link" onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" className="navbar-resume" download aria-label="Download resume">
            <FiDownload size={14} aria-hidden="true" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
