/**
 * Global Navigation Component for Paycort AI.
 * Features:
 * - Ultra-clean minimalist design (No heavy shadows).
 * - Fully responsive with high-contrast visibility.
 * - Optimized for modern sans-serif typography.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "About Us", href: "#about-us" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4 md:px-6">
      <nav className="mx-auto max-w-5xl">
        {/* Main Navbar Container */}
        <div className="flex items-center justify-between rounded-full border border-zinc-200/60 bg-white/80 px-5 py-2 backdrop-blur-md transition-all duration-300 md:px-8">
          
          {/* Brand Identity */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green transition-transform duration-300 group-hover:scale-105">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">
                PAYCORT <span className="text-brand-green">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-brand-green"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth and Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden items-center gap-6 border-l border-zinc-100 pl-6 md:flex">
              <Link 
                href="/login" 
                className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
              >
                Log In
              </Link>
              <Link href="/register">
                <Button className="h-9 rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-all hover:bg-zinc-800 active:scale-95">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-50 md:hidden"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="mt-3 flex flex-col gap-1 rounded-3xl border border-zinc-200/60 bg-white/95 p-3 backdrop-blur-lg md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-brand-green"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-zinc-100 pt-3">
              <Link 
                href="/login"
                className="flex h-11 items-center justify-center rounded-2xl text-sm font-medium text-zinc-600"
              >
                Log In
              </Link>
              <Link href="/register">
                <Button className="w-full h-11 rounded-2xl bg-brand-green text-sm font-medium text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}