import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import ProjectPreview from './ProjectPreview.jsx';

export default function ProjectModal({ project, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, []);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={onClose} onClick={event => { if(event.target === event.currentTarget) onClose(); }}>
    <div className="dialog-inner"><div className="dialog-top"><span className="eyebrow">{project.category}</span><button className="icon-button" aria-label="Close project details" onClick={onClose} autoFocus><X size={22}/></button></div>
      <h2 id="project-dialog-title">{project.title}</h2>{project.role && <p className="team-label">Team project · Role: {project.role}</p>}
      <ProjectPreview project={project}/>
      <h3>Problem / Objective</h3><p>{project.objective}</p>
      <h3>Tools Used</h3><div className="tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
      <h3>What Was Analyzed</h3><p>{project.analyzed}</p>
      <h3>Key Features</h3><ul className="feature-list">{project.features.map(feature => <li key={feature}><Check size={16}/>{feature}</li>)}</ul>
      {project.gallery?.map(item => <figure className="project-figure" key={item.image}><img src={`${import.meta.env.BASE_URL}assets/projects/${item.image}`} alt={item.caption} loading="lazy"/><figcaption>{item.caption}</figcaption></figure>)}
      {project.image && <a className="text-link full-image-link" href={`${import.meta.env.BASE_URL}assets/projects/${project.image}`} target="_blank" rel="noopener noreferrer">Open full-size screenshot</a>}
      <button className="button button-secondary" onClick={onClose}>Back to projects</button>
    </div>
  </dialog>;
}
