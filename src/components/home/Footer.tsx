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
    <footer className="bg-v-black text-v-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="font-display text-3xl tracking-wider uppercase block mb-4">
              FollowMee
            </Link>
            <p className="font-accent italic text-white/80 text-base mb-4">
              Streetwear for the Bold, Built for the Movement.
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-accent italic">
              Inspired by the raw energy of the streets, we create
              statement pieces that blend style, attitude, and individuality.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-3">
              {pagesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">
              Social
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; Copyright <span className="text-white font-bold">FollowMee</span> | Design by <span className="text-white">FollowMee</span> | Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
