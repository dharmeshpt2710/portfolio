import './Stats.css'

const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '3', label: 'Years in Canada' },
  { value: '2', label: 'Roles in one' },
  { value: '100%', label: 'Ownership mindset' },
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
