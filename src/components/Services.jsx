import { PanelsTopLeft, ListFilter, Database, Sheet } from 'lucide-react';
import FiverrLink from './FiverrLink.jsx';
import HowIWork from './HowIWork.jsx';
import WhyWorkWithMe from './WhyWorkWithMe.jsx';

const services = [
  { title: 'Power BI Dashboard Development', icon: PanelsTopLeft, description: 'I can turn Excel, CSV, and structured datasets into interactive dashboards with KPIs, charts, filters, slicers, Power Query transformations, and DAX calculations.', delivery: 'Power BI file with agreed reporting views and notes on refreshing your data.' },
  { title: 'Data Cleaning & Analysis', icon: ListFilter, description: 'I can clean, organize, transform, and analyze datasets using Python, Pandas, Excel, and analytical techniques.', delivery: 'Cleaned dataset, analysis notebook, and a summary of findings and data limitations.' },
  { title: 'SQL Data Analysis', icon: Database, description: 'I can write SQL queries for filtering, joins, aggregations, reporting, data exploration, and structured data analysis.', delivery: 'Commented SQL queries and result summaries for your agreed questions and database format.' },
  { title: 'Excel Data Analysis', icon: Sheet, description: 'I can help with Excel data cleaning, analysis, summaries, charts, reporting, and business-focused data organization.', delivery: 'An Excel workbook with the agreed analysis, tables, charts, and usage notes.' },
];

export default function Services() {
  return <section className="section container services-section" id="services" aria-labelledby="services-title"><div className="section-heading"><div><p className="eyebrow">HOW I CAN HELP</p><h2 id="services-title">Services I Offer<span className="accent">.</span></h2></div><p>Choose the support your data needs. We'll agree on the scope, delivery date, and price before starting.</p></div>
    <div className="services-grid">{services.map(({ title, icon: Icon, description, delivery }, index) => <article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon size={24}/></span><span>0{index + 1}</span></div><h3>{title}</h3><p>{description}</p><div className="service-delivery"><strong>Typical deliverables</strong><p>{delivery}</p></div></article>)}</div>
    <div className="service-cta"><div><p>Have a data project? <strong>Let's work together.</strong></p><p className="service-brief">Include your file format, the question you want answered, your preferred output, and your deadline. Deliverables depend on the agreed scope.</p></div><div className="service-cta-actions"><FiverrLink className="button">Hire Me on Fiverr</FiverrLink></div></div>
    <WhyWorkWithMe/>
    <HowIWork/>
  </section>;
}
