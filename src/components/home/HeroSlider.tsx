"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Drops Exclusifs, Impact Maximum",
    desc: "Des collections limitées pour un style unique — une fois épuisé, c'est terminé.",
  },
  {
    id: 2,
    title: "La Mode Du Futur",
    desc: "Des silhouettes oversized aux matériaux innovants, on repousse les limites du streetwear.",
  },
  {
    id: 3,
    title: "L'Art Rencontre L'Attitude",
    desc: "Des graphismes bold et un design urbain qui transforment chaque tenue en déclaration.",
  },
  {
    id: 4,
    title: "Conçu Pour La Rue",
    desc: "Des tissus durables et un savoir-faire expert pour affronter le bitume avec style.",
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
    <section className="relative min-h-screen flex items-center bg-v-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-v-bg via-transparent to-v-bg pointer-events-none" />

      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 pt-32 pb-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
                {slides[current].title}
              </h1>
              <p className="text-v-muted text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/boutique"
              className="px-8 py-4 bg-v-white text-v-bg font-sans font-bold text-sm rounded-full hover:bg-v-muted-light transition-colors"
            >
              Shop now
            </Link>
            <Link
              href="/boutique"
              className="px-8 py-4 border border-v-border text-v-white font-sans font-bold text-sm rounded-full hover:bg-v-card transition-colors"
            >
              Shop now
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex lg:flex-col gap-6 items-center">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-3 transition-all duration-300 ${
                i === current ? "text-v-white" : "text-v-muted"
              }`}
            >
              <span className="font-sans text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`h-px transition-all duration-500 ${
                  i === current ? "w-12 bg-v-white" : "w-6 bg-v-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
