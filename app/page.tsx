import Image from 'next/image';
import PortfolioHero from '@/components/ui/portfolio-hero';
import { GlowCard } from '@/components/ui/spotlight-card';
import { ArrowRight, Github, Linkedin, MapPin, Code2, Database, Workflow } from 'lucide-react';
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
      <PortfolioHero />

      <section id="sobre" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Sobre mim</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Sou Allyson, estudante de Sistemas de Informação no IFMA. Minha trajetória acadêmica e prática é orientada por desenvolvimento backend, com foco na linguagem Java, APIs, bancos de dados e sistemas de gestão com autenticação, regras de negócio e automações que melhoram a rotina de pessoas e instituições.</p></Reveal>
      </section>

      <section id="servicos" className="section-shell">
        <Reveal><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-accent-600 dark:text-accent-400">Como posso contribuir</p><h2 className="text-3xl font-bold sm:text-4xl">Desenvolvimento com propósito</h2></Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[{icon:Code2,title:'Backend e APIs',text:'Aplicações e APIs REST com regras de negócio claras e código organizado.'},{icon:Database,title:'Dados e persistência',text:'Modelagem e integração com bancos relacionais como PostgreSQL e MySQL.'},{icon:Workflow,title:'Automação',text:'Soluções para simplificar processos e reduzir tarefas repetitivas.'}].map(({icon:Icon,title,text})=><GlowCard key={title} customSize glowColor="green" className="h-full"><article><Icon className="mb-5 text-accent-600 dark:text-accent-400"/><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{text}</p></article></GlowCard>)}
        </div>
      </section>

      <section id="habilidades" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Habilidades técnicas</h2></Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(skills).map(([category, values], index) => <Reveal key={category} delay={index * 0.05}><article className="card h-full p-6"><h3 className="mb-4 text-xl font-bold">{category}</h3><div className="flex flex-wrap gap-2">{values.map((skill) => <Badge key={skill}>{skill}</Badge>)}</div></article></Reveal>)}
        </div>
      </section>

      <section id="projetos" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Projetos em destaque</h2></Reveal>
        <div className="mt-8 grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <GlowCard customSize glowColor="green" className="p-3 sm:p-4">
                <article className="grid items-stretch gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-48 overflow-hidden rounded-xl">
                    <Image src="/desenvolvimento.jpg" alt="Notebook aberto em um editor de código" fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-4 max-w-prose leading-7 text-slate-600 dark:text-slate-300">{project.problem}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                    </div>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <a href="https://github.com/allysonnsi" target="_blank" rel="noreferrer" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-slate-500 px-4 py-2 font-semibold hover:text-accent-600 dark:hover:text-accent-400">
                      GitHub de Allyson <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="formacao" className="section-shell"><Reveal><div className="card p-8"><h2 className="text-3xl font-bold sm:text-4xl">Formação</h2><p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Sistemas de Informação — Instituto Federal do Maranhão (IFMA).</p><p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Técnico em Informática — Instituto Estadual do Maranhão (IEMA).</p></div></Reveal></section>

      <section id="depoimentos" className="section-shell"><Reveal><div className="card border-accent-400/20 bg-gradient-to-br from-accent-400/10 to-transparent p-8"><p className="text-sm font-bold uppercase tracking-[.2em] text-accent-600 dark:text-accent-400">Em evolução</p><h2 className="mt-3 text-3xl font-bold">Cada projeto é uma oportunidade de aprender e entregar melhor.</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">Estou construindo minha trajetória profissional por meio de projetos práticos, colaboração e aprendizado contínuo.</p></div></Reveal></section>

      <section id="blog" className="section-shell"><Reveal><h2 className="text-3xl font-bold">Aprendizado em prática</h2><p className="mt-3 text-slate-600 dark:text-slate-400">Acompanhe meus projetos e estudos no <a className="text-accent-600 dark:text-accent-400 underline underline-offset-4" href="https://github.com/allysonnsi" target="_blank" rel="noreferrer">GitHub</a>.</p></Reveal></section>

      <section id="contato" className="section-shell">
        <Reveal><h2 className="text-3xl font-bold sm:text-4xl">Contato</h2></Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal><div className="card flex flex-col items-start gap-5 p-8"><p className="text-lg leading-8 text-slate-600 dark:text-slate-300">Tem uma ideia ou oportunidade? Vamos conversar sobre como posso contribuir.</p><a href="https://github.com/allysonnsi" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-accent-400"><Github size={18}/> Conheça meu GitHub</a></div></Reveal>
          <Reveal delay={0.08}><div className="card space-y-4 p-6"><a className="focus-ring flex items-center gap-3 rounded-xl p-2 hover:text-accent-600 dark:text-accent-400" href="https://github.com/allysonnsi" target="_blank" rel="noreferrer"><Github /> github.com/allysonnsi</a><a className="focus-ring flex items-center gap-3 rounded-xl p-2 hover:text-accent-600 dark:text-accent-400" href="https://linkedin.com/in/santosallysonn" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><p className="flex items-center gap-3 p-2 text-slate-600 dark:text-slate-400"><MapPin /> Maranhão, Brasil</p></div></Reveal>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">© {new Date().getFullYear()} Portfólio profissional desenvolvido com Next.js, TypeScript e Tailwind CSS.</footer>
    </main>
  );
}


