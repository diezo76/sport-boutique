import { Metadata } from "next";
import { apolloClient } from "@/lib/apollo-client";
import { GET_PRODUCTS } from "@/queries/products";
import TopBanner from "@/components/home/TopBanner";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ProductGrid from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Boutique | FollowMee Officiel",
  description: "Découvrez notre collection streetwear sport.",
};

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

async function getProducts(category?: string): Promise<ProductNode[]> {
  const { data } = await apolloClient.query<{
    products?: { nodes?: ProductNode[] };
  }>({
    query: GET_PRODUCTS,
    variables: { first: 24, category: category || undefined },
  });
  return data?.products?.nodes ?? [];
}

export default async function BoutiquePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const products = await getProducts(category);

  return (
    <main className="min-h-screen bg-v-white">
      <TopBanner />
      <Header />
      <div className="pt-28 sm:pt-32">
        <ProductGrid products={products} />
      </div>
      <Footer />
    </main>
  );
}
