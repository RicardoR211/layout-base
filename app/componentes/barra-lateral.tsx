"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Home,
  MessageSquare,
  Plus,
  Search,
  Shield,
} from "lucide-react";

type Origem = "importada" | "digitada";

interface Conversa {
  id: string;
  nome: string;
  mensagem: string;
  hora: string;
  origem: Origem;
}

const CONVERSAS: Conversa[] = [
  { id: "1", nome: "Marina Costa", mensagem: "Combinado! Me chama no outro app", hora: "10:42", origem: "importada" },
  { id: "2", nome: "Rafael Almeida", mensagem: "Obrigada por compartilhar!", hora: "10:28", origem: "importada" },
  { id: "3", nome: "Júlia Santos", mensagem: "Me avisa quando chegar?", hora: "09:56", origem: "digitada" },
  { id: "4", nome: "Pedro Lima", mensagem: "Enviei as fotos por aqui.", hora: "Ontem", origem: "digitada" },
  { id: "5", nome: "Beatriz Oliveira", mensagem: "Adorei a ideia. Vamos combinar!", hora: "Ontem", origem: "importada" },
];

const FILTROS = [
  { id: "todas", label: "Todas" },
  { id: "importada", label: "Importadas" },
  { id: "digitada", label: "Digitadas" },
] as const;

type Filtro = (typeof FILTROS)[number]["id"];

function iniciais(nome: string) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function BarraLateral() {
  const [filtro, setFiltro] = useState<Filtro>("todas");
  const [busca, setBusca] = useState("");
  const [ativa, setAtiva] = useState<string>("1");

  const lista = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return CONVERSAS.filter(
      (c) =>
        (filtro === "todas" || c.origem === filtro) &&
        (!termo || c.nome.toLowerCase().includes(termo) || c.mensagem.toLowerCase().includes(termo)),
    );
  }, [filtro, busca]);

  return (
    <aside className="flex min-h-screen w-[264px] shrink-0 flex-col border-r border-gray-200 bg-gray-100 px-3 py-4">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-1.5 pb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
          <Home className="h-4 w-4" />
        </span>
        <span className="text-[17px] font-semibold text-gray-900">Início</span>
      </div>

      {/* Navegação */}
      <nav className="flex flex-col gap-1">
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-lg bg-gray-200/80 px-2.5 py-2 text-sm font-medium text-gray-900"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="flex-1">Conversas</span>
          <span className="text-xs font-normal text-gray-500">{CONVERSAS.length}</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-200/60"
        >
          <BarChart3 className="h-4 w-4" />
          <span>Análises</span>
        </a>
      </nav>

      <div className="my-4 border-t border-gray-200" />

      {/* Cabeçalho da lista */}
      <div className="flex items-center justify-between px-1.5 pb-3">
        <h2 className="text-sm font-semibold text-gray-900">Suas conversas</h2>
        <button
          type="button"
          aria-label="Nova conversa"
          className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Busca */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar conversa"
          className="h-9 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400"
        />
      </div>

      {/* Filtros */}
      <div className="flex gap-1.5 pb-3 pt-3">
        {FILTROS.map((f) => {
          const on = filtro === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFiltro(f.id)}
              className={
                "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors " +
                (on
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50")
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Lista de conversas */}
      <ul className="-mx-1 flex-1 space-y-0.5 overflow-y-auto px-1">
        {lista.map((c) => {
          const on = c.id === ativa;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setAtiva(c.id)}
                className={
                  "flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors " +
                  (on ? "bg-gray-200/80" : "hover:bg-gray-200/50")
                }
              >
                <span
                  className={
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-semibold " +
                    (on ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600")
                  }
                >
                  {iniciais(c.nome)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-sm font-medium text-gray-900">{c.nome}</span>
                    <span className="shrink-0 text-[11px] text-gray-400">{c.hora}</span>
                  </span>
                  <span className="block truncate text-xs text-gray-500">{c.mensagem}</span>
                </span>
              </button>
            </li>
          );
        })}
        {lista.length === 0 && (
          <li className="px-2 py-6 text-center text-xs text-gray-500">Nenhuma conversa encontrada.</li>
        )}
      </ul>
    </aside>
  );
}
