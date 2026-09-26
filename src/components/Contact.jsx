import { Mail, ContactRound as Linkedin, CodeXml as Github, BriefcaseBusiness, ArrowUpRight } from 'lucide-react';
import { contactHref } from '../data/contacts.js';

const channels = [{ key: 'email', label: 'Email', icon: Mail }, { key: 'linkedin', label: 'LinkedIn', icon: Linkedin }, { key: 'github', label: 'GitHub', icon: Github }, { key: 'fiverr', label: 'Fiverr', icon: BriefcaseBusiness }];
export default function Contact() {
  return <section className="section contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-layout"><div><p className="eyebrow">LET'S TALK DATA</p><h2 id="contact-title">Let's Work<br/>Together<span>.</span></h2><p>Have a dataset, dashboard requirement, or data analysis task? Feel free to contact me and discuss your requirements.</p><p className="availability"><span aria-hidden="true"/>Available for freelance data analytics projects</p></div>
    <div className="contact-channels">{channels.map(({ key, label, icon: Icon }) => {
      const href = contactHref(key);
      const content = <><span className="contact-icon"><Icon size={22}/></span><strong>{label}</strong><span className="contact-state">{href ? (key === 'email' ? 'Send an email' : 'Visit profile') : 'Add link'}</span>{href && <ArrowUpRight size={17}/>}</>;
      return href ? <a key={key} href={href} className="contact-card" target={key === 'email' ? undefined : '_blank'} rel={key === 'email' ? undefined : 'noopener noreferrer'}>{content}</a> : <div key={key} className="contact-card is-placeholder" aria-disabled="true" aria-label={`${label}: link not added yet`}>{content}</div>;
    })}{channels.some(({ key }) => !contactHref(key)) && <p className="contact-notice">Missing contact links are marked “Add link”.</p>}</div>
  </div></section>;
}
