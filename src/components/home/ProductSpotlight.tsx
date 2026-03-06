"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const thumbnails = [
  "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-7.jpg",
  "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-8.jpg",
  "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-9.jpg",
  "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-10.jpg",
];

export default function ProductSpotlight() {
  return (
    <section className="bg-v-black text-v-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center"
        >
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] leading-[0.9] uppercase tracking-wide mb-5 sm:mb-8">
              T-SHIRT BLEU BLANC ROUGE
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md font-accent italic">
              Un t-shirt heavyweight ultra-doux pensé pour le confort et le style.
              Coupe relaxée, détails brodés subtils et un look parfaitement urbain.
              Street-ready et conçu pour se démarquer.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="font-display text-3xl sm:text-4xl">49€</span>
              <span className="font-display text-3xl sm:text-4xl text-white/30 line-through">59€</span>
            </div>
            <Link
              href="/produit/tshirt-bleu-blanc-rouge"
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

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
              <Image
                src={encodeURI("/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv.jpg")}
                alt="T-shirt Bleu Blanc Rouge"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {thumbnails.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src={encodeURI(src)}
                    alt={`Vue ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
