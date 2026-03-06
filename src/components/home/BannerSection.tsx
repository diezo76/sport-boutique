"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="py-4 sm:py-8 lg:py-10 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[350px] lg:min-h-[400px]"
          >
            <Image
              src={encodeURI("/images/4. T-shirt - Vert Jaune/FOLLOW ME - Juv-24.jpg")}
              alt="Construit par la rue"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide mb-2 sm:mb-3 leading-tight">
                Construit Par La Rue,<br />Fait Pour Toi
              </h3>
              <p className="text-white/70 text-xs sm:text-sm max-w-sm mb-4 sm:mb-6 leading-relaxed">
                De la rue à ton style — notre parcours est entièrement dédié
                à l&apos;expression de soi.
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center gap-2.5 bg-v-white text-v-black rounded-full pl-1 pr-4 sm:pl-1.5 sm:pr-6 py-1 sm:py-1.5 hover:bg-v-gray-100 transition-colors"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-v-black text-v-white flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="font-medium text-xs sm:text-sm">Shop now</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[280px] sm:min-h-[350px] lg:min-h-[400px]"
          >
            <Image
              src={encodeURI("/images/6. T-shirt - Gris Orange/FOLLOW ME - Juv-37.jpg")}
              alt="Élève ton style"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide mb-2 sm:mb-3 leading-tight">
                Élève Ton<br />Style Streetwear
              </h3>
              <p className="text-white/70 text-xs sm:text-sm max-w-sm mb-4 sm:mb-6 leading-relaxed">
                Des graphismes bold aux essentiels du quotidien, explore nos
                derniers drops conçus pour la culture.
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center gap-2.5 border border-white/30 text-white rounded-full pl-1 pr-4 sm:pl-1.5 sm:pr-6 py-1 sm:py-1.5 hover:bg-white/10 transition-colors"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/30 text-white flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="font-medium text-xs sm:text-sm">Shop collections</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
