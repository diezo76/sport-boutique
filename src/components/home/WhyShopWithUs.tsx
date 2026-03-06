"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.504 1.032-1.123a18.007 18.007 0 00-1.17-4.969l-1.102-2.645A2.625 2.625 0 0016.498 8.25H15M9 18.75H6.75M15 8.25v-.75A2.25 2.25 0 0012.75 5.25h-6A2.25 2.25 0 004.5 7.5v.75" />
      </svg>
    ),
    title: "Free Delivery",
    desc: "Reçois ton streetwear vite et sans frais, livraison offerte sur toutes les commandes.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "100% Secure Payment",
    desc: "Achète en confiance avec des méthodes de paiement chiffrées et fiables.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51" />
      </svg>
    ),
    title: "30 Days Return",
    desc: "Pas la bonne taille ? Retourne ou échange sans prise de tête sous 30 jours.",
  },
  {
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Des questions ? Notre équipe est là pour toi à tout moment.",
  },
];

export default function WhyShopWithUs() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-v-white border-t border-v-gray-100">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide leading-[0.9] mb-4 sm:mb-6">
              WHY SHOP WITH US?
            </h2>
            <p className="text-v-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
              On te couvre avec un shopping sans prise de tête, un service
              top-tier et des garanties qui te donnent confiance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-v-gray-300 flex items-center justify-center mb-3 sm:mb-4 text-v-black">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1.5 sm:mb-2">
                  {feat.title}
                </h3>
                <p className="text-v-gray-500 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
