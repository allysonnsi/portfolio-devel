'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  className?: string;
  style?: CSSProperties;
}

export function BlurText({ text, delay = 50, animateBy = 'words', direction = 'top', className = '', style }: BlurTextProps) {
  const segments = animateBy === 'words' ? text.split(' ') : Array.from(text);
  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style} aria-label={text}>
      {segments.map((segment, index) => (
        <span key={index} aria-hidden="true" className="hero-blur-segment" style={{ animationDelay: `${index * delay}ms`, '--blur-offset': direction === 'top' ? '-20px' : '20px' } as CSSProperties}>
          {segment}{animateBy === 'words' && index < segments.length - 1 ? '\u00a0' : ''}
        </span>
      ))}
    </span>
  );
}

const menuItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Aprendizado', href: '#blog' },
  { label: 'Contato', href: '#contato' }
];

export default function PortfolioHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="portfolio-header fixed inset-x-0 top-0 z-50 px-5 py-5 sm:px-10">
        <nav aria-label="Navegação principal" className="mx-auto grid max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center">
          <div className="relative justify-self-start">
            <button ref={buttonRef} type="button" aria-expanded={isMenuOpen} aria-controls="portfolio-menu" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} className="focus-ring flex h-11 w-11 items-center justify-center rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            {isMenuOpen && (
              <div ref={menuRef} id="portfolio-menu" className="portfolio-menu absolute left-0 top-full mt-3 w-60 rounded-2xl border p-4 shadow-xl" onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== buttonRef.current) setIsMenuOpen(false);
              }}>
                {menuItems.map((item) => <a key={item.href} href={item.href} className="focus-ring block rounded-lg px-3 py-2 text-lg font-bold uppercase tracking-tight hover:text-accent-600 dark:hover:text-accent-400" onClick={() => setIsMenuOpen(false)}>{item.label}</a>)}
              </div>
            )}
          </div>
          <a href="#home" className="focus-ring rounded px-2 text-4xl italic" style={{ fontFamily: 'Georgia, serif' }} aria-label="Allyson, início">A.</a>
          <div className="justify-self-end"><ThemeToggle /></div>
        </nav>
      </header>

      <section id="home" aria-labelledby="hero-title" className="portfolio-hero relative flex flex-col items-center justify-center px-5 pb-28 pt-32">
        <div className="relative w-full text-center">
          <h1 id="hero-title" className="hero-name font-mono font-bold uppercase text-accent-600 dark:text-accent-400">
            <BlurText text="ALLYSON" animateBy="letters" delay={75} className="justify-center" />
            <br />
            <BlurText text="SANTOS" animateBy="letters" delay={75} className="justify-center" />
          </h1>
          <div className="hero-portrait absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-2xl">
            <Image src="/foto04.jpeg" alt="Allyson Santos" fill priority sizes="(max-width: 640px) 80px, 140px" className="object-cover object-[48%_38%]" />
          </div>
        </div>
        <div className="mt-14 max-w-xl text-center sm:mt-16">
          <p className="text-base text-slate-600 dark:text-slate-300 sm:text-xl" style={{ fontFamily: 'Antic, sans-serif' }}><BlurText text="Construo soluções digitais para problemas reais." delay={90} className="justify-center" /></p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Desenvolvedor Backend · Estudante IFMA</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <a href="#projetos" className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-accent-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent-500">Ver projetos <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#contato" className="focus-ring rounded text-sm font-medium underline underline-offset-4">Entrar em contato</a>
          </div>
        </div>
        <a href="#sobre" aria-label="Ir para Sobre mim" className="focus-ring absolute bottom-8 flex h-11 w-11 items-center justify-center rounded-full"><ChevronDown size={26} aria-hidden="true" /></a>
      </section>
    </>
  );
}
