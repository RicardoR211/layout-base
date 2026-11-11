import { X } from "lucide-react";

interface ChatEstatisticaProps {
    onClose: () => void;
}

export default function ChatEstatistica({ onClose }: ChatEstatisticaProps) {
    return (
        <aside className="
                flex w-full shrink-0 flex-col bg-white
                lg:w-[420px] lg:border-l lg:border-gray-200"
            >

            {/* Cabeçalho */}
            <header className="flex shrink-0 items-center justify-between border-b border-gray-300 px-5 py-3">
                <h2 className="text-lg font-semibold">
                    Estatísticas
                </h2>

                <button
                    onClick={onClose}
                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                >
                    <X className="h-5 w-5" />
                </button>
            </header>

            {/* Conteúdo */}
            <div className="min-h-0 flex-1 overflow-y-auto p-5">
                <p className="text-sm text-gray-600">
                    Conteúdo das estatísticas da conversa.
                </p>
            </div>

        </aside>
    );
}