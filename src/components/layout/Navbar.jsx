import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import './Navbar.css'
import { navLinks } from '@/data/navLinks'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const close = () => setIsOpen(false)

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -65% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

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
            <a
              key={link.href}
              href={link.href}
              className={`navbar-nav-link${activeId === link.href.slice(1) ? ' active' : ''}`}
              aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a href={`${import.meta.env.BASE_URL}Dharmesh_Resume.pdf`} className="navbar-resume" download aria-label="Download resume">
            <FiDownload size={14} aria-hidden="true" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
