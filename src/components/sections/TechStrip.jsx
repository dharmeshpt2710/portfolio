import './TechStrip.css'

const techs = [
  'React', 'Angular', 'TypeScript', 'Node.js', 'Playwright',
  'MongoDB', 'SQL Server', 'Selenium', 'k6', 'CI/CD', 'Express', 'Postman',
]

function TechStrip() {
  const items = [...techs, ...techs]

  return (
    <div className="tech-strip" aria-hidden="true">
      <div className="tech-track">
        {items.map((tech, i) => (
          <span className="tech-item" key={i}>
            {tech}
            <span className="tech-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechStrip
