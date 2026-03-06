"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    slug: "tshirt-bleu-blanc-rouge",
    name: "T-shirt Bleu Blanc Rouge",
    desc: "Un t-shirt sleek aux couleurs patriotiques avec des accents réfléchissants subtils.",
    price: "49€",
    originalPrice: "59€",
    image: "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-3.jpg",
    badge: "Sale" as const,
  },
  {
    slug: "tshirt-noir-jaune",
    name: "T-shirt Noir Jaune",
    desc: "Un t-shirt oversized avec des graphismes bold inspirés des nuits urbaines.",
    price: "49€",
    image: "/images/2. T-shirt - Noir Jaune/FOLLOW ME - Juv-15.jpg",
    badge: "Drop" as const,
  },
  {
    slug: "tshirt-vert-orange",
    name: "T-shirt Vert Orange",
    desc: "Une pièce statement avec des détails vibrants et des influences street art.",
    price: "49€",
    image: "/images/3. T-shirt - Vert Orange/FOLLOW ME - Juv-20.jpg",
    badge: "New" as const,
  },
];

const badgeStyles: Record<string, string> = {
  Sale: "bg-v-red text-white",
  Drop: "bg-v-purple text-white",
  New: "bg-v-green text-white",
};

export default function NewDrops() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-14 gap-3">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide">
            new drops
          </h2>
          <p className="text-v-gray-500 text-sm max-w-md leading-relaxed">
            Démarquez-vous avec notre dernière collection — designs bold,
            tissus premium et coupes street-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/produit/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-v-gray-100 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={encodeURI(product.image)}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full ${badgeStyles[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-accent italic font-semibold text-base sm:text-lg mb-0.5">
                      {product.name}
                    </h3>
                    <p className="text-v-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {product.desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bold text-sm sm:text-base">{product.price}</span>
                    {product.originalPrice && (
                      <span className="block text-v-gray-500 text-xs sm:text-sm line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
