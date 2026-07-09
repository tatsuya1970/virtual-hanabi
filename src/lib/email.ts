/** Decode contact email at runtime only (not embedded as plain text in HTML). */
export function decodeContactEmail(): string {
  const user = atob("dGFrZW11cmE=");
  const domain = atob("dGFrZW11cmEtdGVjaGxhYi5jb20=");
  return `${user}@${domain}`;
}
