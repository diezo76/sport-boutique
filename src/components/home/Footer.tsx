import Link from "next/link";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/boutique" },
  { label: "About Us", href: "/#about" },
  { label: "Collection", href: "/boutique" },
  { label: "Category", href: "/boutique" },
];

const pagesLinks = [
  { label: "Home", href: "/" },
  { label: "License", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Style Guide", href: "#" },
  { label: "Support", href: "#" },
];

const socialLinks = [
  { label: "Linkedin", href: "#", icon: "in" },
  { label: "Instagram", href: "https://instagram.com", icon: "ig" },
  { label: "Twitter", href: "https://twitter.com", icon: "tw" },
  { label: "Facebook", href: "https://facebook.com", icon: "fb" },
  { label: "Tiktok", href: "https://tiktok.com", icon: "tk" },
];

export default function Footer() {
  return (
    <footer className="bg-v-black text-v-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-display text-2xl sm:text-3xl tracking-wider uppercase block mb-3 sm:mb-4">
              FollowMee
            </Link>
            <p className="font-accent italic text-white/70 text-sm sm:text-base mb-3">
              Streetwear for the Bold, Built for the Movement.
            </p>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-xs font-accent italic">
              Inspired by the raw energy of the streets, we create
              statement pieces that blend style, attitude, and individuality.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {pagesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-wider">
              Social
            </h4>
            <ul className="flex flex-wrap sm:flex-col gap-3 sm:space-y-3 sm:gap-0">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-white/40 text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] sm:text-xs shrink-0">
                      {link.icon}
                    </span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <p className="text-white/30 text-[11px] sm:text-xs">
            &copy; Copyright <span className="text-white font-bold">FollowMee</span> | Design by <span className="text-white">FollowMee</span> | Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
