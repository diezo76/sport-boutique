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
    <section className="py-10 sm:py-16 lg:py-24 bg-v-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={encodeURI("/images/4. T-shirt - Vert Jaune/FOLLOW ME - Juv-53.jpg")}
              alt="Newsletter"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase tracking-wide leading-[0.9] mb-4 sm:mb-6">
              SUBSCRIBE TO OUR NEWSLETTER NOW!
            </h2>
            <p className="text-v-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 max-w-sm leading-relaxed">
              Reçois les meilleurs drops, offres exclusives et conseils directement dans ta boîte mail.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your E-mail"
                className="flex-1 border border-v-gray-300 rounded-full px-5 py-3 sm:py-3.5 text-sm text-v-black placeholder:text-v-gray-500 focus:outline-none focus:border-v-black transition-colors bg-transparent"
                required
              />
              <button
                type="submit"
                className="px-7 py-3 sm:py-3.5 bg-v-black text-v-white font-bold text-sm rounded-full hover:bg-v-gray-900 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <p className="text-v-green text-sm mt-3 font-medium">Merci ! Tu es inscrit(e).</p>
            )}
            <p className="text-v-gray-500 text-[11px] sm:text-xs mt-3 sm:mt-4">
              Weekly newsletter. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
