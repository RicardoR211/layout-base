import { X } from "lucide-react";

import type { ResultadoAnalise } from "@/types/analise";
import type { Mensagem } from "@/types/mensagem";

import { nomeInicial } from "@/lib/nomeInicial";

import RiscoGeral from "./risco-geral";
import EstatisticaNaoAnalisada from "./estatistica-nao-analisada";

interface ChatEstatisticaProps {
    onClose: () => void;
    onAnalisar: () => void;
    resultado: ResultadoAnalise | null;
    participanteA: string;
    participanteB: string;
    mensagens: Mensagem[];
    analisadaEm: string | null;
}

const analise = {
  "geral": {
    "risco": { "nivel": "Moderado", "pontuacao": 48 },
    "categorias": [
      { "nome": "Construção de confiança", "ocorrencias": 2 }
    ]
  },
  "porMensagem": [
    { "idMensagem": 1, "categorias": ["Construção de confiança"] },
    { "idMensagem": 2, "categorias": [] }
  ]
};


export default function ChatEstatistica({ onClose, onAnalisar, resultado, 
    participanteA, participanteB, 
    mensagens, analisadaEm }: ChatEstatisticaProps) {

    //Caso não tenha sido analisada
    if (!resultado || !analisadaEm) {
        return (
            <aside className="flex w-full shrink-0 flex-col bg-white lg:w-[420px] lg:border-l lg:border-gray-200">
                <header className="flex shrink-0 items-center justify-between border-b border-gray-300 px-5 py-3">
                    <h2 className="text-lg font-semibold">Estatísticas da análise</h2>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </header>

                <div className="min-h-0 flex-1 overflow-y-auto p-5">
                    <EstatisticaNaoAnalisada
                        participanteA={participanteA}
                        onAnalisar={onAnalisar}
                    />
                </div>
            </aside>
        );
    }
    
    const mensagemPorId = new Map(
        mensagens.map((mensagem) => [mensagem.id, mensagem])
    );


    //Quantia de cada
    const mensagensA = resultado.porMensagem.filter(
        (analise) => mensagemPorId.get(analise.id)?.nome === participanteA
    );

    const mensagensB = resultado.porMensagem.filter(
        (analise) => mensagemPorId.get(analise.id)?.nome === participanteB
    );

    //Quantia de cada q foi sinalizada
    const sinalizadasA = mensagensA.filter((mensagem) => mensagem.sinalizada).length;
    const sinalizadasB = mensagensB.filter((mensagem) => mensagem.sinalizada).length;

    //Porcentagem
    const percentualSinalizadas =
        resultado.total > 0
            ? Math.round((resultado.sinalizadas / resultado.total) * 100)
            : 0;


    //Calculo de qual nível ele ira pegar
    const pontuacao = resultado.pontuacaoMedia;

    const nivelRisco =
        pontuacao < 35
            ? "Baixo"
            : pontuacao < 60
            ? "Moderado"
            : "Alto";

    return (
        <aside className="
                flex w-full shrink-0 flex-col bg-white
                lg:w-[420px] lg:border-l lg:border-gray-200"
            >

            {/* Cabeçalho */}
            <header className="flex shrink-0 items-center justify-between border-b border-gray-300 px-5 py-3">
                <h2 className="text-lg font-semibold">
                    Estatísticas da análise
                </h2>

                <button
                    onClick={onClose}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                >
                    <X className="h-5 w-5" />
                </button>
            </header>

            {/* Conteúdo */}
            <div className="min-h-0 flex-1 overflow-y-auto p-5">
                <p className="text-sm text-gray-500 mb-3">
                    Conversa com {participanteA} · analisada às {analisadaEm}
                </p>


                {/* bloco nivel de risco */}
                <RiscoGeral
                    nivel={nivelRisco}
                    pontuacao={pontuacao}
                    sinalizadas={resultado.sinalizadas}
                    total={resultado.total}
                />

                {/* <RiscoGeral 
                    nivel="Moderado" 
                    pontuacao={55} 
                    sinalizadas={25} 
                    total={150} 
                />

                <RiscoGeral 
                    nivel="Alto" 
                    pontuacao={92} 
                    sinalizadas={138} 
                    total={150} 
                /> */}

                {/* bloco com ...*/}
               <div className="grid grid-cols-2 gap-3 max-w-sm mt-3">
                    {/* mensagem */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                        <p className="text-sm text-gray-500">Mensagens</p>
                        <p className="text-3xl font-semibold text-gray-900">{resultado.total}</p>
                    </div>

                    {/* sinalizadas */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                        <p className="text-sm text-gray-500">Sinalizadas</p>
                        <p className="text-3xl font-semibold text-gray-900">
                            {resultado.sinalizadas}
                        </p>
                        <p className="text-sm text-gray-400">{percentualSinalizadas}%</p>
                    </div>

                    {/* Falante A */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                        <p className="text-sm text-gray-500">Falante A · {nomeInicial(participanteA)}</p>
                        <p className="text-3xl font-semibold text-gray-900">{mensagensA.length}</p>
                        <p className="text-sm text-gray-400">{sinalizadasA} sinalizadas</p>
                    </div>

                    {/* Falante B */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4">
                        <p className="text-sm text-gray-500">Falante B · {nomeInicial(participanteB)}</p>
                        <p className="text-3xl font-semibold text-gray-900">{mensagensB.length}</p>
                        <p className="text-sm text-gray-400">{sinalizadasB} sinalizadas</p>
                    </div>
                </div>

                {/* Padrões detectados, cada um tem uma barra de progresso que é baseada no totalDele/totalEncontrado */}
                <div>
                    
                </div>

                {/* Linha do tempo */}
                <div>
                    
                </div>

                {/* Botão de exportar relatório */}
                <div>
                    
                </div>
            </div>

            

        </aside>
    );
}