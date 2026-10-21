export const mainNav = [
  { label: "Histoire", href: "/" },
  { label: "Sur-mesure", href: "/quiz" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Rendez-vous", href: "/rendez-vous" },
];

export function isCurrentPath(path, href) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}
