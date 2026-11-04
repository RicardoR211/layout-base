import ChatBalao from "../componentes/balao";
import ChatCabecalho from "../componentes/chat-cabecalho";
import { BarChart3, ChevronRight, MoreHorizontal } from "lucide-react";

export default function Conversa() {
    return (
        <main className="min-w-0 flex-1 bg-gray-50 text-gray-900">
    {/* Breadcrumb */}
    <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-3 px-8 py-5 text-[14px] text-gray-500"
    >
        <span>Início</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span>Conversas</span>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-[600] text-gray-900">Marina Costa</span>
    </nav>

    <ChatCabecalho />
    <ChatBalao />
</main>
    );
}
