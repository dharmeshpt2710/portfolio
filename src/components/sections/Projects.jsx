import './Projects.css'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <p className="section-eyebrow">&gt; PROJECTS</p>
      <h2>What I've built</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            {...project}
            number={String(i + 1).padStart(2, '0')}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
