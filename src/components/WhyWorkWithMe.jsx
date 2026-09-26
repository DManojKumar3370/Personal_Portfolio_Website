import { MessagesSquare, ChartNoAxesCombined, Focus, ClipboardCheck } from 'lucide-react';

const principles = [
  { icon: MessagesSquare, title: 'Clear Communication', description: 'I make sure project requirements are understood before beginning the work.' },
  { icon: ChartNoAxesCombined, title: 'Clean Visualizations', description: 'I focus on dashboards that are easy to read and understand.' },
  { icon: Focus, title: 'Data-Focused Solutions', description: 'I work with the data to identify useful patterns, metrics, and insights.' },
  { icon: ClipboardCheck, title: 'Attention to Requirements', description: 'I build based on the requested KPIs, visualizations, and business objectives.' },
];

export default function WhyWorkWithMe() {
  return <section className="work-principles" aria-labelledby="principles-title">
    <h3 id="principles-title">Why Work With Me</h3>
    <div className="work-principles-grid">{principles.map(({ icon: Icon, title, description }) => <div key={title}>
      <Icon size={21} aria-hidden="true"/><h4>{title}</h4><p>{description}</p>
    </div>)}</div>
  </section>;
}
