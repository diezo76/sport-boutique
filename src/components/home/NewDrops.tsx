"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  slug: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image?: string;
  badge?: "Sale" | "Drop" | "New";
}

const products: Product[] = [
  {
    slug: "shadow-drip",
    name: "Shadow Drip",
    description:
      "Un hoodie minimaliste et sleek aux tons sombres avec des accents réfléchissants subtils.",
    price: "69€",
    originalPrice: "79€",
    image: "/images/products/hoodie-dark.jpg",
    badge: "Sale",
  },
  {
    slug: "urban-phantom",
    name: "Urban Phantom",
    description:
      "Un hoodie oversized avec des graphismes et une esthétique furtive inspirée des nuits urbaines.",
    price: "99€",
    image: "/images/products/hoodie-urban.jpg",
    badge: "Drop",
  },
  {
    slug: "neon-rebellion",
    name: "Neon Rebellion",
    description:
      "Une pièce statement avec des détails néon vibrants et des influences street art.",
    price: "89€",
    image: "/images/products/tee-neon.jpg",
    badge: "New",
  },
];

const badgeColors: Record<string, string> = {
  Sale: "bg-v-sale text-white",
  Drop: "bg-v-drop text-white",
  New: "bg-v-new text-white",
};

export default function NewDrops() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold">
            new drops
          </h2>
          <p className="text-v-muted text-sm sm:text-base max-w-md">
            Démarquez-vous avec notre dernière collection — designs bold,
            tissus premium et coupes street-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/produit/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-v-card rounded-2xl overflow-hidden mb-4">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-v-muted">
                      <span className="text-6xl">👕</span>
                    </div>
                  )}

                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${badgeColors[product.badge]}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-sans font-bold text-base mb-1">
                      {product.name}
                    </h3>
                    <p className="text-v-muted text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-sans font-bold text-base">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="block text-v-muted text-sm line-through">
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
