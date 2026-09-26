import { ChartNoAxesCombined, Search, CodeXml, Braces, Table2 } from 'lucide-react';

const categories = [
  { title: 'Business Intelligence', icon: ChartNoAxesCombined, skills: ['Power BI', 'Tableau', 'Power Query', 'DAX', 'Dashboard Design'] },
  { title: 'Data Analysis', icon: Search, skills: ['Data Analysis', 'Data Cleaning', 'Exploratory Data Analysis', 'Data Visualization', 'KPI Analysis', 'Statistical Analysis'] },
  { title: 'Programming', icon: CodeXml, skills: ['Python', 'SQL'] },
  { title: 'Python Libraries', icon: Braces, skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { title: 'Data Tools', icon: Table2, skills: ['Microsoft Excel', 'CSV Data Processing', 'Data Transformation'] },
];
export default function Skills() {
  return <section className="section skills-section" id="skills" aria-labelledby="skills-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">THE RIGHT TOOLS FOR THE QUESTION</p><h2 id="skills-title">Skills & Tools<span className="accent">.</span></h2></div><p>From preparing a dataset to presenting the story it tells.</p></div>
    <div className="skills-grid">{categories.map(({ title, icon: Icon, skills }) => <article className="skill-card" key={title}><Icon size={22}/><h3>{title}</h3><div className="tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
  </div></section>;
}
