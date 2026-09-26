import { useState } from 'react';
import { ChartNoAxesCombined, Braces, MapPinned, Image } from 'lucide-react';

const icons = { 'business-sales': ChartNoAxesCombined, automobile: Braces, 'toy-manufacturing': MapPinned };
export default function ProjectPreview({ project, inDialog = false }) {
  const [failed, setFailed] = useState(false);
  const Icon = icons[project.id] || ChartNoAxesCombined;
  return <div className={`project-preview preview-${project.id}`}>
    {project.image && !failed ? <img src={`${import.meta.env.BASE_URL}assets/projects/${project.image}`} alt={`${project.title} project screenshot`} width={project.imageWidth} height={project.imageHeight} loading={inDialog ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} /> : <div className="preview-placeholder"><span className="preview-icon"><Icon size={35} strokeWidth={1.35}/></span><strong>{project.previewTitle || project.title}</strong><span className="preview-caption"><Image size={13}/>Screenshot coming soon</span></div>}
  </div>;
}
