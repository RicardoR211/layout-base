import type { Conversa } from "@/types/conversa";

export const conversasMock: Conversa[] = [
  {
    id: "1",
    participanteA: "Marina Costa",
    participanteB: "Clara",
    falanteAtual: "A",
    mensagens: [
      {
        id: 1,
        nome: "Marina Costa",
        texto: "Oi, Clara! Tudo bem? Conseguiu dar uma olhada nas ideias que te enviei?",
        hora: "10:32",
        lado: "esquerdo",
      },
      {
        id: 2,
        nome: "Clara",
        texto: "Oi, Marina! Vi sim, gostei muito.",
        hora: "10:34",
        lado: "direito",
      },
      {
        id: 3,
        nome: "Marina Costa",
        texto: "Boa! Reuni tudo em um só lugar.",
        hora: "10:36",
        lado: "esquerdo",
      },
      {
        id: 4,
        nome: "Clara",
        texto: "Perfeito, obrigada! Amanhã a gente conversa.",
        hora: "10:40",
        lado: "direito",
      },
      {
        id: 5,
        nome: "Marina Costa",
        texto: "Combinado! Me chama no outro app.",
        hora: "10:42",
        lado: "esquerdo",
      },
    ],
  },
];