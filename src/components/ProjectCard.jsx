function ProjectCard({ title, description, tags, githubUrl, demoUrl, status }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        {status && <span className="project-status">{status}</span>}
      </div>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span className="project-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {(githubUrl || demoUrl) && (
        <div className="project-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
