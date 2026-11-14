import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
