import './Stats.css'

const stats = [
  { value: '3+', label: 'Years across QA and dev' },
  { value: '40+', label: 'Playwright and Selenium tests' },
  { value: '50+', label: 'Defects caught before production' },
  { value: '~30%', label: 'Faster test authoring with GenAI' },
]

function Stats() {
  return (
    <section className="section stats" aria-label="Career highlights">
      <div className="stats-row">
        {stats.map((s) => (
          <div className="stat-tile" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
