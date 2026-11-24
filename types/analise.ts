export interface ResultadoMensagem {
    id: number;
    probabilidade: number;
    sinalizada: boolean;
}

export interface ResultadoAnalise {
    pontuacaoMedia: number;
    sinalizadas: number;
    total: number;
    porMensagem: ResultadoMensagem[];
}