import { Mensagem } from "./mensagem";

export interface Conversa {
    id: string;
    participanteA: string;
    participanteB: string;
    falanteAtual: "A" | "B";
    mensagens: Mensagem[];
}
