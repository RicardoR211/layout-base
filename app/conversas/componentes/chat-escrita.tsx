"use client";

import { iniciais } from "@/lib/iniciais";
import { nomeInicial } from "@/lib/nomeInicial";
import { useState } from "react";
import { ArrowLeftRight, Paperclip, ArrowUp } from "lucide-react";



interface ChatEscritaProps {
    onEnviarMensagem: (texto : string) => void;
    participanteA: string;
    participanteB: string;
    falanteAtual: "A" | "B";
    onSelecionarFalante: (falante: "A" | "B") => void;
}


export default function ChatEscrita({
  onEnviarMensagem,
  participanteA,
  participanteB,
  falanteAtual,
  onSelecionarFalante,
}: ChatEscritaProps) {

    const [mensagem, setMensagem] = useState("");
    const primeiroNomeA = nomeInicial(participanteA);
    const primeiroNomeB = nomeInicial(participanteB);


    const ajustarAltura = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };
    
    return (
        <div className="w-full border border-gray-200 rounded-t-xl bg-white">

            {/*  Cima */ }
            <div className="flex items-center justify-between px-5 py-3">

                {/* Quem está falando */}
                <div className="flex items-center gap-3">

                    <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                        Quem está falando
                    </p>

                    {/* Seleção de pessoa */}
                    <div className="flex items-center gap-5 rounded-xl bg-gray-100 p-1">

                        {/* Primeira Pessoa */}
                        <button
                            aria-pressed={falanteAtual === "A"}
                            onClick={() => onSelecionarFalante("A")}
                            className={"flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-all " +
                                        (falanteAtual === "A"
                                            ? "bg-gray-900 text-white shadow-md"
                                            : "bg-transparent text-gray-600 hover:bg-white")
                                        }
                            >

                            <span className="flex h-8 w-12 items-center justify-center rounded-md bg-white text-[11px] font-semibold text-gray-900">
                                {iniciais(participanteA)}
                            </span>

                            <span className="text-[14px] font-medium">
                                {primeiroNomeA}
                            </span>

                        </button>

                        {/* Segunda Pessoa */}
                        <button
                            aria-pressed={falanteAtual === "B"}
                            onClick={() => onSelecionarFalante("B")}
                            className={"flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-all " +
                                        (falanteAtual === "B"
                                            ? "bg-gray-900 text-white shadow-md"
                                            : "bg-transparent text-gray-600 hover:bg-white")
                                        }
                        >

                            <span className="flex h-8 w-12 items-center justify-center rounded-md bg-gray-200 text-[11px] font-semibold text-gray-700">
                                {iniciais(participanteB)}
                            </span>

                            <span className="text-[14px] font-medium">
                                {primeiroNomeB}
                            </span>

                        </button>

                    </div>
                </div>

                {/* Alternar falante */}
                <button className="flex items-center gap-2 text-[13px] text-gray-400 transition hover:text-gray-700"
                onClick={() => {
                    console.log("Clicado para alternar");
                }}>
                    
                    <ArrowLeftRight className="hidden md:flex h-4 w-4" />

                    <span className="hidden md:flex">Alt + ↑ / ↓ para alternar</span>

                </button>

            </div>
            
            { /* Legendis  */}
            {/* <p className="px-5 text-sm uppercase  text-gray-500">
                Digite sua mensagem como{" "}
                <span className="font-semibold text-gray-900">
                    Marina
                </span>
            </p> */}

            {/* Área de escrita */}
            <div className="flex items-center justify-between gap-2 rounded-b-xl border-t border-gray-200 px-5 py-3 ">

                {/* Lado esquerdo */}
                <div className="flex flex-1 items-center gap-4">

                    {/* Anexar arquivo */}
                    <button
                        type="button"
                        aria-label="Anexar arquivo"
                        className="text-gray-500 transition hover:text-gray-900"
                    >
                        <Paperclip className="h-5 w-5" />
                    </button>

                    {/* Divisor */}
                    <div className="h-5 w-px bg-gray-200" />

                    {/* Campo de escrita */}
                    <textarea
                        value={mensagem}
                        onChange={(e) => {
                            setMensagem(e.target.value);
                            ajustarAltura(e);
                        }}
                        placeholder="Digite sua mensagem ..."
                        rows={1}
                        className="min-h-[44px] max-h-[160px] flex-1 resize-none overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[14px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
                    />


                </div>

                {/* Botão enviar */}
                <button
                    type="button"
                    onClick={() => {
                        const texto = mensagem.trim();

                        if(!texto) return;

                        onEnviarMensagem(texto);
                        setMensagem("");

                        console.log("Mensagem enviada como...");
                    }}
                    className="flex shrink-0 items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98]"
                >
                    
                    <span className="hidden sm:inline">Adicionar como Marina</span>

                    <ArrowUp className="h-4 w-4 stroke-[2.5]" />
                </button>

            </div>

        
        </div>
    );
}

