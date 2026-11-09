import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Home } from "lucide-react";
import "./globals.css";
import BarraLateral from "./componentes/barra-lateral";

export const metadata: Metadata = {
  title: "Grooming Guard",
  description: "Projeto de pesquisa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col bg-gray-50 md:flex-row">
        <Suspense
          fallback={
            <aside
              aria-hidden="true"
              className="hidden min-h-screen w-[264px] shrink-0 border-r border-gray-200 bg-gray-100 md:block"
            />
          }
        >
          <BarraLateral />
        </Suspense>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <header className="flex h-14 shrink-0 flex-nowrap items-center gap-2 overflow-hidden border-b border-gray-200 bg-white px-3 md:hidden">
            <Link
              href="/"
              aria-label="Grooming Guard — Início"
              className="flex shrink-0 items-center gap-2 text-xs font-semibold text-gray-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Home className="h-4 w-4" />
              </span>
              Grooming Guard
            </Link>

            <nav aria-label="Navegação principal" className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
              <Link
                href="/"
                className="rounded-md px-2 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm"
              >
                Início
              </Link>
              <Link
                href="/conversas/1"
                className="rounded-md px-2 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm"
              >
                Conversas
              </Link>
              <Link
                href="/analises"
                className="rounded-md px-2 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm"
              >
                Análises
              </Link>
            </nav>
          </header>

          <div className="min-h-0 min-w-0 flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
