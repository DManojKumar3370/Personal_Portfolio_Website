import { GraduationCap, ArrowUpRight } from 'lucide-react';

export default function About() {
  return <section className="section about-section container" id="about" aria-labelledby="about-title">
    <div><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2 id="about-title">About Me<span className="accent">.</span></h2><p className="section-lead">Curiosity about data.<br/>A focus on understanding it.</p></div>
    <div className="about-copy"><p>I'm D. Manoj Kumar, a Computer Science and Engineering student specializing in Data Science, with an interest in data analytics, business intelligence, and data-driven problem solving.</p><p>I use Power BI, Python, SQL, Excel, and Tableau to clean, analyze, and visualize data. My portfolio includes business sales dashboards, automobile exploratory analysis, and toy manufacturing visualizations.</p><p>I'm building practical experience through projects and freelance data work while preparing for Data Analyst and Data Engineering roles. For freelance work, I start by understanding your data, questions, and expected output.</p>
      <div className="education"><GraduationCap size={24}/><div><strong>B.Tech · Computer Science and Engineering</strong><span>Specialization in Data Science</span></div><span className="graduation">CLASS OF 2027</span></div>
      <a className="text-link" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
    </div>
  </section>;
}
