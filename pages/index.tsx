import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Phone, Mail, MapPin, MessageSquare, ArrowRight, Gavel, Landmark, FileText, Users, HeartPulse, Building2, Star, Quote, CheckCircle2, Clock, FileCheck, Handshake } from 'lucide-react';
import Button from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';

const BRAND = {
  nome: 'Victor Vinicius Barbosa de Oliveira',
  oab: 'OAB/SP 487.862',
  escritorio: 'Victor Vinicius Advocacia',
  cidade: 'Arujá • São Paulo',
  whatsapp: '5511945164392',
  email: 'contato@victorvinicius.adv.br',
  endereco: 'Atendimento presencial sob agendamento',
  slogan: 'Estratégia, precisão e humanidade.',
  cores: {
    prim: '#0B1C2E',
    gold: '#C8A94B',
    fundo: '#0E0F12',
  },
};

const NAV = [
  { id: 'areas', label: 'Áreas' },
  { id: 'divorcio', label: 'Divórcio & Família' },
  { id: 'saude', label: 'Planos de Saúde' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'historia', label: 'Minha história' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'provas', label: 'Depoimentos' },
  { id: 'processo', label: 'Como atuamos' },
  { id: 'conteudo', label: 'Conteúdo' },
  { id: 'contato', label: 'Contato' },
];

const AREAS = [
  { icon: <Users className='w-6 h-6'/>, title: 'Direito de Família', desc: 'Divórcio, guarda, alimentos e pactos patrimoniais com foco humano e estratégico.' },
  { icon: <Gavel className='w-6 h-6'/>, title: 'Cível e Consumidor', desc: 'Indenizações, contratos, cobranças e defesa do consumidor com atuação incisiva.' },
  { icon: <HeartPulse className='w-6 h-6'/>, title: 'Saúde', desc: 'Tutelas de urgência, home care e medicamentos de alto custo.' },
  { icon: <FileText className='w-6 h-6'/>, title: 'Contratos', desc: 'Redação, revisão e gestão de riscos.' },
  { icon: <Landmark className='w-6 h-6'/>, title: 'Administrativo', desc: 'Concursos, servidores, licitações.' },
  { icon: <Building2 className='w-6 h-6'/>, title: 'Imobiliário', desc: 'Usucapião, posse e locações.' },
];

const DIFERENCIAIS = [
  { icon: <ShieldCheck className='w-5 h-5'/>, title: 'Rigor técnico', text: 'Peças claras, jurisprudência selecionada e métrica de resultados.' },
  { icon: <Scale className='w-5 h-5'/>, title: 'Postura ética', text: 'Transparência, lealdade processual e respeito ao cliente e ao Judiciário.' },
  { icon: <MessageSquare className='w-5 h-5'/>, title: 'Comunicação ágil', text: 'Acompanhamento próximo com prazos realistas e checkpoints.' },
  { icon: <Star className='w-5 h-5'/>, title: 'Estratégia', text: 'Planejamento de caso, mapeamento de riscos e tese calibrada.' },
];

const POSTS = [
  { title: 'Guia prático do divórcio: o essencial antes de ajuizar', tag: 'Família', time: '6 min' },
  { title: 'Quando cabe indenização por negativa de plano de saúde', tag: 'Saúde', time: '5 min' },
  { title: 'Cláusulas que blindam seu contrato de serviços', tag: 'Contratos', time: '4 min' },
];

export default function Home() {
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: BRAND.escritorio,
      areaServed: 'Brazil',
      address: BRAND.cidade,
      email: BRAND.email,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      sameAs: [],
      legalName: BRAND.nome,
      founder: BRAND.nome,
      priceRange: '$$',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(ld);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => setSending(false), 1200);
  };

  return (
    <div className="min-h-screen" style={{ background: BRAND.cores.fundo, color: 'white' }}>
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl" style={{ background: BRAND.cores.prim }} />
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">{BRAND.escritorio}</p>
              <p className="text-xs opacity-70">{BRAND.nome} • {BRAND.oab}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV.map(n => <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm hover:opacity-80">{n.label}</button>)}
            <Button onClick={() => scrollTo('contato')} className="rounded-2xl px-5">Agendar consulta</Button>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/20" />
          <div className="h-[72vh] w-full" style={{
            backgroundImage: `url('/hero.jpg')`,
            backgroundSize: 'cover', backgroundPosition: 'center'
          }} />
        </div>
        <div className="mx-auto max-w-7xl px-4 h-[72vh] flex flex-col justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight">
            {BRAND.slogan}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .1 }}
            className="mt-4 max-w-2xl text-white/85 text-lg">
            Cível e Família com foco em resultado: peças cirúrgicas, estratégia processual e atendimento que respeita seu tempo.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}
            className="mt-8 flex gap-3">
            <Button onClick={() => scrollTo('divorcio')} className="rounded-2xl px-6">Divórcio & Família</Button>
            <Button onClick={() => scrollTo('saude')} variant="outline" className="rounded-2xl px-6">Planos de Saúde</Button>
          </motion.div>
          <div className="mt-6 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 opacity-80"><CheckCircle2 className="w-4 h-4"/> Atendimento on-line e presencial</div>
            <div className="flex items-center gap-2 opacity-80"><Clock className="w-4 h-4"/> Respostas em até 24h úteis</div>
            <div className="flex items-center gap-2 opacity-80"><FileCheck className="w-4 h-4"/> Documentação guiada</div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Áreas de atuação</h2>
            <p className="text-sm opacity-70">{BRAND.cidade}</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((a, i) => (
              <div key={a.title} className="rounded-2xl border border-white/10 bg-black/50 p-4 hover:shadow-lg hover:shadow-[rgba(200,169,75,0.2)] transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: BRAND.cores.prim }}>
                    {a.icon}
                  </div>
                  <h3 className="text-lg">{a.title}</h3>
                </div>
                <p className="pt-3 text-sm opacity-85">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Um escritório orientado a resultados</h2>
              <p className="mt-4 opacity-85 max-w-prose">Do primeiro contato à sentença, cada decisão é fundamentada em provas e jurisprudência sólida. Comunicação direta, peças elegantes e argumentos que convencem.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {DIFERENCIAIS.map((d) => (
                  <div key={d.title} className="p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
                    <div className="flex items-center gap-2 font-medium">{d.icon} {d.title}</div>
                    <p className="mt-2 text-sm opacity-80">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10">
                <img alt="Biblioteca jurídica sóbria" className="h-full w-full object-cover"
                     src="/library.jpg" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--prim)] text-white rounded-2xl shadow p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full" style={{ background: 'var(--gold)' }} />
                  <div className="text-sm">
                    <p className="font-medium">{BRAND.nome}</p>
                    <p className="opacity-80">{BRAND.oab}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm max-w-xs opacity-90">Peças objetivas e persuasivas — sem jargões desnecessários.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="divorcio" className="py-24 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Divórcio & Família — proteção, estratégia e serenidade</h2>
              <p className="mt-4 opacity-85">Separações exigem firmeza técnica e tato humano. Atuamos para reduzir conflitos, proteger patrimônio e preservar a relação com os filhos. Você conduz a decisão; nós conduzimos o processo.</p>
              <ul className="mt-6 space-y-3 opacity-85 list-disc pl-5">
                <li>Divórcio consensual e litigioso com acordos claros e executáveis.</li>
                <li>Guarda, visitas e alimentos sob o eixo do melhor interesse do menor.</li>
                <li>Planejamento patrimonial e partilha com blindagem de riscos.</li>
              </ul>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Card className="rounded-2xl border-white/10 bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-base">Roteiro de Audiência</CardTitle>
                  </CardHeader>
                  <CardContent className="opacity-85 text-sm">Preparação de narrativa, provas-chave e comportamento estratégico para maximizar chances de acordo.</CardContent>
                </Card>
                <Card className="rounded-2xl border-white/10 bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-base">Acordos que funcionam</CardTitle>
                  </CardHeader>
                  <CardContent className="opacity-85 text-sm">Clareza em guarda, convivência, férias e atualização de valores — evitando litígios futuros.</CardContent>
                </Card>
              </div>
              <div className="mt-8 flex gap-3">
                <Button onClick={() => scrollTo('contato')} className="rounded-2xl px-6">Agendar conversa</Button>
                <Button variant="outline" className="rounded-2xl px-6">Guia do Divórcio (PDF)</Button>
              </div>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-lg">
                <img src="/mediation.jpg" alt="Mesa de mediação" className="w-full h-full object-cover" />
              </div>
              <div className="mt-6 bg-black/50 rounded-2xl p-6 ring-1 ring-white/10">
                <p className="opacity-85 text-sm">História de cliente (anônima): acordo de guarda compartilhada com calendário claro e pensão equilibrada — conflito caiu drasticamente em 30 dias.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {['Acordos equilibrados', 'Comunicação respeitosa', 'Prevenção de litígios'].map((t,i)=> (
              <div key={i} className="flex items-center gap-3 text-sm opacity-90">
                <Handshake className="w-5 h-5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="saude" className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Planos de Saúde — quando a vida não pode esperar</h2>
              <p className="mt-4 opacity-85">Negativas abusivas exigem resposta rápida e técnica. Atuamos com tutelas de urgência para home care, cirurgias, internações e medicamentos de alto custo.</p>
              <ul className="mt-6 space-y-3 opacity-85 list-disc pl-5">
                <li>Petição inicial cirúrgica, com laudos e probabilidade do direito.</li>
                <li>Pedidos claros: multa diária, prazos exequíveis e cumprimento imediato.</li>
                <li>Monitoramento da execução e responsabilização por descumprimento.</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <Button onClick={() => scrollTo('contato')} className="rounded-2xl px-6">Falar agora</Button>
                <Button variant="outline" className="rounded-2xl px-6">Checklist da Tutela (PDF)</Button>
              </div>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-lg">
                <img src="/health.jpg" alt="Profissional de saúde" className="w-full h-full object-cover" />
              </div>
              <div className="mt-6 bg-black/50 rounded-2xl p-6 ring-1 ring-white/10">
                <p className="opacity-85 text-sm">Caso recente (anônimo): liminar em 24h para fornecimento de home care 24/7 com equipe multidisciplinar e insumos completos.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { q: 'Preciso tentar administrativamente antes?', a: 'É recomendável, mas urgência e risco justificam tutela mesmo sem resposta em 48–72h.' },
              { q: 'Dá para pedir dano moral?', a: 'Sim, quando a negativa é abusiva e causa agravamento do quadro ou sofrimento relevante.' },
              { q: 'Quanto tempo leva?', a: 'Liminares bem instruídas podem ser apreciadas entre 24–72h, variando por comarca.' },
            ].map((f,i)=> (
              <div key={i} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <h3 className="text-base">{f.q}</h3>
                <p className="opacity-85 text-sm mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="historia" className="py-24 border-y border-white/10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Minha história</h2>
          <div className="mt-6 space-y-5 text-white/90 leading-relaxed">
            <p>Quando criança, minha família enfrentou dificuldades financeiras duras. Meu pai nos deixou quando eu tinha 11 anos e, para ajudar em casa, comecei a trabalhar muito cedo. Nunca passamos fome: trabalhávamos para que nada faltasse — como tantas famílias brasileiras.</p>
            <p>Mesmo na adversidade, mantive um horizonte: estudar. Eu sabia que o estudo era o melhor esforço para mudar a minha vida e a das pessoas ao meu redor.</p>
            <p>Com 13 anos, um casal — um empresário e uma advogada — chegou à nossa casa com doações. Lembro da alegria simples de poder comer carne e frango naquela semana. Mas o que ficou não foi só o alimento: foi o exemplo de gente que dedica a vida ao próximo. Aquilo me deu propósito.</p>
            <p>Ainda menino, fiz um voto íntimo: queria impactar vidas. Na profissão daquela mulher encontrei um caminho. Descobri que a advocacia me permitiria lutar por justiça, igualdade e liberdade — para todos.</p>
            <p>Com o tempo e muito trabalho, a vida foi melhorando. Conquistei uma bolsa e cursei Direito. Estagiei quatro anos em um escritório, amadurecendo técnica e responsabilidade.</p>
            <p>Em 2022, fui aprovado no 34º Exame da OAB, ainda no 9º semestre. Ontem foi a minha formatura; hoje, a minha primeira audiência. O propósito que me trouxe até aqui — transformar a vida de outras pessoas por meio da advocacia — continua sendo o que me levanta todos os dias.</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Sobre o advogado</h2>
              <p className="mt-4 opacity-85 leading-relaxed">{BRAND.nome}, {BRAND.oab}. Atuação com ênfase em Direito de Família e Cível/Consumidor, com escrita técnica e estratégica — clareza, estética argumentativa e provas robustas. Atendimento personalizado em {BRAND.cidade} e on-line para todo o Brasil.</p>
              <ul className="mt-6 space-y-2 text-sm opacity-85 list-disc pl-5">
                <li>Redação de peças com linguagem precisa e persuasiva.</li>
                <li>Mapeamento de riscos, cenários e custeio processual.</li>
                <li>Uso criterioso de tutelas de urgência e medidas executivas.</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-black/40">
              <h3 className="font-semibold">Atendimento</h3>
              <div className="mt-4 space-y-3 text-sm opacity-90">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {BRAND.endereco}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> {BRAND.email}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4"/> WhatsApp comercial</p>
              </div>
              <Button onClick={() => scrollTo('contato')} className="mt-5 w-full rounded-2xl">Agendar consulta</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="provas" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">O que dizem os clientes</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { nome: 'M. S.', texto: 'Explicou o processo com clareza e trouxe resultado rápido na tutela.' },
              { nome: 'R. A.', texto: 'Peças muito bem escritas. A audiência foi excelente.' },
              { nome: 'E. C.', texto: 'Transparência do começo ao fim. Recomendo.' },
            ].map((d, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <Quote className="w-6 h-6 opacity-30"/>
                <p className="mt-3 text-sm opacity-85">“{d.texto}”</p>
                <p className="mt-4 text-sm font-medium">{d.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="py-20 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Como atuamos</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{icon: <MessageSquare className='w-5 h-5'/>, t: 'Diagnóstico inicial', s: 'Você conta o caso, nós mapeamos riscos, custos e caminhos.'}, {icon: <FileText className='w-5 h-5'/>, t: 'Plano de ação', s: 'Estratégia, provas-chave e cronograma processual.'}, {icon: <Gavel className='w-5 h-5'/>, t: 'Execução', s: 'Peças cirúrgicas, acompanhamento e ajustes táticos.'}].map((k, i)=> (
              <div key={i} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: BRAND.cores.prim }}>{k.icon}</div>
                  <h3 className="text-lg">{k.t}</h3>
                </div>
                <p className="pt-0 text-sm opacity-85">{k.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudo" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Conteúdo</h2>
            <Button variant="outline" className="rounded-2xl">Ver todos os artigos</Button>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-black/40 p-4 hover:shadow-lg hover:shadow-[rgba(200,169,75,0.2)] transition-shadow">
                <h3 className="text-lg">{p.title}</h3>
                <div className="pt-2 text-sm opacity-85 flex items-center justify-between">
                  <span className="px-2 py-1 rounded-full bg-black text-xs border border-white/10">{p.tag}</span>
                  <span>{p.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Fale com o escritório</h2>
            <p className="mt-3 opacity-85">Envie uma mensagem. Respondemos com agilidade e objetividade.</p>
          </div>
          <form onSubmit={submitForm} className="mt-10 grid gap-4 bg-black/40 rounded-3xl p-6 ring-1 ring-white/10">
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Seu nome"/>
              <Input required type="email" placeholder="Seu e-mail"/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Telefone/WhatsApp"/>
              <Input placeholder="Assunto"/>
            </div>
            <Textarea required placeholder="Escreva resumidamente seu caso" className="min-h-32"/>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-xs opacity-60">Ao enviar, você concorda com nossa política de privacidade.</p>
              <Button type="submit" disabled={sending} className="rounded-2xl px-6">
                {sending ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Pronto para uma orientação objetiva?</h3>
          <p className="mt-3 opacity-85">Explique seu caso em poucas linhas. Indicaremos o melhor caminho com precisão.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button onClick={() => scrollTo('contato')} className="rounded-2xl px-6">Falar com o advogado</Button>
            <Button variant="outline" className="rounded-2xl px-6">Ver áreas</Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <p className="font-semibold">{BRAND.escritorio}</p>
            <p className="text-sm opacity-70 mt-1">{BRAND.nome} • {BRAND.oab}</p>
            <p className="text-sm opacity-70 mt-3">{BRAND.cidade}</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">Contato</p>
            <div className="mt-2 space-y-1 opacity-85">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> {BRAND.email}</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {BRAND.endereco}</p>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium">Institucional</p>
            <ul className="mt-2 space-y-1 opacity-85">
              <li><button onClick={() => scrollTo('sobre')} className="hover:opacity-80">Sobre</button></li>
              <li><button onClick={() => scrollTo('areas')} className="hover:opacity-80">Áreas</button></li>
              <li><button onClick={() => scrollTo('conteudo')} className="hover:opacity-80">Conteúdo</button></li>
              <li><button onClick={() => scrollTo('contato')} className="hover:opacity-80">Contato</button></li>
            </ul>
          </div>
        </div>
        <div className="py-4 border-t border-white/10 text-center text-xs opacity-70">© {new Date().getFullYear()} {BRAND.escritorio}. Todos os direitos reservados.</div>
      </footer>

      {BRAND.whatsapp && (
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=Olá,%20gostaria%20de%20falar%20com%20o%20escritório.`}
          target="_blank"
          className="fixed bottom-6 right-6 rounded-full shadow-lg ring-1 ring-black/5 px-4 py-3 flex items-center gap-2 text-white"
          style={{ background: 'var(--prim)' }}
        >
          <Phone className="w-4 h-4"/> WhatsApp
        </a>
      )}
    </div>
  );
}
