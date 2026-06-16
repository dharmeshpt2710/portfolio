import './Contact.css'
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
import { contactLinks } from '@/data/contactLinks'

const ICONS = {
  email: FiMail,
  phone: FiPhone,
  github: FiGithub,
  linkedin: FiLinkedin,
}

function Contact() {
  const [featured, ...secondary] = contactLinks
  const FeaturedIcon = ICONS[featured.id]

  return (
    <section id="contact" className="section contact">
      <p className="section-label">03 / GET IN TOUCH</p>
      <h2>Contact</h2>
      <p className="contact-intro">
        Based in Anand, Gujarat and open to hybrid, remote, or on-site roles.
        Email is the fastest way to reach me.
      </p>
      <div className="contact-cards">
        <a href={featured.href} className="contact-card contact-card-featured">
          <div className="contact-card-icon">
            <FeaturedIcon size={20} aria-hidden="true" />
          </div>
          <div className="contact-card-text">
            <span className="contact-card-label">{featured.label}</span>
            <span className="contact-card-sublabel">{featured.sublabel}</span>
          </div>
          <span className="contact-preferred-badge">Fastest response</span>
        </a>

        <div className="contact-cards-secondary">
          {secondary.map((link) => {
            const Icon = ICONS[link.id]
            return (
              <a
                key={link.id}
                href={link.href}
                className="contact-card"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="contact-card-icon">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <span className="contact-card-label">{link.label}</span>
                <span className="contact-card-sublabel">{link.sublabel}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
