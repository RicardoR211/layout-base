import { X } from "lucide-react";

import RiscoGeral from "./risco-geral";

interface ChatEstatisticaProps {
    onClose: () => void;
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


export default function ChatEstatistica({ onClose }: ChatEstatisticaProps) {

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
                    Conversa com $nome · analisada às xx:xx
                </p>


                {/* bloco nivel de risco */}
                <RiscoGeral 
                    nivel="Baixo" 
                    pontuacao={15} 
                    sinalizadas={2} 
                    total={150} 
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
                <div>
                    {/* mensagem */}
                    <div>

                    </div>

                    {/* sinalizadas */}
                    <div>
                        
                    </div>

                    {/* Falante A  */}
                    <div>
                        
                    </div>

                    {/* Falante B */}
                    <div>
                        
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