// Shared by every contact link and Fiverr call to action.
export const LINKS = {
  email: 'manojdoddi3370@gmail.com',
  phone: '+91 9573747948',
  linkedin: 'https://www.linkedin.com/in/manoj-kumar-doddi-6624b4298/',
  github: 'https://github.com/DManojKumar3370',
  // Replace with Fiverr profile/Gig URL after publishing Gig.
  fiverr: 'https://www.fiverr.com/s/Emg4NYY',
  // No resume file is available yet; keep its download link hidden.
  resume: '',
};

// Preserve existing imports while keeping one source of truth.
export const CONTACTS = LINKS;

export function contactHref(key) {
  const value = CONTACTS[key]?.trim();
  if (!value || value === '#' || value.includes('YOUR_')) return null;
  if (key === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `mailto:${value}` : null;
  if (key === 'phone') {
    const number = value.replace(/[\s()-]/g, '');
    return /^\+[1-9]\d{7,14}$/.test(number) ? `tel:${number}` : null;
  }
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; }
}
