"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featured = [
  {
    name: "T-shirt BBR",
    desc: "Un t-shirt moderne sleek conçu pour un layering sans effort et un style quotidien frais.",
    slug: "tshirt-bbr",
    image: "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-4.jpg",
  },
  {
    name: "T-shirt Vert Jaune",
    desc: "Léger et polyvalent, pour rester confortable et stylé en toutes saisons.",
    slug: "tshirt-vert-jaune",
    image: "/images/4. T-shirt - Vert Jaune/FOLLOW ME - Juv-25.jpg",
  },
  {
    name: "T-shirt Gris Orange",
    desc: "Restez cool et protégé avec un tissu respirant et une coupe parfaite.",
    slug: "tshirt-gris-orange",
    image: "/images/6. T-shirt - Gris Orange/FOLLOW ME - Juv-36.jpg",
  },
  {
    name: "T-shirt Noir Jaune",
    desc: "Respirant et confortable, pour rester frais et confiant tout au long de la journée.",
    slug: "tshirt-noir-jaune",
    image: "/images/2. T-shirt - Noir Jaune/FOLLOW ME - Juv-18.jpg",
  },
  {
    name: "T-shirt Noir Orange",
    desc: "Stylé et confortable, en tissu premium parfait pour les looks streetwear.",
    slug: "tshirt-noir-orange",
    image: "/images/5. T-shirt - Noir Orange/FOLLOW ME - Juv-35.jpg",
  },
  {
    name: "T-shirt Vert Orange",
    desc: "Commande les rues avec un design affûté et un confort toute la journée.",
    slug: "tshirt-vert-orange",
    image: "/images/3. T-shirt - Vert Orange/FOLLOW ME - Juv-23.jpg",
  },
];

export default function FeaturedDrops() {
  return (
    <section className="py-20 sm:py-28 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-5xl sm:text-6xl uppercase tracking-wide mb-4">
            Featured Drops
          </h2>
          <p className="text-v-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Designs exclusifs, matériaux premium et vibes street-ready — ces pièces
            incontournables lancent la tendance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/produit/${item.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-v-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={encodeURI(item.image)}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide mb-1">
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
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
