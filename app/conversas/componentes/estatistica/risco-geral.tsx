

//Nivel -> Baixo/Moderado/Alto
//Pontuacao -> Calculada no backend
//Sinalizadas -> Quais mensagens que foram sinalizadas
//Total -> Usada para fazer o x de y e pra no bloco pai usado para avisar que tem que analisar dnv
interface RiscoGeralProps {
    nivel: string;
    pontuacao: number;
    sinalizadas: number;
    total: number;
}

//A qtd de barrinha que fica ali em baixo
const SEGMENTOS = 5;

//Para cada nivel tem uma cor
const cores: Record<string, string> = {
    Baixo: "bg-green-600",
    Moderado: "bg-amber-700",
    Alto: "bg-red-600",
};

export default function RiscoGeral({ nivel, pontuacao, sinalizadas, total }: RiscoGeralProps) {
    //Função teto
    const preenchidos = Math.ceil((pontuacao / 100) * SEGMENTOS);
    //Se a cor não tiver na const a gente poem o padrão
    const cor = cores[nivel] ?? "bg-gray-900";

    return (
         <div className="rounded-2xl border border-gray-200 p-5">
            <p className="text-xs uppercase tracking-wider text-gray-400">Risco geral</p>

            <div className="mt-3 flex items-baseline justify-between">
                <h3 className="text-3xl font-semibold">{nivel}</h3>
                <span className="text-gray-500">{pontuacao} / 100</span>
            </div>

            <div className="mt-3 flex gap-2">
                {Array.from({ length: SEGMENTOS }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${i < preenchidos ? cor : "bg-gray-200"}`}
                    />
                ))}
            </div>

            <p className="mt-3 text-sm text-gray-500">
                {sinalizadas} de {total} mensagens apresentam padrões de risco.
            </p>
        </div>
    );
}