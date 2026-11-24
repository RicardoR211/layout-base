type MensagemEntrada = {
  id: number;
  texto: string;
};

type RespostaSentinela = {
  risk_probability: number;
  risk_detected: boolean;
};

export async function POST(request: Request) {
  const apiUrl = process.env.SENTINELA_API_URL;

  if (!apiUrl) {
    return Response.json(
      { erro: "Endereço da API do Sentinela não configurado." },
      { status: 500 }
    );
  }

  const { mensagens } = (await request.json()) as {
    mensagens: MensagemEntrada[];
  };

  if (!Array.isArray(mensagens) || mensagens.length === 0) {
    return Response.json(
      { erro: "A conversa não possui mensagens para analisar." },
      { status: 400 }
    );
  }

  try {
    const resultados = [];

    for (const mensagem of mensagens) {
      const resposta = await fetch(
        `${apiUrl.replace(/\/$/, "")}/api/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: mensagem.texto }),
        }
      );

      if (!resposta.ok) {
        return Response.json(
          { erro: "O Sentinela não conseguiu analisar uma das mensagens." },
          { status: 502 }
        );
      }

      const resultado =
        (await resposta.json()) as RespostaSentinela;

      resultados.push({
        id: mensagem.id,
        probabilidade: resultado.risk_probability,
        sinalizada: resultado.risk_detected,
      });
    }

    const media =
      resultados.reduce((soma, resultado) => soma + resultado.probabilidade, 0) /
      resultados.length;

    return Response.json({
      pontuacaoMedia: Math.round(media * 100),
      sinalizadas: resultados.filter((resultado) => resultado.sinalizada).length,
      total: resultados.length,
      porMensagem: resultados,
    });
  } catch {
    return Response.json(
      { erro: "Não foi possível conectar ao Sentinela." },
      { status: 502 }
    );
  }
}