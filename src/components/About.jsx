import { GraduationCap, ArrowUpRight } from 'lucide-react';

export default function About() {
  return <section className="section about-section container" id="about" aria-labelledby="about-title">
    <div><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2 id="about-title">About Me<span className="accent">.</span></h2><p className="section-lead">Curiosity about data.<br/>A focus on understanding it.</p></div>
    <div className="about-copy"><p>I'm D. Manoj Kumar, a Computer Science and Engineering student specializing in Data Science, with an interest in analytics, business intelligence, and data-driven problem solving.</p><p>I use Power BI, Python, SQL, Excel, and Tableau to clean, analyze, and visualize data. My practical work spans sales, automobiles, customer analytics, and dashboard development.</p><p>I'm building experience through practical projects and freelance work while preparing for Data Analyst and Data Engineering roles.</p>
      <div className="education"><GraduationCap size={24}/><div><strong>B.Tech · Computer Science and Engineering</strong><span>Specialization in Data Science</span></div><span className="graduation">CLASS OF 2027</span></div>
      <a className="text-link" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
    </div>
  </section>;
}
