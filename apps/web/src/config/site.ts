/**
 * Site-wide configuration and metadata for Insight Ignite.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "Insight Ignite",
  author: "Dr. Nivedita Ganguli",
  authorTitle: "Educator & Student-Support Mentor",
  description:
    "Official online education platform for Dr. Nivedita Ganguli. Explore 'The 6 Powers of Conscious Parenting' masterclass, cultivating presence, emotional attunement, compassionate boundaries, and calm co-regulation.",
  contactEmail: "info@insightignite.org",
  navItems: [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#featured-course" },
    { label: "The 6 Powers", href: "#six-powers" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "Journey", href: "#journey" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  policyLinks: [
    { label: "Privacy Notice & Child Data Protection", href: "#privacy" },
    { label: "Terms of Service & Platform Governance", href: "#terms" },
    { label: "Refund & Cancellation Policy", href: "#refund" },
  ] as NavItem[],
  links: {
    login: "#login-placeholder",
    exploreCourse: "#featured-course",
  },
};
