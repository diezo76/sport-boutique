"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: string;
    regularPrice: string;
    salePrice?: string;
    image?: { sourceUrl: string; altText: string } | null;
    stockStatus: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOnSale =
    product.salePrice && product.salePrice !== product.regularPrice;
  const isOutOfStock = product.stockStatus === "OUT_OF_STOCK";
  const imageUrl = product.image?.sourceUrl;
  const imageAlt = product.image?.altText || product.name;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative bg-dark-200 border border-white/5 overflow-hidden
                 hover:border-neon-green/50 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-dark-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-dark-400">
            <span className="text-4xl">📦</span>
          </div>
        )}
        {/* Overlay au hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isOnSale && (
            <span className="bg-neon-orange text-black text-xs font-bold px-2 py-1 uppercase">
              PROMO
            </span>
          )}
          {isOutOfStock && (
            <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 uppercase">
              ÉPUISÉ
            </span>
          )}
        </div>

        {/* Bouton Quick Add */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 bg-neon-green text-black 
                     font-bold py-3 uppercase tracking-wider text-sm
                     opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          + Ajouter au panier
        </motion.button>
      </div>

      {/* Infos */}
      <div className="p-4">
        <Link href={`/produit/${product.slug}`}>
          <h3
            className="text-white font-semibold text-sm uppercase tracking-wide 
                         hover:text-neon-green transition-colors line-clamp-2 mb-2"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-neon-green font-bold">
            {isOnSale ? product.salePrice : product.regularPrice}
          </span>
          {isOnSale && (
            <span className="text-gray-500 text-sm line-through">
              {product.regularPrice}
            </span>
          )}
        </div>
      </div>

      {/* Ligne lumineuse au hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-neon 
                      group-hover:w-full transition-all duration-500"
      />
    </motion.div>
  );
}
