"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featured = [
  { name: "Crop Top", desc: "Un crop top moderne et sleek pour un layering sans effort.", slug: "crop-top", image: "/images/products/crop-top.jpg" },
  { name: "Veste Printemps", desc: "Légère et polyvalente, pour rester cozy les jours de brise.", slug: "spring-jacket", image: "/images/products/spring-jacket.jpg" },
  { name: "Casquette Été", desc: "Restez cool et protégé avec tissu respirant et protection UV.", slug: "summer-cap", image: "/images/products/summer-cap.jpg" },
  { name: "T-shirt Blanc", desc: "Léger et respirant, pour rester frais et confortable tout l'été.", slug: "white-tee", image: "/images/products/white-tee.jpg" },
  { name: "T-shirt Noir", desc: "Stylé et confortable, en tissu respirant parfait pour les jours chauds.", slug: "black-tee", image: "/images/products/black-tee.jpg" },
  { name: "Urban Phantom", desc: "Commande les rues avec un design affûté et un confort toute la journée.", slug: "urban-phantom", image: "/images/products/urban-phantom.jpg" },
];

export default function FeaturedDrops() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold mb-4">
            Featured Drops: Démarque-Toi
          </h2>
          <p className="text-v-muted text-sm sm:text-base max-w-lg mx-auto">
            Designs exclusifs, matériaux premium et vibes street-ready — ces pièces
            incontournables lancent la tendance. Choppe les avant qu&apos;il soit trop tard !
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/produit/${item.slug}`} className="group block">
                <div className="relative aspect-square bg-v-card rounded-2xl overflow-hidden mb-3">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-v-muted">
                      <span className="text-5xl">👕</span>
                    </div>
                  )}
                </div>
                <h3 className="font-sans font-bold text-sm sm:text-base mb-1">
                  {item.name}
                </h3>
                <p className="text-v-muted text-xs sm:text-sm line-clamp-2">
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
