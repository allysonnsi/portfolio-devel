import PortfolioHero from '@/components/ui/portfolio-hero';
import { GlowCard } from '@/components/ui/spotlight-card';

export function Default() {
  return <div className="flex min-h-screen flex-wrap items-center justify-center gap-10 p-6"><GlowCard /><GlowCard glowColor="purple" /><GlowCard glowColor="green" /></div>;
}

export default function Demo() {
  return <PortfolioHero />;
}
