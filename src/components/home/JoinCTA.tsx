"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JoinCTA() {
  return (
    <section className="py-6 sm:py-10 lg:py-16 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center"
        >
          <Image
            src={encodeURI("/images/5. T-shirt - Noir Orange/FOLLOW ME - Juv-30.jpg")}
            alt="Rejoins le mouvement"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-red-800/40 to-red-900/60" />

          <div className="relative z-10 text-center px-5 sm:px-8 py-12 sm:py-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-wide mb-4 sm:mb-6 leading-[0.95]">
              REJOINS LE MOUVEMENT.<br />PORTE LE FUTUR.
            </h2>
            <p className="text-white/60 text-xs sm:text-sm max-w-md mx-auto mb-7 sm:mb-10 font-accent italic leading-relaxed">
              Du streetwear conçu pour ceux qui brisent les codes. Drops limités,
              designs bold et qualité premium.
            </p>
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2.5 border border-white/30 text-white rounded-full pl-1 pr-4 sm:pl-1.5 sm:pr-6 py-1 sm:py-1.5 hover:bg-white/10 transition-colors"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 text-white flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
