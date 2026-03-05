import Link from "next/link";

export default function RecuperarContaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sand-50 px-6">
      <div className="w-full max-w-md space-y-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Recuperar acesso
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Vamos te ajudar a voltar.
          </h1>
          <p className="text-sm text-slate-600">
            Envie o e-mail cadastrado e, no futuro, o app enviará um link seguro
            de recuperação.
          </p>
        </header>

        <form className="glass-card p-5 space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-700"
            >
              E-mail do casal
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-900/10"
              placeholder="voce@email.com"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 text-white py-2.5 text-sm font-medium shadow-sm"
          >
            Enviar link de recuperação
          </button>
        </form>

        <p className="text-[11px] text-slate-500 text-center">
          Lembrou da senha?{" "}
          <Link
            href="/login"
            className="text-slate-900 underline underline-offset-2"
          >
            Voltar para o login
          </Link>
        </p>
      </div>
    </main>
  );
}

