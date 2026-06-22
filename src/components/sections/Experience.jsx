import { useEffect, useRef } from 'react'
import './Experience.css'

const K = ({ children }) => <span className="kw">{children}</span>

const experience = [
  {
    title: 'QA Developer I',
    company: 'Innosoft Canada Inc.',
    location: 'Kitchener, ON, Canada',
    period: 'Jul 2023 to Apr 2026',
    bullets: [
      <>Reached <K>100% functional test coverage</K> each release and surfaced <K>50+ defects</K> before production by building and maintaining <K>40+ automated Playwright and Selenium tests</K> across the GUI and API layers of Fusion (InnoSoft's ERP), running <K>functional, regression, and k6 performance testing</K>, and validating data integrity with <K>SQL / SQL Profiler</K>.</>,
      <>Cut new-test authoring time <K>~30%</K> (20 cases in 2 days vs. 3 to 5 manually) by building a <K>GenAI-powered Playwright codegen-to-POM pipeline</K> with <K>Claude AI</K>, while tracking defects in <K>JIRA / Zendesk</K> and mentoring a colleague on test automation practices.</>,
    ],
    tags: ['Playwright', 'Selenium', 'C#', 'k6', 'SQL', 'Azure DevOps'],
  },
  {
    title: 'Junior Full Stack Developer (Freelance)',
    company: 'InheritChain',
    location: 'ON, Canada',
    period: 'Jun 2023 to Dec 2023',
    bullets: [
      <>Delivered a production-ready <K>MEAN-stack</K> web application from scratch (<K>MongoDB</K>, <K>Express.js</K>, <K>Angular v12</K>, <K>Node.js</K>), implementing the <K>RESTful APIs</K> connecting frontend to backend and validating contracts end-to-end in <K>Postman</K>.</>,
      <>Shipped on time through shifting priorities by translating client requirements into <K>Agile</K> sprint tasks and adjusting scope as the product evolved.</>,
    ],
    tags: ['Angular', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Software Developer (Co-op)',
    company: 'Conestoga Applied Research and Innovation',
    location: 'Cambridge, ON, Canada',
    period: 'Sep 2022 to Dec 2022',
    bullets: [
      <>Drove a food-ordering system from design to working build by producing <K>UI/UX prototypes</K> in <K>Adobe XD</K> and developing the <K>Flutter/Node.js</K> frontend from those specs, while onboarding part-time members to shorten their ramp-up.</>,
    ],
    tags: ['Flutter', 'Node.js', 'Adobe XD'],
  },
  {
    company: 'Concept Learning Pvt. Ltd.',
    location: 'Gujarat, India',
    roles: [
      {
        title: 'Software Engineer',
        period: 'May 2021 to Apr 2022',
        bullets: [
          <>Modernized a legacy codebase and reduced long-term maintenance overhead by migrating the Admin website from <K>AngularJS</K> to <K>Angular 11</K>, centralizing state with <K>NGRX Store</K>, and adding <K>Jasmine/Karma</K> unit tests to catch bugs earlier in the cycle.</>,
        ],
      },
      {
        title: 'Software Engineer (Co-op)',
        period: 'Jan 2021 to Apr 2021',
        bullets: [
          <>Extended the B2B product to all screen sizes by migrating the website from <K>AngularJS</K> to <K>Angular 8</K> with mobile-responsive layouts, validating API contracts in <K>Postman</K>, and refactoring stylesheets to <K>SCSS</K> to cut duplication.</>,
        ],
      },
    ],
    tags: ['Angular', 'NGRX', 'SCSS', 'Jasmine/Karma', 'Postman'],
  },
  {
    title: 'Software Engineer (Co-op)',
    company: 'Anandorja LLP',
    location: 'Gujarat, India',
    period: 'May 2019 to May 2020',
    bullets: [
      <>Built and deployed a <K>Yojana web platform</K> from scratch using <K>Angular</K> and <K>Node.js/Express.js</K>, writing and testing <K>RESTful APIs</K> and managing <K>Git</K> version control across the full lifecycle alongside the technical lead and founders.</>,
    ],
    tags: ['Angular', 'Node.js', 'Express'],
  },
]

function RoleBullets({ bullets }) {
  return (
    <ul className="exp-bullets" role="list">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  )
}

function Tags({ tags }) {
  return (
    <div className="exp-tags">
      {tags.map((t) => (
        <span className="exp-tag" key={t}>{t}</span>
      ))}
    </div>
  )
}

function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const items = timelineRef.current?.querySelectorAll('.exp-item')
    if (!items?.length) return

    items[0].classList.add('exp-visible')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('exp-visible')
          } else if (entry.target !== items[0]) {
            entry.target.classList.remove('exp-visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    items.forEach((el, i) => { if (i > 0) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-heading">
      <p className="section-eyebrow" aria-hidden="true">&gt; EXPERIENCE</p>
      <h2 id="experience-heading">Work history</h2>

      <ol className="exp-timeline" ref={timelineRef} role="list">
        {experience.map((job, i) => (
          <li className="exp-item" key={i}>
            <div className="exp-dot" aria-hidden="true" />

            {job.roles ? (
              <>
                <div className="exp-header">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
                {job.roles.map((role, j) => (
                  <div className="exp-subrole" key={j}>
                    <div className="exp-header">
                      <h3 className="exp-title">{role.title}</h3>
                      <span className="exp-period">{role.period}</span>
                    </div>
                    <RoleBullets bullets={role.bullets} />
                  </div>
                ))}
                <Tags tags={job.tags} />
              </>
            ) : (
              <>
                <div className="exp-header">
                  <h3 className="exp-title">{job.title}</h3>
                  <span className="exp-period">{job.period}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
                <RoleBullets bullets={job.bullets} />
                <Tags tags={job.tags} />
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
