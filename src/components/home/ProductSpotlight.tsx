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
    <section className="bg-v-black text-v-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-[80px] leading-[0.9] uppercase tracking-wide mb-8">
              T-SHIRT BLEU BLANC ROUGE
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md font-accent italic">
              Un t-shirt heavyweight ultra-doux pensé pour le confort et le style.
              Coupe relaxée, détails brodés subtils et un look parfaitement urbain.
              Street-ready et conçu pour se démarquer.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-display text-4xl">49€</span>
              <span className="font-display text-4xl text-white/30 line-through">59€</span>
            </div>
            <Link
              href="/produit/tshirt-bleu-blanc-rouge"
              className="inline-flex items-center gap-3 bg-transparent border border-white/30 text-white rounded-full pl-1.5 pr-6 py-1.5 hover:bg-white/10 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="font-medium text-sm">Shop now</span>
            </Link>
          </div>

          <div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
              <Image
                src={encodeURI("/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv.jpg")}
                alt="T-shirt Bleu Blanc Rouge"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {thumbnails.map((src, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
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
