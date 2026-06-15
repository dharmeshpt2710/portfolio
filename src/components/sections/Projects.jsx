import './Projects.css'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
