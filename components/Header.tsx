"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./ui/Container";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nama */}
          <Link href="/" className="text-zinc-950 font-medium tracking-tight">
            Siti Zulhi Nirma S
          </Link>

          {/* Menu Navigasi */}
          <nav className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.label === "Contact"
                    ? "text-sm font-medium text-zinc-600 hover:text-zinc-950"
                    : "text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Tombol Navigasi Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            className="sm:hidden inline-flex items-center justify-center p-2 text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menu Navigasi Mobile */}
        {isMobileMenuOpen && (
          <nav className="sm:hidden py-3 border-t border-zinc-100 flex flex-wrap items-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
