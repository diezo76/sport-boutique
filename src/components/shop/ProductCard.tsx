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
  const isOnSale = product.salePrice && product.salePrice !== product.regularPrice;
  const isOutOfStock = product.stockStatus === "OUT_OF_STOCK";
  const imageUrl = product.image?.sourceUrl;
  const imageAlt = product.image?.altText || product.name;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Link href={`/produit/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-v-gray-100 rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-v-gray-500">
              <span className="text-4xl sm:text-5xl">👕</span>
            </div>
          )}

          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5">
            {isOnSale && (
              <span className="bg-v-red text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                Sale
              </span>
            )}
            {isOutOfStock && (
              <span className="bg-v-gray-500 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                Épuisé
              </span>
            )}
          </div>
        </div>

        <h3 className="font-accent italic font-semibold text-sm sm:text-base mb-0.5 group-hover:text-v-gray-700 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-bold text-xs sm:text-sm">
            {isOnSale ? product.salePrice : product.regularPrice}
          </span>
          {isOnSale && (
            <span className="text-v-gray-500 text-xs line-through">
              {product.regularPrice}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
