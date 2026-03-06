"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-v-card rounded-3xl p-10 sm:p-16 lg:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />

          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 relative">
            Rejoins Le Mouvement.<br />
            Porte Le Futur.
          </h2>
          <p className="text-v-muted text-sm sm:text-base max-w-lg mx-auto mb-10 relative">
            Du streetwear conçu pour ceux qui brisent les codes. Drops limités,
            designs bold et qualité premium — ne rate rien.
          </p>
          <Link
            href="/boutique"
            className="relative inline-flex px-8 py-4 bg-v-white text-v-bg font-sans font-bold text-sm rounded-full hover:bg-v-muted-light transition-colors"
          >
            Shop now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
