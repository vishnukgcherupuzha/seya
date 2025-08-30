import { Header } from '../components/layout/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { PricingSection } from '../components/sections/PricingSection';
import { ReviewsSection } from '../components/sections/ReviewsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { Footer } from '../components/ui/Footer';
import SEO from '../components/seo/SEO';

export function HomePage() {
  return (
    <>
      <SEO 
        title="SEYA Driving School - Best Driving Lessons under Farnborough Driving Center"
        description="Top-rated SEYA Driving School under Farnborough Driving Center. Professional manual transmission lessons in Farnborough, Hampshire. High pass rates, flexible scheduling from £40/hour. Best driving school in Farnborough area."
        keywords="SEYA driving school, Farnborough driving center, best driving school Farnborough, Farnborough driving lessons, driving instructor Farnborough, Hampshire driving lessons, manual transmission Farnborough, driving test Farnborough, Aldershot driving lessons, Fleet driving lessons"
        canonical="/"
      />
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
    </>
  );
}
