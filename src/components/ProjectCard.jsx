import { ArrowUpRight, Users } from 'lucide-react';
import ProjectPreview from './ProjectPreview.jsx';

export default function ProjectCard({ project, onSelect }) {
  return <article className={`project-card ${project.featured ? 'featured-card' : ''}`}>
    <ProjectPreview project={project}/>
    <div className="project-content"><div className="project-meta"><span>{project.category}</span>{project.featured ? <span className="featured-label">FEATURED PROJECT</span> : <span className="project-number">{project.number}</span>}</div>
      <h3>{project.title}</h3><p>{project.description}</p>
      {project.role && <p className="team-label"><Users size={14}/>Role: {project.role}</p>}
      <div className="tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
      <button className="project-action" onClick={() => onSelect(project)} aria-label={`Project Details: ${project.title}`}>Project Details <ArrowUpRight size={18}/></button>
    </div>
  </article>;
}
