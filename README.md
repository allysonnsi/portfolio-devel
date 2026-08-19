# Portfólio Profissional — Allyson

Site de portfólio pessoal desenvolvido com Next.js App Router, TypeScript, Tailwind CSS e Framer Motion para apresentar a trajetória, habilidades, projetos e contato profissional de Allyson, estudante de Sistemas de Informação no IFMA.

## Tecnologias

- Next.js 14+ com App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next/image
- Componentes acessíveis com foco visível, contraste adequado e labels ARIA
- Dark mode/light mode persistente via `localStorage`

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

A forma recomendada é conectar o repositório GitHub à Vercel:

1. Faça push do repositório para o GitHub.
2. No dashboard da Vercel, clique em **Add New > Project**.
3. Importe o repositório.
4. Use o preset automático de Next.js.
5. Configure variáveis de ambiente no painel da Vercel caso adicione integrações futuras.
6. Clique em **Deploy**. Cada novo `git push` na branch conectada gera um novo deploy.

Também é possível usar a CLI:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Para automação/CI, gere um Access Token no dashboard e use:

```bash
vercel --token=<TOKEN> --prod
```

> Nunca coloque tokens, usuário/senha ou hashes sensíveis diretamente no código-fonte. Use `.env.local` localmente e Environment Variables na Vercel.

## Conteúdo

Os cards de projetos usam informações reais fornecidas para o EmprestaFácil IFMA e para o Sistema de Gerenciamento de Filas e Atendimento. Links públicos ainda não informados permanecem como `#` para substituição futura.
