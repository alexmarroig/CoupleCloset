export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sand-50">
      <div className="glass-card px-6 py-5 flex flex-col items-center gap-3">
        <div className="h-8 w-8 border-2 border-slate-900/20 border-t-slate-900 rounded-full animate-spin" />
        <div className="text-sm text-slate-700 text-center">
          Cuidando da vida a dois...
          <span className="block text-[11px] text-slate-500 mt-1">
            Ajustando sugestões e clima emocional do casal.
          </span>
        </div>
      </div>
    </main>
  );
}

