import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><main id="main-content"><Hero/><Projects/><About/><Skills/><Services/><Contact/></main><Footer/></>;
}
