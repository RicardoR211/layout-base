"use client";

import { iniciais } from "@/lib/iniciais";
import { BarChart3, ChevronRight, MoreHorizontal } from "lucide-react";

const C = {id: "1", 
    nome: "Marina Costa", 
    mensagem: "Combinado! Me chama no outro app",
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus eget felis tincidunt pulvinar. Proin nisl nisl, pretium id gravida id, porta eget quam. Proin mollis lectus a dolor luctus ullamcorper. Integer sed dui ultricies, pulvinar enim a, hendrerit sapien. Integer fringilla ipsum purus, id suscipit metus fermentum et. Sed tincidunt ligula sed tellus sagittis, id molestie ipsum vehicula. Ut metus sem, fermentum eu rhoncus vel, congue quis quam. Mauris lacinia porta nunc, " ,
    hora: "10:42", 
    origem: "importada",
    lado: "esquerdo"};

 
export default function ChatCabecalho() {
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
            <div className="flex shrink-0 items-center gap-3">
                <button
                    type="button"
                    onClick={() => console.log("Clicou em Estatísticas")}
                    className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-[14px] font-[500] text-gray-900 transition hover:bg-gray-50"
                >
                    <BarChart3 className="h-4 w-4" />
                    Estatísticas
                </button>
 
                <button
                    type="button"
                    onClick={() => console.log("Clicou em Analisar conversa")}
                    className="rounded-lg bg-gray-900 px-4 py-2 text-[14px] font-[500] text-white transition hover:bg-gray-800"
                >
                    Analisar conversa
                </button>
 
              <button
                  type="button"
                  onClick={() => console.log("Clicou em Mais opções")}
                  aria-label="Mais opções"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100"
              >
                  <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
 
        </div>
    );
}