import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-brand">DP</a>
        <nav className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
