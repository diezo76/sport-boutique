"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductSpotlight() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-v-card rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            <div className="relative aspect-square lg:aspect-auto bg-v-border">
              <Image
                src="/images/products/spotlight-hoodie.jpg"
                alt="Nightfall Oversized Hoodie"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Nightfall Oversized Hoodie
              </h2>
              <p className="text-v-muted text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                Un hoodie heavyweight ultra-doux pensé pour le confort et le style.
                Coupe relaxée, broderie subtile et wash vintage pour ce look
                parfaitement usé. Street-ready et conçu pour se démarquer.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-sans text-3xl font-extrabold">89€</span>
              </div>
              <Link
                href="/produit/nightfall-hoodie"
                className="inline-flex w-fit px-8 py-4 bg-v-white text-v-bg font-sans font-bold text-sm rounded-full hover:bg-v-muted-light transition-colors"
              >
                Shop now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
