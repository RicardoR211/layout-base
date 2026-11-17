"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import ChatBalao from "../componentes/balao";
import ChatCabecalho from "../componentes/chat-cabecalho";
import ChatEscrita from "../componentes/chat-escrita";
import ChatEstatistica from "../componentes/estatistica/chat-estatistica";

import { BarChart3, ChevronRight, MoreHorizontal } from "lucide-react";
import type { Conversa } from "@/types/conversa";
import { Mensagem } from "@/types/mensagem";

//Dados fixos
import { conversasMock } from "../dados/conversas-mock";

export default function Conversa() {
    const [mostrarEstatisticas, setMostrarEstatisticas] = useState(false);
    //Descomentar quando eu for usar os dados "reais"
    //const [mensagens, setMensagens] = useState<Mensagem[]>([]);
    const params = useParams();
    const id = params.id as string;

    const [conversa, setConversa] = useState<Conversa>(conversasMock[id-1]);

    function adicionarMensagem(texto: string) {
        const falandoComoA = conversa.falanteAtual === "A";

        const novaMensagem: Mensagem = {
            id: Date.now(),
            nome: falandoComoA
            ? conversa.participanteA
            : conversa.participanteB,
            texto,
            hora: new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
            }),
            lado: falandoComoA ? "esquerdo" : "direito",
        };

        setConversa((atual) => ({
            ...atual,
            mensagens: [...atual.mensagens, novaMensagem],
        }));
    }

    var tam = conversa.mensagens.length;
    console.log(conversa.mensagens[tam-1].nome)
    console.log(conversa.mensagens[tam-1].texto);
    return (
        <main className="flex h-[calc(100dvh-3.5rem)] min-w-0 flex-1 flex-row overflow-hidden bg-gray-50 text-gray-900 md:h-screen">

            <section className="@container flex min-w-0 flex-1 flex-col overflow-hidden">
                {/* Breadcrumb */}
                <nav className="hidden flex shrink-0 items-center gap-3 border-b border-gray-300 px-8 py-5 text-[14px] text-gray-500 display-block md:flex">
                    <span>Início</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>Conversas</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="font-[600] text-gray-900">Marina Costa</span>
                </nav>

                {/* Cabeçalho */}
                <div className="shrink-0">
                    <ChatCabecalho onOpenStatistics={() => setMostrarEstatisticas(true)}/>
                </div>

                {/* Área de mensagens */}
                <div className="flex-1 min-h-0 overflow-y-auto">
                {conversa.mensagens.map((mensagem) => (
                    <ChatBalao key={mensagem.id} mensagem={mensagem} />
                ))}
                </div>

                {/* Escrita */}
                <div className="shrink-0">
                    <ChatEscrita onEnviarMensagem={adicionarMensagem} />
                </div>

            </section>


            {/* Painel lateral */}
            {mostrarEstatisticas && (
                <ChatEstatistica
                    onClose={() => setMostrarEstatisticas(false)}
                />
            )}

        </main>
    );
}
