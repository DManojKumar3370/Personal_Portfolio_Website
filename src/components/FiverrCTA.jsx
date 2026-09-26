import { useId } from 'react';
import FiverrLink from './FiverrLink.jsx';
import { contactHref } from '../data/contacts.js';

export default function FiverrCTA({ contact = false }) {
  const titleId = useId();
  if (!contactHref('fiverr')) return null;

  return <aside className={`fiverr-cta${contact ? ' fiverr-cta-contact' : ''}`} aria-labelledby={titleId}>
    <div>
      <h3 id={titleId}>{contact ? 'Freelance Projects' : 'Need help with your data?'}</h3>
      <p>I offer Power BI dashboards, data cleaning, SQL analysis, and Excel/Python data services through Fiverr.</p>
      {contact && <p className="fiverr-note">For Fiverr projects, keep project communication and orders on Fiverr.</p>}
    </div>
    <FiverrLink className="button">{contact ? 'Hire Me on Fiverr' : 'View My Fiverr Services'}</FiverrLink>
  </aside>;
}
