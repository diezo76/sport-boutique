import TopBanner from "@/components/home/TopBanner";
import Header from "@/components/home/Header";
import HeroSlider from "@/components/home/HeroSlider";
import NewDrops from "@/components/home/NewDrops";
import BannerSection from "@/components/home/BannerSection";
import StorySection from "@/components/home/StorySection";
import FeaturedDrops from "@/components/home/FeaturedDrops";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import JoinCTA from "@/components/home/JoinCTA";
import WhyShopWithUs from "@/components/home/WhyShopWithUs";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-v-bg">
      <TopBanner />
      <Header />
      <HeroSlider />
      <NewDrops />
      <BannerSection />
      <StorySection />
      <FeaturedDrops />
      <ProductSpotlight />
      <JoinCTA />
      <WhyShopWithUs />
      <Newsletter />
      <Footer />
    </main>
  );
}
