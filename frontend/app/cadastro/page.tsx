"use client";

import Link from "next/link";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

export default function CadastroPage() {
  const [step, setStep] = useState<Step>(1);

  const next = () => setStep((s) => Math.min(4, (s + 1) as Step));
  const prev = () => setStep((s) => Math.max(1, (s - 1) as Step));

  return (
    <main className="min-h-screen flex items-center justify-center bg-sand-50 px-6 py-6">
      <div className="w-full max-w-md space-y-5">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Crie a conta do casal
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Entendendo vocês dois.
          </h1>
          <p className="text-sm text-slate-600">
            Uma pequena anamnese para o app poder cuidar da parte pesada da
            organização da relação.
          </p>
        </header>

        <div className="glass-card p-5 space-y-4">
          {/* indicadores de passo */}
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Passo {step} de 4</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 w-6 rounded-full ${
                    i <= step ? "bg-slate-900" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {step === 1 && <StepDadosBasicos />}
          {step === 2 && <StepRotina />}
          {step === 3 && <StepPreferencias />}
          {step === 4 && <StepLimites />}

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              disabled={step === 1}
              onClick={prev}
              className="text-xs text-slate-500 disabled:opacity-40"
            >
              Voltar
            </button>
            {step < 4 ? (
              <button
                type="button"
                onClick={next}
                className="rounded-full bg-slate-900 text-white px-5 py-2 text-xs font-medium"
              >
                Continuar
              </button>
            ) : (
              <button
                type="button"
                className="rounded-full bg-slate-900 text-white px-5 py-2 text-xs font-medium"
              >
                Finalizar e entrar
              </button>
            )}
          </div>
        </div>

        <p className="text-[11px] text-slate-500 text-center">
          Já têm conta?{" "}
          <Link
            href="/login"
            className="text-slate-900 underline underline-offset-2"
          >
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}

function StepDadosBasicos() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-900">
        1. Quem são vocês?
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="block text-[11px] text-slate-600">
            Nome 1
          </label>
          <input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10" />
        </div>
        <div className="space-y-1">
          <label className="block text-[11px] text-slate-600">
            Nome 2
          </label>
          <input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Há quanto tempo estão juntos?
        </label>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Ex: 3 anos e 4 meses"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">Cidade</label>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Cidade, UF"
        />
      </div>
    </div>
  );
}

function StepRotina() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-900">
        2. Rotina do casal
      </h2>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Quanto tempo livre por semana vocês costumam ter juntos?
        </label>
        <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10">
          <option>Menos de 2 horas</option>
          <option>2 a 5 horas</option>
          <option>5 a 10 horas</option>
          <option>Mais de 10 horas</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Em quais dias é mais fácil encaixar algo a dois?
        </label>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Ex: noites de terça e quinta, domingo à tarde"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Orçamento confortável por encontro
        </label>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Ex: até R$ 150"
        />
      </div>
    </div>
  );
}

function StepPreferencias() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-900">
        3. Preferências de jeito
      </h2>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          O que costuma funcionar melhor para surpreender?
        </label>
        <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10">
          <option>Experiências (viagens, jantares, programas)</option>
          <option>Presentes físicos</option>
          <option>Gestos e detalhes do dia a dia</option>
          <option>Mistura de tudo</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Linguagem do amor que mais combina com vocês
        </label>
        <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10">
          <option>Tempo de qualidade</option>
          <option>Atos de serviço</option>
          <option>Palavras de afirmação</option>
          <option>Toque físico</option>
          <option>Presentes</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Estilo do casal
        </label>
        <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10">
          <option>Mais caseiro e calmo</option>
          <option>Mais aventureiro e fora de casa</option>
          <option>Equilibrado entre os dois</option>
        </select>
      </div>
    </div>
  );
}

function StepLimites() {
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-900">
        4. Limites e cuidados
      </h2>
      <p className="text-[11px] text-slate-500">
        O objetivo aqui é o app respeitar o que não faz sentido pra vocês.
      </p>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Coisas que o app deve evitar sugerir
        </label>
        <textarea
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Ex: lugares muito cheios, programas com muito álcool, atividades muito caras..."
        />
      </div>
      <div className="space-y-1">
        <label className="block text-[11px] text-slate-600">
          Algo importante sobre o momento atual da relação?
        </label>
        <textarea
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
          placeholder="Só para dar contexto para o tipo de cuidado que o app deve ter."
        />
      </div>
    </div>
  );
}

