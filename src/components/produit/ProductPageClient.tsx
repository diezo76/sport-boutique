"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProductGallery from "./ProductGallery";
import ProductVariants, { type ProductVariation } from "./ProductVariants";
import AddToCartButton from "./AddToCartButton";

interface ProductData {
  id: string;
  databaseId?: number;
  slug?: string;
  name: string;
  description?: string;
  shortDescription?: string;
  productCategories?: { nodes: { slug: string; name: string }[] };
  __typename?: string;
  price?: string;
  regularPrice?: string;
  salePrice?: string;
  stockStatus?: string;
  stockQuantity?: number;
  sku?: string;
  weight?: string;
  image?: { sourceUrl: string; altText: string } | null;
  galleryImages?: { nodes: { sourceUrl: string; altText: string }[] };
  variations?: { nodes: ProductVariation[] };
}

interface ProductPageClientProps {
  product: ProductData;
}

function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^\d,.]/g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedVariation, setSelectedVariation] =
    useState<ProductVariation | null>(null);

  const isVariableProduct = product.__typename === "VariableProduct";
  const variations = product.variations?.nodes ?? [];

  const galleryImages = useMemo(() => {
    if (isVariableProduct && selectedVariation?.image?.sourceUrl) {
      const mainImages = product.galleryImages?.nodes ?? [];
      const variationImg = {
        sourceUrl: selectedVariation.image.sourceUrl,
        altText: selectedVariation.image.altText ?? product.name,
      };
      return [variationImg, ...mainImages.filter((i) => i.sourceUrl !== variationImg.sourceUrl)];
    }
    const main = product.image
      ? [product.image]
      : [];
    const gallery = product.galleryImages?.nodes ?? [];
    return [...main, ...gallery];
  }, [product, isVariableProduct, selectedVariation]);

  const displayPrice = isVariableProduct && selectedVariation
    ? selectedVariation.price
    : product.salePrice && product.salePrice !== product.regularPrice
      ? product.salePrice
      : product.regularPrice ?? product.price ?? "";
  const isOnSale =
    !isVariableProduct &&
    product.salePrice &&
    product.salePrice !== product.regularPrice;
  const isOutOfStock = (isVariableProduct && selectedVariation
    ? selectedVariation.stockStatus
    : product.stockStatus) === "OUT_OF_STOCK";
  const stockQuantity = isVariableProduct && selectedVariation
    ? selectedVariation.stockQuantity
    : (product as { stockQuantity?: number }).stockQuantity;
  const mainImage = product.image?.sourceUrl ?? "";

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Galerie */}
        <div>
          <ProductGallery
            images={galleryImages}
            productName={product.name}
          />
        </div>

        {/* Infos produit */}
        <div className="space-y-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            {product.name}
          </h1>

          {/* Prix */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-neon-green">
              {displayPrice}
            </span>
            {isOnSale && (
              <span className="text-lg text-white/50 line-through">
                {product.regularPrice}
              </span>
            )}
          </div>

          {/* Stock */}
          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                isOutOfStock ? "bg-red-500" : "bg-neon-green"
              }`}
            />
            <span className="text-sm text-white/70">
              {isOutOfStock
                ? "Épuisé"
                : stockQuantity != null
                  ? `${stockQuantity} en stock`
                  : "En stock"}
            </span>
          </div>

          {/* Variants (taille/couleur) */}
          {isVariableProduct && variations.length > 0 && (
            <ProductVariants
              variations={variations}
              onSelect={setSelectedVariation}
              selectedVariation={selectedVariation}
            />
          )}

          {/* Bouton ajout panier */}
          <AddToCartButton
            productId={product.id}
            productName={product.name}
            price={parsePrice(product.price ?? product.regularPrice ?? "0")}
            image={mainImage}
            stockStatus={isVariableProduct && selectedVariation ? selectedVariation.stockStatus : product.stockStatus ?? "IN_STOCK"}
            isVariableProduct={isVariableProduct}
            selectedVariation={
              isVariableProduct && selectedVariation
                ? {
                    id: selectedVariation.id,
                    name: selectedVariation.name,
                    price: selectedVariation.price,
                    image: selectedVariation.image,
                    attributes: selectedVariation.attributes,
                  }
                : null
            }
          />

          {/* Description courte */}
          {product.shortDescription && (
            <div
              className="text-white/80 text-sm leading-relaxed prose prose-invert prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: product.shortDescription }}
            />
          )}
        </div>
      </motion.div>

      {/* Description complète */}
      {product.description && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-16 pt-12 border-t border-white/5"
        >
          <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider mb-4">
            Description
          </h2>
          <div
            className="text-white/80 leading-relaxed prose prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </motion.section>
      )}
    </div>
  );
}
