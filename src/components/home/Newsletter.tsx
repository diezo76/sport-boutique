"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-v-card rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto bg-v-border">
              <Image
                src="/images/newsletter-bg.jpg"
                alt="Newsletter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-v-card/80 hidden lg:block" />
            </div>

            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-v-muted text-xs font-medium tracking-widest uppercase mb-4">
                Man &bull; Woman
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold mb-4">
                Abonne-toi à notre newsletter !
              </h2>
              <p className="text-v-muted text-sm sm:text-base mb-8 max-w-sm">
                Reçois les meilleurs drops, offres exclusives et conseils directement dans ta boîte mail.
              </p>

              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ton adresse email"
                  className="flex-1 bg-v-border/50 border border-v-border rounded-full px-5 py-3 text-sm text-v-white placeholder:text-v-muted focus:outline-none focus:border-v-muted transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-v-white text-v-bg font-sans font-bold text-sm rounded-full hover:bg-v-muted-light transition-colors shrink-0"
                >
                  OK
                </button>
              </form>

              {submitted && (
                <p className="text-v-new text-sm mt-4">
                  Merci ! Tu es inscrit(e).
                </p>
              )}

              <p className="text-v-muted text-xs mt-4">
                Newsletter hebdomadaire. Désabonnement à tout moment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
