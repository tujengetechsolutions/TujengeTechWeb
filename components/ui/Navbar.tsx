"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/",         label: "Home"          },
  { href: "/about",    label: "About Us"      },
  { href: "/services", label: "Services"      },
  { href: "/projects", label: "Projects"      },
  { href: "/team",     label: "Team"          },
  { href: "/impact",   label: "Global Impact" },
  { href: "/contact",  label: "Contact"       },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      suppressHydrationWarning
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/20 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">

        {/* Logo */}
        <Link className="shrink-0" href="/">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Tujenge<span className="text-accent-foreground">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground">
              {label}
              {/* underline animates on hover only — no active state needed */}
              <span className="nav-span" />
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="cta-btn"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md p-2 lg:hidden"
        >
          {menuOpen
            ? <X    className="h-5 w-5" aria-hidden="true" />
            : <Menu className="h-5 w-5" aria-hidden="true" />
          }
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 lg:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/75 transition hover:text-foreground">
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="nav-links-span"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  );
}