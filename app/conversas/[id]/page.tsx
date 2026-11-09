import ChatBalao from "../componentes/balao";
import ChatCabecalho from "../componentes/chat-cabecalho";
import { BarChart3, ChevronRight, MoreHorizontal } from "lucide-react";
import ChatEscrita from "../componentes/chat-escrita";


export default function Conversa() {
    return (
        <main className="flex h-[calc(100dvh-3.5rem)] min-w-0 flex-1 flex-col overflow-hidden bg-gray-50 text-gray-900 md:h-screen">

            {/* Breadcrumb */}
            <nav className="hidden flex shrink-0 items-center gap-3 px-8 py-5 text-[14px] text-gray-500 display-block md:flex">
                <span>Início</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span>Conversas</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-[600] text-gray-900">Marina Costa</span>
            </nav>

            {/* Cabeçalho */}
            <div className="shrink-0">
                <ChatCabecalho />
            </div>

            {/* Área de mensagens */}
            <div className="flex-1 min-h-0 overflow-y-auto">
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
                <ChatBalao />
            </div>

            {/* Escrita */}
            <div className="shrink-0">
                <ChatEscrita />
            </div>

        </main>
    );
}
