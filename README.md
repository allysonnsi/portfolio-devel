## Componentes de interface

O projeto já inclui Tailwind CSS, TypeScript e `lucide-react`. A configuração do shadcn CLI está em `components.json`. O alias `@/components/ui` aponta para `components/ui`, onde ficam os componentes reutilizáveis e onde o CLI deve adicionar novos componentes. Os estilos globais ficam em `app/globals.css`.

`PortfolioHero` apresenta o perfil e a navegação da página. `GlowCard` recebe o conteúdo em `children`, aceita as cores `blue`, `purple`, `green`, `red` e `orange` e os tamanhos `sm`, `md` e `lg`. Use `customSize` para controlar as dimensões com classes, `width` ou `height`. Os dois exemplos estão em `components/ui/demo.tsx`.
