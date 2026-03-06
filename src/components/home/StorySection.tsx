"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          <div>
            <span className="text-v-gray-500 text-sm tracking-widest uppercase block mb-6">
              Streetwear with a Story
            </span>
            <h2 className="font-display text-6xl sm:text-7xl lg:text-[90px] leading-[0.9] uppercase tracking-wide">
              PORTE LE MOUVEMENT, BRISE LES CODES.
            </h2>
          </div>

          <div className="lg:pt-16">
            <p className="text-v-gray-700 text-base leading-relaxed mb-6">
              Née du pouls de la rue, notre marque est un hommage aux rebelles,
              aux rêveurs et à ceux qui façonnent la culture. Inspirée par
              l&apos;énergie brute de la vie urbaine — les allées couvertes de
              graffitis, les scènes musicales underground et les sessions de
              skate nocturnes — on crée du streetwear qui parle d&apos;individualité
              et d&apos;expression de soi.
            </p>
            <p className="text-v-gray-700 text-base leading-relaxed mb-10">
              Née du pouls de la rue, notre marque est un hommage aux rebelles,
              aux rêveurs et à ceux qui façonnent la culture. Inspirée par
              l&apos;énergie brute de la vie urbaine — on crée du streetwear qui
              parle d&apos;individualité et d&apos;expression de soi.
            </p>
            <Link
              href="/boutique"
              className="inline-flex items-center gap-3 bg-v-black text-v-white rounded-full pl-1.5 pr-6 py-1.5 hover:bg-v-gray-900 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-v-white text-v-black flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="font-medium text-sm">Get it now</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
