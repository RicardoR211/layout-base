export interface Mensagem {
    id: number;
    nome: string;
    texto: string;
    hora: string;
    lado: "esquerdo" | "direito";
}
