import './CTA.css'
import { FiArrowRight } from 'react-icons/fi'

function CTA() {
  return (
    <section className="cta">
      <div className="cta-inner">
        <span className="cta-status">
          <span className="status-dot" aria-hidden="true" />
          Available immediately
        </span>
        <h2 className="cta-heading">Have a role or project in mind?</h2>
        <p className="cta-sub">
          Open to hybrid, remote, or on-site roles. Let's build something together.
        </p>
        <a href="mailto:dharmeshpt87@gmail.com" className="btn-primary">
          Get in touch <FiArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default CTA
