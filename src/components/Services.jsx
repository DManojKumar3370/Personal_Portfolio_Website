import { PanelsTopLeft, ListFilter, Database, Sheet, ArrowUpRight, MessagesSquare, Focus, ChartNoAxesCombined, ClipboardCheck } from 'lucide-react';

const services = [
  { title: 'Power BI Dashboard Development', icon: PanelsTopLeft, description: 'Interactive dashboards from Excel, CSV, and structured datasets, with KPIs, charts, filters, Power Query transformations, and DAX calculations.' },
  { title: 'Data Cleaning & Analysis', icon: ListFilter, description: 'Clean, organize, transform, and analyze datasets using Python, Pandas, Excel, and analytical techniques.' },
  { title: 'SQL Data Analysis', icon: Database, description: 'SQL queries for filtering, aggregation, joins, analysis, and extracting useful information from structured databases.' },
  { title: 'Excel Data Analysis', icon: Sheet, description: 'Excel data cleaning, analysis, reporting, charts, summaries, and business-focused data organization.' },
];
const principles = [[MessagesSquare, 'Clear Communication'], [Focus, 'Data-Focused Solutions'], [ChartNoAxesCombined, 'Clean Visualizations'], [ClipboardCheck, 'Attention to Requirements']];

export default function Services() {
  return <section className="section container services-section" id="services" aria-labelledby="services-title"><div className="section-heading"><div><p className="eyebrow">HOW I CAN HELP</p><h2 id="services-title">Services I Offer<span className="accent">.</span></h2></div><p>Practical data support for your next dashboard, report, or analysis.</p></div>
    <div className="services-grid">{services.map(({ title, icon: Icon, description }, index) => <article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon size={24}/></span><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
    <div className="service-cta"><p>Have a data project? <strong>Let's work together.</strong></p><a className="button button-secondary" href="#contact">Contact Me <ArrowUpRight size={18}/></a></div>
    <div className="principles"><h3>Why work with me</h3><div>{principles.map(([Icon, label]) => <p key={label}><Icon size={19}/>{label}</p>)}</div></div>
  </section>;
}
