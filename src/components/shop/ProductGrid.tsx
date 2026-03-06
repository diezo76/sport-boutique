"use client";

import ProductCard from "./ProductCard";

interface ProductNode {
  id: string;
  slug: string;
  name: string;
  price?: string;
  regularPrice?: string;
  salePrice?: string;
  stockStatus?: string;
  image?: { sourceUrl: string; altText: string } | null;
}

interface ProductGridProps {
  products: ProductNode[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-12 sm:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <h1 className="font-display text-5xl sm:text-6xl uppercase tracking-wide mb-10">
          Notre Collection
        </h1>
        {products.length === 0 ? (
          <p className="text-v-gray-500 text-sm">Aucun produit trouvé.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={{
                  slug: p.slug,
                  name: p.name,
                  price: p.price ?? "",
                  regularPrice: p.regularPrice ?? "",
                  salePrice: p.salePrice ?? undefined,
                  image: p.image ?? null,
                  stockStatus: p.stockStatus ?? "IN_STOCK",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
