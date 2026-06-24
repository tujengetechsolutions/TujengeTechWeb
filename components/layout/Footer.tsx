'use client'
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";


interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Global Impact", href: "/global-impact" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Software Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "AI Solutions", href: "/services" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white"
    style={{
        background: "linear-gradient(135deg,#1a3a70  0%, var(--color-navy-dark) 100%)",
    }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description Section */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-lg">
                Tujenge<span className="text-[var(--color-brand-yellow)]">Tech</span>
              </h2>
              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                Building tomorrow today through innovative technology solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-500 hover:border-[var(--color-brand-yellow)] hover:text-[var(--color-brand-yellow)] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold tracking-widest text-gray-300 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Tujenge Tech. All Rights Reserved.</p>
          <p className="text-gray-400">Building Tomorrow Today.</p>
        </div>
      </div>
    </footer>
  );
};