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

function StarRating() {
  return (
    <div className="flex gap-0.5 sm:gap-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(null);
  const [quantity, setQuantity] = useState(1);

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
  const mainImage = product.image?.sourceUrl ?? "";

  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 py-6 sm:py-10 lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-20"
      >
        <div>
          <ProductGallery images={galleryImages} productName={product.name} />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h1 className="font-accent italic text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {product.name}
          </h1>

          <StarRating />

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl font-bold">{displayPrice}</span>
            {isOnSale && (
              <span className="text-v-gray-500 text-base sm:text-lg line-through">{product.regularPrice}</span>
            )}
          </div>

          {product.shortDescription && (
            <div
              className="text-v-gray-700 text-xs sm:text-sm leading-relaxed prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: product.shortDescription }}
            />
          )}

          {isVariableProduct && variations.length > 0 && (
            <ProductVariants
              variations={variations}
              onSelect={setSelectedVariation}
              selectedVariation={selectedVariation}
            />
          )}

          <div>
            <p className="text-xs sm:text-sm font-medium mb-2">Quantity</p>
            <div className="inline-flex items-center border border-v-gray-300 rounded-lg">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-v-gray-700 hover:text-v-black"
              >
                -
              </button>
              <span className="w-10 sm:w-12 text-center text-sm font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-v-gray-700 hover:text-v-black"
              >
                +
              </button>
            </div>
          </div>

          <AddToCartButton
            productId={product.id}
            productName={product.name}
            price={parsePrice(product.price ?? product.regularPrice ?? "0")}
            image={mainImage}
            quantity={quantity}
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

          <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
            {["G", "f", "𝕏", "ig"].map((icon) => (
              <button key={icon} type="button" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-v-gray-300 flex items-center justify-center text-xs sm:text-sm text-v-gray-700 hover:border-v-black hover:text-v-black transition-colors">
                {icon}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {product.description && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-v-gray-100"
        >
          <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-wide mb-3 sm:mb-4">
            Description
          </h2>
          <div
            className="text-v-gray-700 text-sm leading-relaxed prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </motion.section>
      )}
    </div>
  );
}
