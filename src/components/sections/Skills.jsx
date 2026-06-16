import { useRef } from 'react'
import './Skills.css'
import { FiCode, FiServer, FiCheckCircle } from 'react-icons/fi'
import { skillCards } from '@/data/skills'

const ICONS = {
  Frontend: FiCode,
  Backend: FiServer,
  'QA Automation': FiCheckCircle,
}

const DESCRIPTIONS = {
  Frontend: 'Polished, responsive UIs with React, Angular, TypeScript, and modern CSS.',
  Backend: 'APIs and services with Node.js, Express, MongoDB, and SQL Server.',
  'QA Automation':
    'End-to-end test suites with Playwright and Selenium, performance testing with k6, and AI-assisted development.',
}

function PillRow({ skills }) {
  const ref = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e) => {
    const el = ref.current
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
    el.classList.add('dragging')
  }

  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX)
  }

  const stopDrag = () => {
    drag.current.active = false
    ref.current?.classList.remove('dragging')
  }

  return (
    <div
      ref={ref}
      className="skill-pills"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      {skills.map(({ name, learning }) => (
        <span
          className={`skill-pill${learning ? ' skill-pill-learning' : ''}`}
          key={name}
        >
          {name}
        </span>
      ))}
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <p className="section-label">01 / WHAT I DO</p>
      <h2>My specialities</h2>
      <div className="skills-cards">
        {skillCards.map(({ title, skills }) => {
          const Icon = ICONS[title]
          return (
            <div className="skill-card" key={title}>
              <div className="skill-icon-tile">
                <Icon size={20} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p className="skill-desc">{DESCRIPTIONS[title]}</p>
              <PillRow skills={skills} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
