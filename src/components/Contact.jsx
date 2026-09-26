import { Mail, Phone, ContactRound as Linkedin, CodeXml as Github, ArrowUpRight } from 'lucide-react';
import { CONTACTS, contactHref } from '../data/contacts.js';
import FiverrCTA from './FiverrCTA.jsx';

const groups = [
  { title: 'Professional Networking', channels: [
    { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { key: 'github', label: 'GitHub', icon: Github },
  ] },
  { title: 'Recruiter & General Enquiries', channels: [
    { key: 'email', label: 'Email', icon: Mail },
    { key: 'phone', label: 'Phone', icon: Phone },
  ] },
];

export default function Contact() {
  return <section className="section contact-section" id="contact" aria-labelledby="contact-title">
    <div className="container contact-layout">
      <div>
        <p className="eyebrow">LET'S TALK DATA</p>
        <h2 id="contact-title">Let's Work<br/>Together<span>.</span></h2>
        <p>Have a dataset, dashboard requirement, or analysis task? Tell me what you want to learn and the output you need. I'm also open to conversations about Data Analyst and Data Engineering opportunities.</p>
        <FiverrCTA contact/>
        <p className="availability"><span aria-hidden="true"/>Available for freelance data analytics and dashboard projects.</p>
      </div>
      <div className="contact-channels">{groups.map(({ title, channels }) => <div className="contact-group" key={title}>
        <h3>{title}</h3>
        {channels.map(({ key, label, icon: Icon }) => {
          const href = contactHref(key);
          if (!href) return null;
          const directContact = key === 'email' || key === 'phone';
          return <a key={key} href={href} className="contact-card" target={directContact ? undefined : '_blank'} rel={directContact ? undefined : 'noopener noreferrer'}>
            <span className="contact-icon"><Icon size={22} aria-hidden="true"/></span>
            <span className="contact-details"><strong>{label}</strong>{directContact && <span className="contact-value">{CONTACTS[key]}</span>}</span>
            {!directContact && <span className="contact-state">Visit profile</span>}
            <ArrowUpRight size={17} aria-hidden="true"/>
          </a>;
        })}
      </div>)}</div>
    </div>
  </section>;
}
