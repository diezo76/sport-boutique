"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "DROPS EXCLUSIFS,\nIMPACT MAXIMUM",
    desc: "Des collections limitées pour un style unique — une fois épuisé, c'est terminé.",
    label: "Culture Communautaire",
    image: "/images/1. T-shirt - Bleu Blanc Rouge/FOLLOW ME - Juv-6.jpg",
  },
  {
    title: "LA MODE\nDU FUTUR",
    desc: "Des silhouettes oversized aux matériaux innovants, on repousse les limites du streetwear.",
    label: "Future-Ready Fashion",
    image: "/images/4. T-shirt - Vert Jaune/FOLLOW ME - Juv-43.jpg",
  },
  {
    title: "L'ART\nRENCONTRE\nL'ATTITUDE",
    desc: "Des graphismes bold et un design urbain qui transforment chaque tenue en déclaration.",
    label: "Art Meets Attitude",
    image: "/images/3. T-shirt - Vert Orange/FOLLOW ME - Juv-21.jpg",
  },
  {
    title: "CONÇU POUR\nLA RUE",
    desc: "Des tissus durables et un savoir-faire expert pour affronter le bitume avec style.",
    label: "Built for the Streets",
    image: "/images/5. T-shirt - Noir Orange/FOLLOW ME - Juv-34.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-v-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={encodeURI(slides[current].image)}
            alt={slides[current].label}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-between mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="flex-1 flex items-center pt-28 sm:pt-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl lg:max-w-2xl"
            >
              <h1 className="font-display text-[44px] sm:text-6xl md:text-7xl lg:text-[100px] leading-[0.9] text-white uppercase tracking-wide mb-5 sm:mb-6 whitespace-pre-line">
                {slides[current].title}
              </h1>
              <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-md mb-7 sm:mb-8 leading-relaxed">
                {slides[current].desc}
              </p>
              <Link
                href="/boutique"
                className="inline-flex items-center gap-3 bg-v-white text-v-black rounded-full pl-1.5 pr-5 sm:pr-6 py-1.5 hover:bg-v-gray-100 transition-colors group"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-v-black text-v-white flex items-center justify-center group-hover:bg-v-gray-900 transition-colors">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                <span className="font-medium text-sm">Shop now</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="pb-6 sm:pb-10 grid grid-cols-4 gap-2 sm:gap-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className="text-left group"
            >
              <div className="h-0.5 bg-white/20 mb-3 sm:mb-4 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: i === current ? "100%" : "0%" }}
                  transition={i === current ? { duration: 5, ease: "linear" } : { duration: 0.3 }}
                />
              </div>
              <span className="font-display text-lg sm:text-xl md:text-2xl text-white/60 group-hover:text-white transition-colors block mb-0.5 sm:mb-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`text-[10px] sm:text-xs md:text-sm transition-colors hidden sm:block ${
                i === current ? "text-white" : "text-white/40"
              }`}>
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
