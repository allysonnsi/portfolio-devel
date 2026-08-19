import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Reveal } from '@/components/reveal';

const skills = {
  Linguagens: ['Java', 'C', 'Python'],
  'Frameworks/Bibliotecas': ['Spring Boot'],
  'Banco de dados': ['PostgreSQL', 'MySQL'],
  Outros: ['APIs REST', 'JWT/RBAC', 'OpenAI API', 'Excel/automação de dados']
};

const projects = [
  {
    title: 'EmprestaFácil IFMA',
    problem: 'Plataforma web gratuita de empréstimo peer-to-peer entre estudantes do IFMA, conectando alunos que precisam de itens e materiais acadêmicos a colegas dispostos a emprestar.',
    stack: ['Python', 'Django', 'PostgreSQL', 'OpenAI API', 'JavaScript', 'HTML', 'CSS', 'Render'],
    features: ['Cadastro e descoberta de itens disponíveis', 'Fluxo para solicitar e oferecer empréstimos', 'Base preparada para recomendações com IA', 'Hospedagem em nuvem no Render']
  }
];

function Badge({ children }: { children: string }) {
  return <span className="rounded-full bg-accent-500/10 px-3 py-1 text-sm font-medium text-accent-600 dark:text-accent-400">{children}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Navegação principal">
          <a href="#home" className="focus-ring rounded text-lg font-bold tracking-tight">Allyson<span className="text-accent-500">.</span></a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {['Sobre', 'Habilidades', 'Projetos', 'Formação', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} className="focus-ring rounded transition hover:text-accent-600">{item}</a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <section id="home" className="section-shell grid min-h-[84vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-600 dark:text-accent-400">Desenvolvedor Backend | Estudante IFMA</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Desenvolvedor backend junior, buscando a primeira experiência na área.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Estudante de Sistemas de Informação no Instituto Federal do Maranhão, com foco em desenvolvimento backend, sistemas de gestão que resolvem problemas reais.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projetos" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-accent-500">Ver projetos <ArrowRight size={18} /></a>
            <a href="#contato" className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:-translate-y-1 hover:border-accent-500 dark:border-slate-700">Entrar em contato</a>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card relative p-4">
            <Image src="/foto04.jpeg" alt="Notebook com código representando desenvolvimento de software" width={900} height={700} priority className="rounded-2xl object-cover" />
          </div>
        </Reveal>
      </section>

      <section id="sobre" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Sobre mim</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Sou Allyson, estudante de Sistemas de Informação no IFMA. Minha trajetória acadêmica e prática é orientada por desenvolvimento backend, com foco na linguagem Java, APIs, bancos de dados e sistemas de gestão com autenticação, regras de negócio e automações que melhoram a rotina de pessoas e instituições.</p></Reveal>
      </section>

      <section id="habilidades" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Habilidades técnicas</h2></Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([category, values], index) => <Reveal key={category} delay={index * 0.05}><article className="card h-full p-6"><h3 className="mb-4 text-xl font-bold">{category}</h3><div className="flex flex-wrap gap-2">{values.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></article></Reveal>)}
        </div>
      </section>

      <section id="projetos" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Projetos em destaque</h2></Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => <Reveal key={project.title} delay={index * 0.08}><article className="card flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent-500/70"><h3 className="text-2xl font-bold">{project.title}</h3><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300"><strong>Problema resolvido:</strong> {project.problem}</p><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div><ul className="mt-5 space-y-2 text-slate-700 dark:text-slate-200">{project.features.map((feature) => <li key={feature}>• {feature}</li>)}</ul><div className="mt-auto pt-6"><a href="#" className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-semibold transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700">Repositório/demo <ArrowRight size={16} /></a></div></article></Reveal>)}
        </div>
      </section>

      <section id="formacao" className="section-shell"><Reveal><div className="card p-8"><h2 className="text-3xl font-bold sm:text-4xl">Formação</h2><p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Sistemas de Informação — Instituto Federal do Maranhão (IFMA).</p><p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Técnico em Informática — Instituto Estadual do Maranhão (IEMA).</p></div></Reveal></section>

      <section id="contato" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Contato</h2></Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal><form action="mailto:allyson@example.com" className="card space-y-4 p-6"><input aria-label="Nome" placeholder="Seu nome" className="focus-ring w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700" /><input aria-label="E-mail" type="email" placeholder="seuemail@exemplo.com" className="focus-ring w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700" /><textarea aria-label="Mensagem" placeholder="Como posso ajudar?" rows={5} className="focus-ring w-full rounded-2xl border border-slate-300 bg-transparent px-4 py-3 dark:border-slate-700" /><button className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 font-semibold text-white transition hover:bg-accent-500"><Send size={18} /> Enviar mensagem</button></form></Reveal>
          <Reveal delay={0.08}><div className="card space-y-4 p-6"><a className="focus-ring flex items-center gap-3 rounded-xl p-2 hover:text-accent-600" href="mailto:allyson@example.com"><Mail /> allyson@example.com</a><a className="focus-ring flex items-center gap-3 rounded-xl p-2 hover:text-accent-600" href="github.com/allysonnsi"><Github /> GitHub</a><a className="focus-ring flex items-center gap-3 rounded-xl p-2 hover:text-accent-600" href="linkedin.com/in/santosallysonn"><Linkedin /> LinkedIn</a><p className="flex items-center gap-3 p-2 text-slate-600 dark:text-slate-300"><MapPin /> Maranhão, Brasil</p></div></Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">© {new Date().getFullYear()} Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.</footer>
    </main>
  );
}
