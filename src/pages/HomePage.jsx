import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { PricingSection } from '../components/sections/PricingSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { Footer } from '../components/ui/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ReviewsSection />
        <ContactSection />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
}
