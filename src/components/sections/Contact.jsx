import './Contact.css'
import { FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { contactLinks } from '@/data/contactLinks'

const ICONS = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="section-label">03 / GET IN TOUCH</p>
      <h2>Contact</h2>
      <p className="contact-intro">
        Based in Anand, Gujarat and open to hybrid, remote, or on-site roles.
        Email is the fastest way to reach me.
      </p>
      <div className="contact-cards">
        {contactLinks.map((link) => {
          const Icon = ICONS[link.id]
          return (
            <a
              key={link.id}
              href={link.href}
              className="contact-card"
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="contact-card-icon">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">{link.label}</span>
                <span className="contact-card-sublabel">{link.sublabel}</span>
              </div>
              <FiArrowRight size={16} className="contact-card-arrow" aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
