"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinCTA() {
  return (
    <section className="py-10 sm:py-16 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden min-h-[450px] sm:min-h-[500px] flex items-center justify-center"
        >
          <Image
            src={encodeURI("/images/5. T-shirt - Noir Orange/FOLLOW ME - Juv-30.jpg")}
            alt="Rejoins le mouvement"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-red-800/40 to-red-900/60" />

          <div className="relative z-10 text-center px-6 py-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-white uppercase tracking-wide mb-6 leading-[0.95]">
              REJOINS LE MOUVEMENT.<br />PORTE LE FUTUR.
            </h2>
            <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto mb-10 font-accent italic">
              Du streetwear conçu pour ceux qui brisent les codes. Drops limités,
              designs bold et qualité premium — ne rate rien.
            </p>
            <Link
              href="/boutique"
              className="inline-flex items-center gap-3 border border-white/30 text-white rounded-full pl-1.5 pr-6 py-1.5 hover:bg-white/10 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="font-medium text-sm">Shop now</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
