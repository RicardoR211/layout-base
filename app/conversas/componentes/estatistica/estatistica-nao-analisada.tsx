import { BarChart3 } from "lucide-react";

interface EstatisticaNaoAnalisadaProps {
    participanteA: string;
    onAnalisar?: () => void;
}

const itens = [
    {
        titulo: "Risco geral",
        descricao: "Pontuação de 0 a 100 e nível de risco da conversa.",
    },
    {
        titulo: "Padrões detectados",
        descricao: "Quantas vezes cada técnica aparece nas mensagens.",
    },
    {
        titulo: "Linha do tempo",
        descricao: "Em quais momentos estão as mensagens sinalizadas.",
    },
];

export default function EstatisticaNaoAnalisada({
    participanteA,
    onAnalisar,
}: EstatisticaNaoAnalisadaProps) {
    return (
        <>
            <p className="mb-3 text-sm text-gray-500">
                Conversa com {participanteA} · ainda não analisada
            </p>

            {/* Card cinza dando destaque */}
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 px-6 py-8 text-center">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gray-200/70">
                    <BarChart3 className="h-5 w-5 text-gray-700" />
                </div>

                <h3 className="text-base font-semibold text-gray-900">
                    Ainda não analisada
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    Esta conversa ainda não passou por nenhuma análise. Rode a
                    primeira para ver o risco geral, os padrões e a linha do tempo.
                </p>

                <button
                    onClick={onAnalisar}
                    className="mt-5 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
                >
                    Analisar conversa
                </button>
            </div>

            {/* O que você verá aqui */}
            <h3 className="mb-3 mt-6 text-sm font-semibold text-gray-900">
                O que você verá aqui
            </h3>

            <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
                {itens.map((item) => (
                    <li key={item.titulo} className="px-4 py-3">
                        <p className="text-sm font-medium text-gray-900">
                            {item.titulo}
                        </p>
                        <p className="text-sm text-gray-500">{item.descricao}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}