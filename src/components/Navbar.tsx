"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  label: string;
  hoverText: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", hoverText: "Back to start", href: "/" },
  { label: "About", hoverText: "Know us better", href: "/#about" },
  { label: "Solutions", hoverText: "What we build", href: "/#solutions" },
  { label: "Impacts", hoverText: "Why it matters", href: "/#impacts" },
  { label: "News", hoverText: "Latest updates", href: "/#news" },
  { label: "Partners", hoverText: "Who we work with", href: "/#partners" },
  { label: "Contact", hoverText: "Reach out", href: "/#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6 z-40 transition-all duration-300 ${
          scrolled ? "bg-white text-gray-800 shadow" : "bg-transparent text-[#12a7b5]"
        }`}
      >
        <Link href="/">
          <Image
            src="/assets/quadloop.svg"
            alt="Quadloop Logo"
            className="h-12 w-auto"
            width={160}
            height={50}
          />
        </Link>

        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-md font-medium">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-[#12a7b5] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="z-50"
              aria-label="Open Menu"
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white text-gray-800 z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 md:top-10 md:right-10 z-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <div className="h-full w-full flex flex-col justify-center items-center p-8 space-y-8 text-3xl font-light">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="hover:text-[#12a7b5] transition-colors duration-300"
            >
              {hoveredIndex === index ? item.hoverText : item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;