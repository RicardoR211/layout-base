

function iniciais(nome: string) {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}


const C = {id: "1", 
    nome: "Marina Costa", 
    mensagem: "Combinado! Me chama no outro app",
    lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque risus eget felis tincidunt pulvinar. Proin nisl nisl, pretium id gravida id, porta eget quam. Proin mollis lectus a dolor luctus ullamcorper. Integer sed dui ultricies, pulvinar enim a, hendrerit sapien. Integer fringilla ipsum purus, id suscipit metus fermentum et. Sed tincidunt ligula sed tellus sagittis, id molestie ipsum vehicula. Ut metus sem, fermentum eu rhoncus vel, congue quis quam. Mauris lacinia porta nunc, " ,
    hora: "10:42", 
    origem: "importada",
    lado: "esquerdo"};

export default function ChatBalao() {
    return(
        <div className={
            "w-full min-w-0 max-w-[620px] px-2 py-5 " +
            (C.lado === "esquerdo" ? "mr-auto ml-5" : "ml-auto mr-5")
        }>


            {/* Cabeçalho da mensagem */}
            <div className={"flex items-center gap-2 " + 
            (C.lado === "esquerdo" ? "" : "justify-end mr-2")}>
                <span
                  className={
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[14px] font-semibold " +
                    (C.lado === "esquerdo" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border-[2px] border-gray-300")
                    }
                >
                  {iniciais(C.nome)}
                </span>
                <p className="text-[16px] font-[600] ">{C.nome.split(" ")[0]}</p>
                <p className="text-[14px] text-gray-600 ">{C.hora}</p>
            </div>


            {/*Balão da mensagem*/}
            <div className="min-w-0 py-4">
                <p className={"inline-block w-fit max-w-full break-words rounded-2xl border-[2px] border-gray-300 px-5 py-5 shadow-sm " + 
                    (C.lado === "esquerdo" ? "bg-white" : "bg-gray-200")
                }>
                    {C.lorem}
                </p>
            </div>

        </div>

    );

}
