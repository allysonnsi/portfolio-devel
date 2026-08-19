import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Allyson | Desenvolvedor de Software',
  description: 'Portfólio profissional de Allyson, estudante de Sistemas de Informação no IFMA e desenvolvedor de software.',
  metadataBase: new URL('https://portfolio-allyson.vercel.app'),
  openGraph: {
    title: 'Allyson | Desenvolvedor de Software',
    description: 'Projetos, habilidades e contato profissional de Allyson.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
