"use client";

import { useState } from "react";

type TabId = "hoje" | "calendario" | "historico" | "perfil";

const tabs: { id: TabId; label: string; sub: string }[] = [
  { id: "hoje", label: "Hoje", sub: "Sugestão agora" },
  { id: "calendario", label: "Calendário", sub: "Rotina do casal" },
  { id: "historico", label: "Histórico", sub: "Momentos & presentes" },
  { id: "perfil", label: "Perfil", sub: "Preferências" }
];

export default function Home() {
  // Valores estáticos apenas para preview; depois podemos conectar no backend.
  const [activeTab, setActiveTab] = useState<TabId>("hoje");
  const coupleName = "Alex e Camila";
  const greeting = "Boa noite";
  const alignmentText =
    "Hoje parece um dia um pouco mais sensível. Que tal algo leve para cuidar da conexão de vocês?";
  const city = "São Paulo, SP";

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <p className="text-sm text-slate-500">{greeting},</p>
        <h1 className="text-2xl font-semibold mt-0.5">{coupleName}</h1>
        <p className="mt-2 text-sm text-amber-800 max-w-md">{alignmentText}</p>

        <div className="mt-4 inline-flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-300" />
            Dia mais sensível · vamos cuidar da conexão hoje
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
            <span className="opacity-80">Cidade</span>
            <span className="font-medium">{city}</span>
            <button className="text-[10px] underline underline-offset-2 ml-1 opacity-80">
              Alterar
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <section className="flex-1 px-6 pb-24">
        {activeTab === "hoje" && <HojeSection />}
        {activeTab === "calendario" && <CalendarioSection />}
        {activeTab === "historico" && <HistoricoSection />}
        {activeTab === "perfil" && <PerfilSection />}
      </section>

      {/* Navegação inferior */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 border-t border-slate-200 px-4 py-2 flex justify-between text-[11px] backdrop-blur">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-1 rounded-full transition ${
                isActive
                  ? "text-slate-900 font-semibold bg-slate-900/5"
                  : "text-slate-500"
              }`}
            >
              <span className="text-[11px]">{tab.label}</span>
              <span className="text-[9px] opacity-70">{tab.sub}</span>
              <span
                className={`mt-0.5 h-0.5 w-8 rounded-full ${
                  isActive ? "bg-slate-900" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </main>
  );
}

function HojeSection() {
  return (
    <div className="space-y-6">
      {/* BOTÃO PRINCIPAL */}
      <div>
        <button className="w-full rounded-full bg-slate-900 text-white py-3 text-sm font-medium shadow-sm active:scale-[0.99] transition">
          Sugerir algo agora
        </button>
        <p className="mt-2 text-[11px] text-slate-500 text-center">
          Em um clique, o app monta um encontro completo para hoje.
        </p>
      </div>

      {/* HOJE */}
      <section aria-labelledby="hoje-title" className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 id="hoje-title" className="text-base font-semibold">
            Hoje
          </h2>
          <button className="text-xs text-slate-500 underline decoration-slate-300 underline-offset-2">
            Ajustar filtros
          </button>
        </div>

        <div className="glass-card p-4 space-y-3">
          <p className="text-xs text-slate-500">
            Com 45 minutos livres e clima ameno, sugerimos:
          </p>
          <h3 className="text-base font-semibold">Piquenique rápido no parque</h3>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-100">
              baixo custo
            </span>
            <span className="px-2 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
              ao ar livre
            </span>
            <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
              energia leve
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Roteiro pensado para reduzir a carga mental: é só seguir o passo a
            passo.
          </p>

          <div className="flex gap-2 pt-1">
            <button className="flex-1 rounded-full bg-slate-900 text-white py-2 text-xs font-medium">
              Ver roteiro
            </button>
            <button className="flex-1 rounded-full border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700">
              Outra ideia
            </button>
          </div>
        </div>
      </section>

      {/* Bloco baseado na cidade (scraping futuro) */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold">Hoje na sua cidade</h2>
        <p className="text-[11px] text-slate-500">
          Aqui o sistema busca eventos e experiências que estão rolando hoje
          perto de vocês.
        </p>

        <div className="space-y-2">
          <div className="glass-card p-3 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Show intimista no centro</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900/5 text-slate-700">
                baseado na cidade
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Ambiente pequeno, luz baixa, ideal para quem quer algo leve sem
              precisar planejar muito.
            </p>
          </div>

          <div className="glass-card p-3 space-y-1">
            <span className="text-sm font-medium">
              Exposição gratuita a 15 minutos
            </span>
            <p className="text-[11px] text-slate-500">
              Ótimo para um passeio rápido depois do trabalho. O app cuida da
              rota e dos horários.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSO MOMENTO */}
      <section aria-labelledby="momento-title" className="space-y-3">
        <h2 id="momento-title" className="text-base font-semibold">
          Nosso momento
        </h2>

        <div className="grid gap-3">
          {/* Check-in rápido */}
          <div className="glass-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Check-in rápido</span>
              <span className="text-[11px] text-slate-500">Último há 3 dias</span>
            </div>
            <p className="text-xs text-slate-500">
              Como cada um está hoje? Resposta privada, em menos de 30 segundos.
            </p>
            <button className="w-full rounded-full bg-white text-slate-900 py-2 text-xs font-medium border border-slate-200">
              Fazer check-in agora
            </button>
          </div>

          {/* Índice de alinhamento */}
          <div className="glass-card p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Índice de sintonia</span>
              <span className="text-xs font-semibold text-emerald-700">
                7,3 / 10
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-[73%] bg-emerald-500 rounded-full" />
            </div>
            <p className="text-xs text-slate-500">
              Semana passada: 6,1/10 · tendência positiva. O foco é manter a
              leveza, não buscar perfeição.
            </p>
            <button className="text-xs text-slate-600 underline underline-offset-2">
              Ver relatório do mês (premium)
            </button>
          </div>

          {/* Mini-desafio */}
          <div className="glass-card p-4 space-y-3">
            <span className="text-sm font-medium">Mini-desafio de hoje</span>
            <p className="text-xs text-slate-600">
              Envie uma mensagem de voz contando algo que você admira no outro.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 rounded-full bg-slate-900 text-white py-2 text-xs font-medium">
                Concluir
              </button>
              <button className="flex-1 rounded-full border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700">
                Pular
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SURPREENDER */}
      <section aria-labelledby="surpreender-title" className="space-y-3 pb-4">
        <h2 id="surpreender-title" className="text-base font-semibold">
          Surpreender
        </h2>

        <div className="glass-card p-4 space-y-3">
          <p className="text-xs text-slate-500">
            Próximas datas significativas: aniversário dela em 12 dias.
          </p>

          <div className="space-y-2">
            <div className="rounded-2xl border border-slate-100 bg-white/70 p-3 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Experiência gastronômica a dois
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                  romântico
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Ele avaliou 9/10 o último presente experiencial.
              </p>
              <button className="mt-1 text-[11px] text-slate-700 underline underline-offset-2">
                Ver detalhes
              </button>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white/70 p-3 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Curso rápido de algo que ele ama
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                  criativo
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Ideal para quem valoriza crescimento e experiências.
              </p>
              <button className="mt-1 text-[11px] text-slate-700 underline underline-offset-2">
                Ver detalhes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CalendarioSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base font-semibold">Calendário do casal</h2>
        <p className="mt-1 text-[11px] text-slate-500">
          Uma visão clara dos compromissos e momentos de vocês, sem sobrecarregar
          ninguém com a organização.
        </p>
      </div>

      <div className="glass-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Meta de março</span>
          <span className="text-xs text-emerald-700 font-semibold">
            1 / 2 encontros especiais
          </span>
        </div>
        <p className="text-xs text-slate-500">
          O app lembra vocês com antecedência, sem cobrança, só cuidado.
        </p>
        <button className="w-full rounded-full bg-slate-900 text-white py-2 text-xs font-medium">
          Planejar próximo encontro
        </button>
      </div>

      <div className="glass-card p-4 space-y-3">
        <span className="text-sm font-medium">Resumo do mês</span>
        <ul className="mt-1 space-y-1 text-xs text-slate-600">
          <li>• Encontros realizados: 4</li>
          <li>• Melhor avaliado: jantar caseiro (9,2/10)</li>
          <li>• Semana mais distante: 2ª semana</li>
        </ul>
        <p className="text-[11px] text-slate-500 mt-2">
          A ideia não é julgar a relação, e sim trazer consciência leve sobre a
          rotina.
        </p>
      </div>
    </div>
  );
}

function HistoricoSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base font-semibold">Histórico de momentos</h2>
        <p className="mt-1 text-[11px] text-slate-500">
          Um lugar calmo para revisitar encontros, surpresas e fases que vocês já
          viveram juntos.
        </p>
      </div>

      <div className="glass-card p-4 space-y-3">
        <span className="text-sm font-medium">Últimos encontros</span>
        <div className="mt-2 space-y-2 text-xs text-slate-600">
          <div className="flex items-center justify-between">
            <span>Jantar caseiro com velas</span>
            <span className="text-emerald-700 font-semibold">9,2</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Caminhada no parque domingo</span>
            <span className="text-emerald-700 font-semibold">8,7</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Noite de filme com temática especial</span>
            <span className="text-emerald-700 font-semibold">8,0</span>
          </div>
        </div>
      </div>

      <div className="glass-card p-4 space-y-3">
        <span className="text-sm font-medium">Presentes que marcaram</span>
        <p className="text-[11px] text-slate-500">
          O sistema aprende com o que funcionou para sugerir presentes futuros
          com menos dúvida.
        </p>
        <ul className="mt-2 space-y-1 text-xs text-slate-600">
          <li>• Viagem curta de fim de semana — 9,5/10</li>
          <li>• Aula de culinária a dois — 9/10</li>
          <li>• Relógio — 7/10 (gostou, mas experiências funcionam melhor)</li>
        </ul>
      </div>
    </div>
  );
}

function PerfilSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-base font-semibold">Perfil do casal</h2>
        <p className="mt-1 text-[11px] text-slate-500">
          Aqui o app entende quem vocês são para reduzir ao máximo a carga
          mental do “o que fazer?”.
        </p>
      </div>

      <div className="glass-card p-4 space-y-3">
        <span className="text-sm font-medium">Sobre vocês</span>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-600">
          <div>
            <p className="font-semibold text-slate-800">Tempo de relação</p>
            <p>3 anos e 4 meses</p>
          </div>
          <div>
            <p className="font-semibold text-slate-800">Orçamento confortável</p>
            <p>R$ 150 por encontro</p>
          </div>
          <div>
            <p className="font-semibold text-slate-800">Disponibilidade típica</p>
            <p>Noites de semana e domingos</p>
          </div>
        </div>
      </div>

      <div className="glass-card p-4 space-y-3">
        <span className="text-sm font-medium">Linguagens do amor</span>
        <div className="mt-2 space-y-1 text-xs text-slate-600">
          <p>
            <span className="font-semibold text-slate-800">Ela:</span> Qualidade
            de tempo & atos de serviço
          </p>
          <p>
            <span className="font-semibold text-slate-800">Ele:</span> Toque
            físico & tempo de qualidade
          </p>
        </div>
        <button className="mt-2 w-full rounded-full bg-white text-slate-900 py-2 text-xs font-medium border border-slate-200">
          Atualizar preferências
        </button>
      </div>

      <div className="glass-card p-4 space-y-3 mb-4">
        <span className="text-sm font-medium">Coisas a evitar</span>
        <p className="text-xs text-slate-600">
          Lugares muito cheios, programas que terminam muito tarde em dia de
          semana, atividades com muito álcool.
        </p>
      </div>
    </div>
  );
}


