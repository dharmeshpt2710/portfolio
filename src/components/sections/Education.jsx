import './Education.css'

const education = [
  {
    program: 'Mobile Solutions Development',
    credential: 'Post Graduate Certificate',
    institution: 'Conestoga College',
    location: 'Waterloo, ON, Canada',
    period: 'Jan 2022 to Apr 2023',
    gpa: '9.65',
  },
  {
    program: 'B.Tech, Information Technology',
    credential: 'Bachelor of Technology',
    institution: 'DEPSTAR, CHARUSAT University',
    location: 'Gujarat, India',
    period: 'Jul 2017 to May 2021',
    gpa: '8.05',
  },
]

function Education() {
  return (
    <section id="education" className="section education" aria-labelledby="education-heading">
      <p className="section-eyebrow" aria-hidden="true">&gt; EDUCATION</p>
      <h2 id="education-heading">Education</h2>
      <div className="edu-grid">
        {education.map((edu) => (
          <div className="edu-card" key={edu.program}>
            <div className="edu-top">
              <div className="edu-gpa-block">
                <span className="edu-gpa-value">{edu.gpa}</span>
                <span className="edu-gpa-label">CGPA</span>
              </div>
              <div className="edu-info">
                <h3 className="edu-program">{edu.program}</h3>
                <span className="edu-credential">{edu.credential}</span>
              </div>
            </div>
            <div className="edu-bottom">
              <span className="edu-institution">{edu.institution}</span>
              <div className="edu-meta">
                <span className="edu-location">{edu.location}</span>
                <span className="edu-divider" aria-hidden="true" />
                <span className="edu-period">{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
