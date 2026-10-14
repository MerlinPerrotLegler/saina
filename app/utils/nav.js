export const mainNav = [
  { label: "Histoire", href: "/" },
  { label: "Sur-mesure", href: "/quiz" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function isCurrentPath(path, href) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}
