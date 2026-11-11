"use client";

import { iniciais } from "@/lib/iniciais";
import { BarChart3, ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const C = {id: "1", 
    nome: "Marina Costa", 
    mensagem: "Combinado! Me chama no outro app",
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus eget felis tincidunt pulvinar. Proin nisl nisl, pretium id gravida id, porta eget quam. Proin mollis lectus a dolor luctus ullamcorper. Integer sed dui ultricies, pulvinar enim a, hendrerit sapien. Integer fringilla ipsum purus, id suscipit metus fermentum et. Sed tincidunt ligula sed tellus sagittis, id molestie ipsum vehicula. Ut metus sem, fermentum eu rhoncus vel, congue quis quam. Mauris lacinia porta nunc, " ,
    hora: "10:42", 
    origem: "importada",
    lado: "esquerdo"
};

 
interface ChatCabecalhoProps {
    onOpenStatistics: () => void;
}

export default function ChatCabecalho({ onOpenStatistics }: ChatCabecalhoProps) {
    const [mostrarAcoes, setMostrarAcoes] = useState(false);

    return (
        <div className="flex w-full items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-4">
 
            {/* Identificação da conversa */}
            <div className="flex min-w-0 items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-[16px] font-semibold text-white">
                    {iniciais(C.nome)}
                </span>
 
                <div className="min-w-0">
                    <p className="truncate text-[18px] font-[600] leading-tight text-gray-900">
                        {C.nome}
                    </p>
                    <p className="truncate text-[14px] text-gray-500">
                        Conversa digitada · 5 mensagens · 2 participantes
                    </p>
                </div>
            </div>
 
            {/* Ações */}
            <div className="relative flex shrink-0 items-center gap-3">
                <div className={`${mostrarAcoes ? "flex" : "hidden"} absolute right-0 top-full z-20 mt-2 w-56 flex-col gap-2 rounded-xl border border-gray-200 bg-white p-2 shadow-lg lg:static lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-3 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
                    <button
                        type="button"
                        onClick={() => {
                            onOpenStatistics();
                            setMostrarAcoes(false);
                        }}
                        className="flex w-full gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 lg:w-auto lg:px-4"
                    >
                        <BarChart3 className="absolute h-4 w-4 lg:static" />
                        <span className="block w-full text-center sm:hidden">Status</span>
                        <span className="w-full text-center hidden sm:inline">Estatísticas</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => console.log("Clicou em Analisar conversa")}
                        className="rounded-lg bg-gray-900 px-4 py-2 text-[14px] font-[500] text-white transition hover:bg-gray-800"
                    >
                        <span className="sm:hidden">Analisar</span>
                        <span className="hidden sm:inline">Analisar Conversa</span>
                    </button>
                </div>

                {/* Mostra ou oculta */}
                <button
                    type="button"
                    onClick={() => setMostrarAcoes(!mostrarAcoes)}
                    aria-label="Mostrar ações"
                    aria-expanded={mostrarAcoes}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 lg:hidden"
                    >
                    <MoreHorizontal className="h-5 w-5" />
                </button>
            </div>
 
        </div>
    );
}