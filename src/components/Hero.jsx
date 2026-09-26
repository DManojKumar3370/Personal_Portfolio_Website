import { ArrowRight, ArrowUpRight, Database, SlidersHorizontal, ChartNoAxesCombined } from 'lucide-react';

export default function Hero() {
  return <section className="hero container" id="home" aria-labelledby="hero-title">
    <div className="hero-main">
      <div className="hero-copy"><p className="eyebrow">DATA ANALYTICS & BUSINESS INTELLIGENCE</p><p className="hello">Hello, I'm</p>
        <h1 id="hero-title">Manoj Kumar<span>.</span></h1>
        <p className="hero-title">Data Analyst <span>| Power BI | SQL | Python | Excel</span></p>
        <p className="hero-description">I transform raw data into clear dashboards, visualizations, and actionable insights using Power BI, Python, SQL, Excel, and Tableau.</p>
        <div className="button-row"><a className="button" href="#projects">View Projects <ArrowRight size={18}/></a><a className="button button-secondary" href="#contact">Hire Me <ArrowUpRight size={18}/></a></div>
        <p className="availability"><span aria-hidden="true"/>Available for freelance data analytics projects</p>
      </div>
      <aside className="hero-note" aria-label="My approach to data"><div className="note-top"><span>FROM DATA TO DECISIONS</span><span className="note-index">01 — 03</span></div><h2>A clearer view <br/>of your data.</h2>
        <div className="approach-row"><span className="approach-icon"><Database size={21}/></span><div><strong>Organize the data</strong><p>Clean, structure, and prepare.</p></div><span className="step">01</span></div>
        <div className="approach-row"><span className="approach-icon"><SlidersHorizontal size={21}/></span><div><strong>Explore the details</strong><p>Find patterns and relationships.</p></div><span className="step">02</span></div>
        <div className="approach-row"><span className="approach-icon"><ChartNoAxesCombined size={21}/></span><div><strong>Make insights clear</strong><p>Build useful, readable dashboards.</p></div><span className="step">03</span></div>
        <div className="note-bottom">A practical approach. A clear outcome.</div>
      </aside>
    </div>
    <div className="tool-strip"><span className="tool-strip-label">MY ANALYTICS TOOLKIT</span><div>{['Power BI', 'SQL', 'Python', 'Excel', 'Tableau'].map((tool, i) => <span key={tool}><span className="tool-symbol" aria-hidden="true">{['▥', '⛁', '{ }', '▦', '✣'][i]}</span>{tool}</span>)}</div></div>
  </section>;
}
