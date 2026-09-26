import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChartNoAxesColumnIncreasing, Menu, X } from 'lucide-react';

const links = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const toggle = useRef(null);
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section[id]')];
    const updateActive = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) {
        setActive('contact');
        return;
      }
      const current = sections.filter(section => section.getBoundingClientRect().top <= window.innerHeight * 0.3).at(-1);
      setActive(current?.id || 'home');
    };
    updateActive();
    const dismiss = event => {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    };
    const resize = () => { if (window.innerWidth > 900) setOpen(false); };
    document.addEventListener('keydown', dismiss);
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('scroll', updateActive); document.removeEventListener('keydown', dismiss); window.removeEventListener('resize', resize); };
  }, [open]);
  return <header className="site-header"><div className="container nav-shell">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark"><ChartNoAxesColumnIncreasing size={22} /></span>Manoj Kumar<span className="brand-dot">.</span></a>
    <button className="menu-toggle" ref={toggle} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {links.map(label => <a key={label} href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>Hire Me <ArrowUpRight size={16} /></a>
    </nav>
  </div></header>;
}
