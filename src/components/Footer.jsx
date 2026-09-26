import { contactHref } from '../data/contacts.js';

export default function Footer() {
  return <footer className="container footer"><p>© 2026 Manoj Kumar. Built for showcasing data analytics projects.</p><nav aria-label="Social links">{['LinkedIn', 'GitHub', 'Fiverr'].map(label => {
    const href = contactHref(label.toLowerCase());
    return href ? <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a> : <span key={label} aria-disabled="true" title="Link not added yet">{label}</span>;
  })}</nav></footer>;
}
