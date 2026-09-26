import { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return <section className="section projects-section" id="projects" aria-labelledby="projects-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2 id="projects-title">Featured Projects<span className="accent">.</span></h2></div><p>Selected data analytics and visualization projects demonstrating practical work with Power BI, Python, Tableau, and business data.</p></div>
    <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onSelect={setSelected}/>)}</div>
    {selected && <ProjectModal project={selected} onClose={() => setSelected(null)}/>}
  </div></section>;
}
