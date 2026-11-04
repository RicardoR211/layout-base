"use client";

import { iniciais } from "@/lib/iniciais";
import { useState } from "react";
import { ArrowLeftRight, Paperclip, ArrowUp } from "lucide-react";

const C = {id: "1", 
    nome: "Marina Costa", 
    mensagem: "Combinado! Me chama no outro app",
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus eget felis tincidunt pulvinar. Proin nisl nisl, pretium id gravida id, porta eget quam. Proin mollis lectus a dolor luctus ullamcorper. Integer sed dui ultricies, pulvinar enim a, hendrerit sapien. Integer fringilla ipsum purus, id suscipit metus fermentum et. Sed tincidunt ligula sed tellus sagittis, id molestie ipsum vehicula. Ut metus sem, fermentum eu rhoncus vel, congue quis quam. Mauris lacinia porta nunc, " ,
    hora: "10:42", 
    origem: "importada",
    lado: "esquerdo"};





export default function ChatEscrita() {
    const [mensagem, setMensagem] = useState("");

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
                    <div className="flex items-center gap-1 rounded-xl bg-gray-100 p-1">

                        {/* Primeira Pessoa */}
                        <button
                            aria-pressed="true"
                            className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-2.5 py-1.5 text-white shadow-md ring-1 ring-gray-300 transition-all hover:bg-gray-800"
                        >

                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-[11px] font-semibold text-gray-900">
                                {iniciais(C.nome)}
                            </span>

                            <span className="text-[14px] font-medium">
                                Marina
                            </span>

                        </button>

                        {/* Segunda Pessoa */}
                        <button
                            aria-pressed="false"
                            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-900"
                        >

                            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gray-200 text-[11px] font-semibold text-gray-700">
                                {iniciais("Clara")}
                            </span>

                            <span className="text-[14px] font-medium">
                                Clara
                            </span>

                        </button>

                    </div>
                </div>

                {/* Alternar falante */}
                <button className="flex items-center gap-2 text-[13px] text-gray-400 transition hover:text-gray-700"
                onClick={() => {
                    console.log("Clicado para alternar");
                }}>
                    
                    <ArrowLeftRight className="h-4 w-4" />

                    <span>Alt + ↑ / ↓ para alternar</span>

                </button>

            </div>
            
            { /* Legendis  */}
            <p className="px-5 text-sm uppercase  text-gray-500">
                Digite sua mensagem como{" "}
                <span className="font-semibold text-gray-900">
                    Marina
                </span>
            </p>

            {/* Área de escrita */}
            <div className="flex items-end justify-between gap-4 rounded-b-xl border-t border-gray-200 px-5 py-3 ">

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
                        placeholder="Digite sua mensagem..."
                        rows={1}
                        className="min-h-[44px] max-h-[160px] flex-1 resize-none overflow-y-auto rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[14px] text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-100"
                    />


                </div>

                {/* Botão enviar */}
                <button
                    type="button"
                    onClick={() => {
                        console.log("Mensagem enviada como Marina");
                    }}
                    className="flex shrink-0 items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98]"
                >
                    Adicionar como Marina

                    <ArrowUp className="h-4 w-4 stroke-[2.5]" />
                </button>

            </div>

        
        </div>
    );
}

