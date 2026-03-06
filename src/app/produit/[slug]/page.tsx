import { Metadata } from "next";
import { notFound } from "next/navigation";
import { apolloClient } from "@/lib/apollo-client";
import { GET_PRODUCT_BY_SLUG, GET_SIMILAR_PRODUCTS } from "@/queries/products";
import TopBanner from "@/components/home/TopBanner";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ProductPageClient from "@/components/produit/ProductPageClient";
import ProductCard from "@/components/shop/ProductCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface ProductResult {
  id?: string;
  databaseId?: number;
  name?: string;
  shortDescription?: string;
  description?: string;
  productCategories?: { nodes: { slug: string }[] };
  [key: string]: unknown;
}

async function getProduct(slug: string): Promise<ProductResult | null> {
  const { data } = await apolloClient.query<{ product: ProductResult | null }>({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug },
  });
  return data?.product ?? null;
}

async function getSimilarProducts(categorySlugs: string[], excludeId: number, limit = 4) {
  if (categorySlugs.length === 0) return [];
  const { data } = await apolloClient.query<{ products?: { nodes?: unknown[] } }>({
    query: GET_SIMILAR_PRODUCTS,
    variables: { categoryIn: categorySlugs, exclude: [excludeId], first: limit },
  });
  return data?.products?.nodes ?? [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Produit introuvable" };

  const name = product.name ?? "Produit";
  const shortDesc = product.shortDescription ?? product.description ?? "";
  const desc = shortDesc.replace(/<[^>]*>/g, "").slice(0, 160);

  return {
    title: `${name} | FollowMee Officiel`,
    description: desc || `Découvrez ${name} sur FollowMee`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  const productWithId = {
    ...product,
    id: product.id ?? String(product.databaseId ?? ""),
  };
  if (!productWithId.id) notFound();

  const categories = product.productCategories?.nodes ?? [];
  const categorySlugs = categories.map((c: { slug: string }) => c.slug).filter(Boolean);
  const databaseId = product.databaseId ?? Number(product.id?.replace(/\D/g, "")) ?? 0;

  const similarProducts = await getSimilarProducts(categorySlugs, Number(databaseId), 4);

  return (
    <main className="min-h-screen bg-v-white">
      <TopBanner />
      <Header />
      <div className="pt-24 sm:pt-28 lg:pt-32">
        <ProductPageClient product={productWithId as Parameters<typeof ProductPageClient>[0]["product"]} />

        {similarProducts.length > 0 && (
          <section className="border-t border-v-gray-100 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide mb-6 sm:mb-10">
                Similar Products
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {(similarProducts as Record<string, unknown>[]).map((p) => (
                  <ProductCard
                    key={p.id as string}
                    product={{
                      slug: p.slug as string,
                      name: p.name as string,
                      price: (p as { price?: string }).price ?? "",
                      regularPrice: (p as { regularPrice?: string }).regularPrice ?? "",
                      salePrice: (p as { salePrice?: string }).salePrice,
                      image: (p as { image?: { sourceUrl: string; altText: string } }).image ?? null,
                      stockStatus: (p as { stockStatus?: string }).stockStatus ?? "IN_STOCK",
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
