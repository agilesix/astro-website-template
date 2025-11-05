// Shared site configuration

export interface NavItem {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const navItems: (NavItem | NavDropdown)[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    items: [
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      { label: "Data Analytics", href: "/services/data-analytics" },
      { label: "User Research", href: "/services/user-research" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      { label: "Data Analytics", href: "/services/data-analytics" },
      { label: "User Research", href: "/services/user-research" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export const socialLinks: FooterLink[] = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

export const siteConfig = {
  companyName: "Company Name",
  logo: "Company Name",
  logoHref: "/",
};
