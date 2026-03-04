
interface DontResultSetDataComponentProps {
    title: string;
    messageInfo?: string;
}

export default function DontResultSetDataComponent({
    title = 'Nenhum dado disponível',
    messageInfo = 'Não há informações para exibir.'
}: DontResultSetDataComponentProps) {

    return (
        <div className="w-full h-[200px] md:h-[300px] p-6 md:p-20 bg-white rounded-2xl shadow flex flex-col items-center justify-center text-gray-500">
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-sm text-gray-400 mt-1 text-center">
                {messageInfo}
            </p>
        </div>
    );
}
