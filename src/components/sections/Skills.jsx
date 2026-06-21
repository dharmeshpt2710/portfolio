import './Skills.css'
import { skillGroups } from '@/data/skills'

function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <p className="section-eyebrow" aria-hidden="true">&gt; SKILLS</p>
      <h2 id="skills-heading">What I work with</h2>
      <div className="skills-grid">
        {skillGroups.map(({ title, skills }) => (
          <div className="skill-card" key={title}>
            <h3 className="skill-group-title">{title}</h3>
            <div className="skill-tags">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
