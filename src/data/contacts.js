export const CONTACTS = {
  email: 'YOUR_EMAIL_HERE',
  linkedin: 'YOUR_LINKEDIN_URL',
  github: 'YOUR_GITHUB_URL',
  fiverr: 'YOUR_FIVERR_URL',
};

export function contactHref(key) {
  const value = CONTACTS[key]?.trim();
  if (!value || value.includes('YOUR_')) return null;
  if (key === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `mailto:${value}` : null;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; }
}
