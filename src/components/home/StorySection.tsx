"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-v-muted text-sm font-medium tracking-widest uppercase mb-6 block">
            Streetwear with a Story
          </span>

          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Porte Le Mouvement,<br />
            Brise Les Codes.
          </h2>

          <p className="text-v-muted text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Née du pouls de la rue, notre marque est un hommage aux rebelles,
            aux rêveurs et à ceux qui façonnent la culture. Inspirée par
            l&apos;énergie brute de la vie urbaine — les allées couvertes de
            graffitis, les scènes musicales underground et les sessions de
            skate nocturnes — on crée du streetwear qui parle d&apos;individualité
            et d&apos;expression de soi.
          </p>

          <p className="text-v-muted text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Chaque pièce est pensée pour ceux qui ne suivent pas les tendances
            mais les créent. Du tissu au design, tout est conçu avec intention.
          </p>

          <Link
            href="/boutique"
            className="inline-flex px-8 py-4 bg-v-white text-v-bg font-sans font-bold text-sm rounded-full hover:bg-v-muted-light transition-colors"
          >
            Get it now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
