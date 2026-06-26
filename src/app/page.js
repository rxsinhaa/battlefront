import { HeroSection } from '../components/HeroSection';
import { BentoAccordion } from '../components/BentoAccordion';
import { PricingSection } from '../components/PricingSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoAccordion />
      <PricingSection />
    </main>
  );
}