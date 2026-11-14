'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import styles from './spotlight-card.module.css';
import { cn } from '@/lib/utils';

export interface GlowCardProps {
  children?: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};
const sizeMap = { sm: 'w-48 h-64', md: 'w-64 h-80', lg: 'w-80 h-96' };
type GlowStyle = CSSProperties & Record<`--${string}`, string | number>;

export function GlowCard({ children, className = '', glowColor = 'blue', size = 'md', width, height, customSize = false }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const syncPointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const card = cardRef.current;
        if (!card) return;
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--y', `${event.clientY - bounds.top}px`);
        card.style.setProperty('--xp', (event.clientX / window.innerWidth).toFixed(3));
      });
    };
    const subscribe = () => {
      document.removeEventListener('pointermove', syncPointer);
      if (media.matches) document.addEventListener('pointermove', syncPointer, { passive: true });
    };
    subscribe();
    media.addEventListener('change', subscribe);
    return () => {
      cancelAnimationFrame(frame);
      media.removeEventListener('change', subscribe);
      document.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  const { base, spread } = glowColorMap[glowColor];
  const style: GlowStyle = { '--base': base, '--spread': spread, width, height };

  return (
    <div ref={cardRef} data-glow style={style} className={cn(styles.card, !customSize && sizeMap[size], 'rounded-2xl p-6', className)}>
      <div className={styles.halo} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
