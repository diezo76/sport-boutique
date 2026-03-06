"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-v-card rounded-2xl p-8 sm:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold mb-4 max-w-sm leading-tight">
                Construit Par La Rue, Fait Pour Toi
              </h3>
              <p className="text-v-muted text-sm sm:text-base max-w-sm leading-relaxed">
                De la rue à ton style — notre parcours est entièrement dédié
                à l&apos;expression de soi et à la rébellion. Rejoins le mouvement.
              </p>
            </div>
            <Link
              href="/boutique"
              className="mt-8 inline-flex w-fit px-6 py-3 bg-v-white text-v-bg font-sans font-bold text-sm rounded-full hover:bg-v-muted-light transition-colors"
            >
              Shop now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-v-card rounded-2xl p-8 sm:p-12 flex flex-col justify-between min-h-[320px] overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.02] rounded-full translate-y-1/2 -translate-x-1/2" />
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold mb-4 max-w-sm leading-tight">
                Élève Ton Style Streetwear
              </h3>
              <p className="text-v-muted text-sm sm:text-base max-w-sm leading-relaxed">
                Des graphismes bold aux essentiels du quotidien, explore nos
                derniers drops et pièces signature conçues pour la culture.
              </p>
            </div>
            <Link
              href="/boutique"
              className="mt-8 inline-flex w-fit px-6 py-3 border border-v-border text-v-white font-sans font-bold text-sm rounded-full hover:bg-v-card-hover transition-colors"
            >
              Shop collections
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
