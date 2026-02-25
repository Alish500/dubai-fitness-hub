import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Programs from '@/components/Programs';
import Trainers from '@/components/Trainers';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <div className="light-section">
          <WhyChooseUs />
          <Programs />
          <Trainers />
          <Pricing />
          <Testimonials />
          <CTASection />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
};

export default Index;
