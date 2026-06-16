import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Available for work
          </div>

          <p className="hero-eyebrow">Hello, I am</p>
          <h1 className="hero-name">Dharmesh Patel</h1>
          <p className="hero-tagline">
            Full Stack Developer <span className="hero-amp">&amp;</span> QA Automation Engineer
          </p>
          <p className="hero-intro">
            I build software, and I make sure it holds up. Based in Anand, Gujarat. Available immediately for remote, hybrid, or on-site roles.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get in touch <FiArrowRight size={15} aria-hidden="true" />
            </a>
            <div className="hero-social-links">
              <a
                href="https://github.com/dharmeshpt2710"
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FiGithub size={18} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/dharmeshpt87"
                className="hero-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-dashed" aria-hidden="true" />
            <div className="hero-avatar">
              <span className="hero-avatar-initials">DP</span>
            </div>
            <span className="hero-sparkle hero-sparkle-1" aria-hidden="true">✦</span>
            <span className="hero-sparkle hero-sparkle-2" aria-hidden="true">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
