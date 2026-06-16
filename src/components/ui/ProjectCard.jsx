import { useRef } from 'react'
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'

function ProjectCard({ title, description, tags, githubUrl, demoUrl, status, number }) {
  const descRef = useRef(null)
  const drag = useRef({ active: false, startY: 0, scrollTop: 0 })

  const onMouseDown = (e) => {
    const el = descRef.current
    drag.current = { active: true, startY: e.pageY - el.offsetTop, scrollTop: el.scrollTop }
    el.classList.add('dragging')
  }

  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    const y = e.pageY - descRef.current.offsetTop
    descRef.current.scrollTop = drag.current.scrollTop - (y - drag.current.startY)
  }

  const stopDrag = () => {
    drag.current.active = false
    descRef.current?.classList.remove('dragging')
  }

  return (
    <article className="project-card">
      <div className="project-card-top">
        <div className="project-icon-tile">
          <FiFolder size={18} aria-hidden="true" />
        </div>
        <span className="project-number">{number}</span>
      </div>

      <div className="project-card-body">
        <div className="project-card-title-row">
          <div className="project-title-group">
            <h3 className="project-title">{title}</h3>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-title-github"
                aria-label={`${title} GitHub repository`}
              >
                <FiGithub size={13} />
              </a>
            )}
          </div>
          {status && <span className="project-status">{status}</span>}
        </div>
        <div className="project-desc-outer">
          <div
            ref={descRef}
            className="project-desc-wrap"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            <p className="project-desc">{description}</p>
          </div>
          <div className="project-desc-fade" aria-hidden="true" />
        </div>
      </div>

      <div className="project-card-footer">
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="project-tag" key={tag}>{tag}</span>
          ))}
        </div>
        {demoUrl && (
          <div className="project-links">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <FiExternalLink size={13} /> Demo
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
