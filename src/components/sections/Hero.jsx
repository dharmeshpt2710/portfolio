import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <p className="section-eyebrow" aria-hidden="true">&gt; INTRO</p>

        <div className="hero-profile">
          <div className="hero-monogram" aria-hidden="true">
            <span className="hero-monogram-text">DP</span>
          </div>

          <div className="hero-content">
            <h1 id="hero-heading" className="hero-name">Dharmesh Patel</h1>
            <p className="hero-tagline">
              QA / SDET Engineer <span className="hero-amp">&amp;</span> Software Developer
            </p>
            <p className="hero-location">Anand, Gujarat</p>
          </div>
        </div>

        <span className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Open to QA / SDET and Software Developer roles
        </span>

        <p className="hero-intro">
          I test and build enterprise web applications across the full SDLC.
          3+ years on a Canadian ERP product, owning the Playwright
          automation that kept releases stable while shipping features in .NET
          and Angular.
        </p>

        <div className="hero-actions">
          <a
            href={`${import.meta.env.BASE_URL}Dharmesh_Resume.pdf`}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFileText size={15} aria-hidden="true" />
            View resume
            <span className="sr-only">(opens in new tab)</span>
          </a>
          <div className="hero-social-links">
            <a
              href="https://linkedin.com/in/dharmeshpt87"
              className="hero-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <FiLinkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/dharmeshpt2710"
              className="hero-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              <FiGithub size={18} aria-hidden="true" />
            </a>
            <a
              href="mailto:dharmeshpt87@gmail.com"
              className="hero-social-link"
              aria-label="Send email"
            >
              <FiMail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
