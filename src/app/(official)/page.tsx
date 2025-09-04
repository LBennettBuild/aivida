import { Features } from '../../components/common/landing/features';
import { Hero } from '../../components/common/landing/hero';
import { HowItWorks } from '../../components/common/landing/how-it-works';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}
