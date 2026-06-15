import './Skills.css'
import { skillCategories } from '@/data/skills'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span
                  className={`skill-tag${skill.includes('learning') ? ' skill-tag-growth' : ''}`}
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
