import { ArrowUpRight } from 'lucide-react';
import { contactHref } from '../data/contacts.js';

export default function FiverrLink({ children = 'Discuss a project on Fiverr', className = 'text-link' }) {
  const href = contactHref('fiverr');
  if (!href) return null;
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17} aria-hidden="true"/></a>;
}
