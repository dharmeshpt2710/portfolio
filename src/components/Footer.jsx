import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Dharmesh Patel. Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer
