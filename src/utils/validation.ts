export function isValidEmail(value: string): boolean {
  const email = (value || '').trim().toLowerCase();
  if (!email || email.length > 254) return false;
  if (/\s/.test(email)) return false;
  if (email.indexOf('@') < 0 || email.indexOf('@') !== email.lastIndexOf('@')) return false;
  const parts = email.split('@');
  const local = parts[0];
  const domain = parts[1];
  if (!local || local.length > 64 || !domain) return false;
  if (!/^[a-z0-9._%+-]+$/.test(local)) return false;
  if (local.startsWith('.') || local.endsWith('.') || local.indexOf('..') >= 0) return false;
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)*$/.test(domain)) return false;
  if (domain.startsWith('-') || domain.endsWith('-')) return false;
  const labels = domain.split('.');
  if (labels.length < 2) return false;
  if (labels[labels.length - 1].length < 2) return false;
  return true;
}