import './Contact.css'
import { FiMail, FiGithub, FiLinkedin, FiPhone, FiArrowRight } from 'react-icons/fi'
import { contactLinks } from '@/data/contactLinks'

const ICONS = {
  email: FiMail,
  phone: FiPhone,
  github: FiGithub,
  linkedin: FiLinkedin,
}

function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <p className="section-eyebrow" aria-hidden="true">&gt; CONTACT</p>
      <h2 id="contact-heading">Get in touch</h2>

      <div className="contact-cta">
        <span className="contact-status">
          <span className="status-dot" aria-hidden="true" />
          Available immediately
        </span>
        <p className="contact-intro">
          Open to hybrid, remote, or on-site roles.
          Email is the fastest way to reach me.
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((link) => {
          const Icon = ICONS[link.id]
          return (
            <a
              key={link.id}
              href={link.href}
              className="contact-card"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${link.label} (opens in new tab)` } : {})}
            >
              <div className="contact-card-icon">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">{link.label}</span>
                <span className="contact-card-sublabel">{link.sublabel}</span>
              </div>
            </a>
          )
        })}
      </div>

      <div className="contact-action">
        <a href="mailto:dharmeshpt87@gmail.com" className="btn-primary">
          Get in touch <FiArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Contact
