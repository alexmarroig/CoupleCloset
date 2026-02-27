import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sand-50 px-6">
      <div className="w-full max-w-md space-y-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Couple Closet
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Bem-vindo de volta.
          </h1>
          <p className="text-sm text-slate-600">
            Entrar para continuar de onde pararam: encontros, planos e
            pequenos gestos que o app já está cuidando por vocês.
          </p>
        </header>

        <form className="glass-card p-5 space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-slate-700"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-900/10"
              placeholder="voce@email.com"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-slate-700"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-900/10"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 text-white py-2.5 text-sm font-medium shadow-sm"
          >
            Entrar
          </button>

          <p className="text-[11px] text-slate-500 text-center">
            Ainda não têm conta?{" "}
            <Link
              href="/cadastro"
              className="text-slate-900 underline underline-offset-2"
            >
              Criar conta do casal
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

