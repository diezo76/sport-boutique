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
    { label: "Home", href: "/" },
    { label: "Shop", href: "/boutique" },
    { label: "About Us", href: "/#about" },
    { label: "Collection", href: "/boutique" },
    { label: "Category", href: "/boutique" },
  ];

  return (
    <header
      className={`fixed top-[38px] left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-v-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-3xl tracking-wider text-v-black uppercase">
          FollowMee
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-v-gray-700 hover:text-v-black transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={toggleCart}
            className="relative text-v-black hover:text-v-gray-700 transition-colors"
            aria-label="Panier"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-v-black text-v-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="hidden sm:block text-v-black"
            aria-label="Compte"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>

          <button
            type="button"
            className="lg:hidden text-v-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-v-white border-t border-v-gray-100 px-6 py-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block py-3 text-sm text-v-gray-700 hover:text-v-black border-b border-v-gray-100 last:border-b-0"
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
