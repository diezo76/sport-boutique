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
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(null);

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
    const main = product.image ? [product.image] : [];
    const gallery = product.galleryImages?.nodes ?? [];
    return [...main, ...gallery];
  }, [product, isVariableProduct, selectedVariation]);

  const displayPrice = isVariableProduct && selectedVariation
    ? selectedVariation.price
    : product.salePrice && product.salePrice !== product.regularPrice
      ? product.salePrice
      : product.regularPrice ?? product.price ?? "";
  const isOnSale = !isVariableProduct && product.salePrice && product.salePrice !== product.regularPrice;
  const isOutOfStock = (isVariableProduct && selectedVariation
    ? selectedVariation.stockStatus
    : product.stockStatus) === "OUT_OF_STOCK";
  const stockQuantity = isVariableProduct && selectedVariation
    ? selectedVariation.stockQuantity
    : (product as { stockQuantity?: number }).stockQuantity;
  const mainImage = product.image?.sourceUrl ?? "";

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 lg:gap-16"
      >
        <div>
          <ProductGallery images={galleryImages} productName={product.name} />
        </div>

        <div className="space-y-6">
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-sans font-bold">
              {displayPrice}
            </span>
            {isOnSale && (
              <span className="text-lg text-v-muted line-through">
                {product.regularPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                isOutOfStock ? "bg-v-sale" : "bg-v-new"
              }`}
            />
            <span className="text-sm text-v-muted">
              {isOutOfStock
                ? "Épuisé"
                : stockQuantity != null
                  ? `${stockQuantity} en stock`
                  : "En stock"}
            </span>
          </div>

          {isVariableProduct && variations.length > 0 && (
            <ProductVariants
              variations={variations}
              onSelect={setSelectedVariation}
              selectedVariation={selectedVariation}
            />
          )}

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

          {product.shortDescription && (
            <div
              className="text-v-muted text-sm leading-relaxed prose prose-invert prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: product.shortDescription }}
            />
          )}
        </div>
      </motion.div>

      {product.description && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-16 pt-12 border-t border-v-border"
        >
          <h2 className="font-sans text-xl font-bold mb-4">
            Description
          </h2>
          <div
            className="text-v-muted leading-relaxed prose prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </motion.section>
      )}
    </div>
  );
}
