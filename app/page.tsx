import {
  ArrowRight,
  Shield,
} from "lucide-react";



const PASSOS = [
  { n: 1, titulo: "Adicione a conversa", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
  { n: 2, titulo: "Analise", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
  { n: 3, titulo: "Veja os resultados", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." },
];



/* ───────────────────────────── Sidebar ───────────────────────────── */



/* ───────────────────────────── Página ───────────────────────────── */

export default function HomePage() {
  return (
    <div className="flex min-h-screen min-w-0 flex-1 flex-col bg-gray-50 font-sans text-gray-900 antialiased">
      <div className="flex min-w-0 flex-1 flex-col bg-gray-50">
        {/* Topbar */}
        <header className="flex h-[41px] shrink-0 items-center border-b border-gray-200 bg-white px-6">
          <span className="text-base font-medium text-gray-900">Início</span>
        </header>

        {/* Conteúdo */}
        <main className="flex flex-1 items-center justify-center overflow-y-auto px-6 py-10">
          <section className="w-full max-w-[720px]">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-gray-600">
              <Shield className="h-3 w-3 text-gray-900" />
              Projeto de pesquisa
            </span>

            <h1 className="mt-5 text-[34px] font-bold leading-tight tracking-tight text-gray-900">
              Grooming Guard
            </h1>

            <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>

            <p className="mt-6 text-[14px] font-medium uppercase tracking-wide text-gray-400">Como funciona</p>

            <ol className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {PASSOS.map((p) => (
                <li key={p.n} className="rounded-lg border border-gray-200 bg-white p-3">
                  <span className="flex h-4 w-4 items-center justify-center rounded bg-gray-900 text-xs font-semibold text-white">
                    {p.n}
                  </span>
                  <h3 className="mt-2.5 text-base font-semibold text-gray-900">{p.titulo}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{p.texto}</p>
                </li>
              ))}
            </ol>

            <a
              href="/chat"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Ir para o chat
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <p className="mt-2.5 text-xs text-gray-400">
              Protótipo de pesquisa · não é necessário login · nada é enviado até você analisar a conversa.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
