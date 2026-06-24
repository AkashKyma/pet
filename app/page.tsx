import { CategoryPills } from "@/components/CategoryPills";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LatestArticles } from "@/components/LatestArticles";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="page-wrap">
      <Header />

      <div className="site-shell site-shell--spaced">
        <HeroSection />
        <FeaturedPosts />
        <CategoryPills />

        <section className="blog-layout">
          <LatestArticles />
          <Sidebar />
        </section>

        <NewsletterSection />
      </div>

      <Footer />
    </main>
  );
}
