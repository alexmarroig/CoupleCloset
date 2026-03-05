import Link from "next/link";

export default function SplashPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-sand-50 px-6 py-10">
      <header className="w-full max-w-md fade-up-soft">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          Couple Closet
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          Um assistente inteligente
          <br />
          para a vida a dois.
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Menos esforço, menos dúvida, mais conexão. O app que faz o trabalho
          invisível por trás de cada momento a dois.
        </p>
      </header>

      <section className="w-full max-w-md space-y-4 fade-up-soft">
        <div className="glass-card p-4 space-y-2">
          <p className="text-xs text-slate-500">O que o app faz por vocês</p>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Sugere encontros completos em 1 clique.</li>
            <li>• Lê o clima emocional do casal ao longo do tempo.</li>
            <li>• Lembra datas e pequenas oportunidades de surpresa.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href="/login"
            className="w-full text-center rounded-full bg-slate-900 text-white py-3 text-sm font-medium shadow-sm"
          >
            Já tenho conta
          </Link>
          <Link
            href="/cadastro"
            className="w-full text-center rounded-full border border-slate-200 bg-white text-slate-900 py-3 text-sm font-medium"
          >
            Criar conta do casal
          </Link>
        </div>
      </section>

      <footer className="w-full max-w-md text-[11px] text-slate-400 text-center fade-up-soft">
        Construído para casais adultos que querem leveza na rotina, não
        performar perfeição.
      </footer>
    </main>
  );
}

