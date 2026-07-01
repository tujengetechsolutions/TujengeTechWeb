"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Global Impact", href: "/global-impact" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--color-border)] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            {/* <Image
                src=""
                alt="TujengeTech Logo"
                width={40}
                height={40}
                priority
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            /> */}
            <span className="font-bold text-base sm:text-lg text-[var(--color-foreground)]">
              Tujenge
              <span className="text-[var(--color-brand-blue)]">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted-text)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {link.name}

                  {/* Gold Bottom Border - Animated */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--color-brand-yellow)] transition-all duration-300 ease-in-out ${
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                    style={{
                      transformOrigin: "center",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-4 py-2 bg-[var(--color-brand-yellow)] text-[var(--color-foreground)] font-semibold rounded-full transition-all duration-200 text-xs tracking-wide hover:bg-[var(--color-brand-yellow-hover)] shadow-xs"
            >
              Start a Project
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--color-border)] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[var(--color-foreground)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--color-foreground)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-border)] py-4 space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[var(--color-border)] text-[var(--color-foreground)] border-l-2 border-[var(--color-brand-yellow)] pl-2"
                      : "text-[var(--color-muted-text)] hover:bg-[var(--color-border)]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="w-full mt-4 inline-flex px-4 py-2 bg-[var(--color-brand-yellow)] text-[var(--color-foreground)] font-semibold rounded-full transition-all duration-200 text-xs tracking-wide hover:bg-[var(--color-brand-yellow-hover)] shadow-xs justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
