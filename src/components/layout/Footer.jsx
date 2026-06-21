import './Footer.css'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {year} Dharmesh Patel.</p>
        <div className="footer-social">
          <a
            href="https://github.com/dharmeshpt2710"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub (opens in new tab)"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/dharmeshpt87"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn (opens in new tab)"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
