import Link from "next/link";

const menuLinks = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "/boutique" },
  { label: "À Propos", href: "/#about" },
  { label: "Collection", href: "/boutique" },
  { label: "Catégorie", href: "/boutique" },
];

const pagesLinks = [
  { label: "Accueil", href: "/" },
  { label: "Licence", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Style Guide", href: "#" },
  { label: "Support", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-v-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="font-sans text-2xl font-extrabold tracking-tight">
              FollowMee
            </Link>
            <p className="mt-4 text-v-muted text-sm leading-relaxed max-w-xs">
              Streetwear pour les audacieux, construit pour le mouvement.
              Inspiré par l&apos;énergie brute des rues.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm mb-5 uppercase tracking-wider">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-v-muted text-sm hover:text-v-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm mb-5 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-3">
              {pagesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-v-muted text-sm hover:text-v-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm mb-5 uppercase tracking-wider">
              Social
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-v-muted text-sm hover:text-v-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-v-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-v-muted text-xs">
            &copy; {new Date().getFullYear()} FollowMee. Tous droits réservés.
          </p>
          <p className="text-v-muted text-xs">
            Design by <span className="text-v-white">FollowMee</span> | Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
