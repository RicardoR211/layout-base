"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { BarChart3, ChevronRight, MoreHorizontal } from "lucide-react";

import ChatBalao from "../componentes/balao";
import ChatCabecalho from "../componentes/chat-cabecalho";
import ChatEscrita from "../componentes/chat-escrita";
import ChatEstatistica from "../componentes/estatistica/chat-estatistica";

//Tipos de dados
import type { Conversa } from "@/types/conversa";
import { Mensagem } from "@/types/mensagem";
import type { ResultadoAnalise } from "@/types/analise";

//Dados fixos
import { conversasMock } from "../dados/conversas-mock";

export default function Conversa() {
    const [mostrarEstatisticas, setMostrarEstatisticas] = useState(false);
    const [analisando, setAnalisando] = useState(false);
    const [resultadoAnalise, setResultadoAnalise] = useState<ResultadoAnalise | null>(null);
    const [analisadaEm, setAnalisadaEm] = useState<string | null>(null);

    const params = useParams();
    const id = params.id as string;

    const [conversas, setConversas] = useState<Conversa[]>(conversasMock);
    const conversa = conversas.find((item) => item.id === id);

    if(!conversa) {
        return <main>Conversa não encontrada.</main>;
    }

    const conversaAtual = conversa;

    function adicionarMensagem(texto: string) {
        const falandoComoA = conversaAtual.falanteAtual === "A";

        const novaMensagem: Mensagem = {
        id: Date.now(),
        nome: falandoComoA
            ? conversaAtual.participanteA
            : conversaAtual.participanteB,
        texto,
        hora: new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        }),
        lado: falandoComoA ? "esquerdo" : "direito",
        };

        setConversas((atuais) =>
            atuais.map((item) =>
                item.id === id
                ? {
                    ...item,
                    mensagens: [...item.mensagens, novaMensagem],
                    }
                : item
            )
        );
    }

    function selecionarFalante(falante: "A" | "B") {
        setConversas((atuais) =>
            atuais.map((item) =>
            item.id === id
                ? { ...item, falanteAtual: falante }
                : item
            )
        );
    }   

    async function analisarConversa() {
        setAnalisando(true) 

        try {
            const resposta = await fetch("/api/analisar-conversa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    mensagens: conversaAtual.mensagens.map(({ id, texto }) => ({
                        id,
                        texto,
                    })),
                }),
            });

            if (!resposta.ok) {
                throw new Error("Não foi possível analisar a conversa.");
            }

            console.log("Resultado da análise:", resultadoAnalise);

            const dados = (await resposta.json()) as ResultadoAnalise;
            setResultadoAnalise(dados);
            //Preciso desse horário para avisar a pessoa a ultima vez
            //que a conversa foi analisada.
            setAnalisadaEm(
                    new Date().toLocaleTimeString("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
            setMostrarEstatisticas(true);
        } catch (erro) {
            console.error("Erro ao analisar a conversa:", erro);
        } finally {
            setAnalisando(false);
        }
    }

    return (
        <main className="flex h-[calc(100dvh-3.5rem)] min-w-0 flex-1 flex-row overflow-hidden bg-gray-50 text-gray-900 md:h-screen">

            <section className="@container flex min-w-0 flex-1 flex-col overflow-hidden">
                {/* Breadcrumb */}
                {/* Descontinuado por enquanto */}
                {/* <nav className="hidden flex shrink-0 items-center gap-3 border-b border-gray-300 px-8 py-5 text-[14px] text-gray-500 display-block md:flex">
                    <span>Início</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span>Conversas</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                    <span className="font-[600] text-gray-900">Marina Costa</span>
                </nav> */}

                {/* Cabeçalho */}
                <div className="shrink-0">
                    <ChatCabecalho  nome={conversaAtual.participanteA}
                                    origem={conversaAtual.origem}
                                    totalMensagens={conversaAtual.mensagens.length}
                                    onOpenStatistics={() => setMostrarEstatisticas(true)}
                                    onAnalizar={analisarConversa}
                                    analisando={analisando}
                    />
                </div>

                {/* Área de mensagens */}
                <div className="flex-1 min-h-0 overflow-y-auto">
                {conversaAtual.mensagens.map((mensagem) => (
                    <ChatBalao key={mensagem.id} mensagem={mensagem} />
                ))}
                </div>

                {/* Escrita */}
                <div className="shrink-0">
                    <ChatEscrita participanteA={conversaAtual.participanteA}
                                participanteB={conversaAtual.participanteB}
                                falanteAtual={conversaAtual.falanteAtual}
                                onSelecionarFalante={selecionarFalante}
                                onEnviarMensagem={adicionarMensagem} />
                </div>

            </section>


            {/* Painel lateral */}
            {/* Se não tiver resultado a aba não abre. */}
            {mostrarEstatisticas && (
                <ChatEstatistica
                    onClose={() => setMostrarEstatisticas(false)}
                    onAnalisar={analisarConversa}
                    resultado={resultadoAnalise}
                    participanteA={conversaAtual.participanteA}
                    participanteB={conversaAtual.participanteB}
                    mensagens={conversaAtual.mensagens}
                    analisadaEm={analisadaEm}
                />
            )}

        </main>
    );
}
