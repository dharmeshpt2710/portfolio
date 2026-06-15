import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React (learning)', 'Angular', 'NGRX', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    title: 'Backend and Databases',
    skills: ['Node.js', 'Express', '.NET (C#)', 'MongoDB', 'SQL Server', 'MySQL', 'Firebase'],
  },
  {
    title: 'Mobile Development',
    skills: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Android Studio', 'Xcode'],
  },
  {
    title: 'QA and Automation',
    skills: ['Playwright', 'Selenium', 'k6', 'NUnit', 'Jasmine/Karma', 'Postman', 'Swagger', 'WCAG Accessibility'],
  },
  {
    title: 'Tools and Platforms',
    skills: ['Git', 'GitHub', 'Bitbucket', 'Azure DevOps', 'Jira', 'Zendesk', 'SQL Profiler', 'CI/CD', 'Adobe XD'],
  },
  {
    title: 'AI-Assisted Development',
    skills: ['GitHub Copilot', 'MCP Servers', 'Claude AI'],
  },
  {
    title: 'Other Languages',
    skills: ['C#', 'Python', 'Java'],
  },
  {
    title: 'Other',
    skills: ['Agile/Scrum', 'Linux', 'macOS', 'Windows'],
  },
]

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
