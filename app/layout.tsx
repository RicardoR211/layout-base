import type { Metadata } from "next";
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
      <body className="flex min-h-screen bg-gray-50">
        <BarraLateral />
        {children}</body>
    </html>
  );
}