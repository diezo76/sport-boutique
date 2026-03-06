"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const toggleCart = useCartStore((s) => s.toggleCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Boutique", href: "/boutique" },
    { label: "À Propos", href: "/#about" },
    { label: "Collection", href: "/boutique" },
    { label: "Catégorie", href: "/boutique" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-v-bg/95 backdrop-blur-xl border-b border-v-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="font-sans text-2xl font-extrabold tracking-tight">
          FollowMee
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-v-muted-light hover:text-v-white transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleCart}
            className="relative text-v-muted-light hover:text-v-white transition-colors"
            aria-label="Panier"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-v-white text-v-bg text-[10px] font-bold rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          </button>

          <button
            type="button"
            className="lg:hidden text-v-muted-light"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-v-card border-t border-v-border px-6 py-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block py-3 text-sm text-v-muted-light hover:text-v-white transition-colors border-b border-v-border last:border-b-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
