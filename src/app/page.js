import { HeroSection } from '../components/HeroSection';
import { LogoStrip } from '../components/LogoStrip';
import { BentoAccordion } from '../components/BentoAccordion';
import { PricingSection } from '../components/PricingSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoStrip />
      <BentoAccordion />
      <PricingSection />
      <Footer />
    </main>
  );
}