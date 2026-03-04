
import Image from "next/image";
import alertIcon from "../../assets/img/alert-icon.png";

interface DataErrorRequestComponentProps {

    errorMessage?: string;
}

export default function DataErrorRequestComponent({
    errorMessage = 'Não foi possível carregar os dados. Tente novamente clicando em atualizar',
}: DataErrorRequestComponentProps) {

    return (
        <div className="w-full flex items-center justify-center">
            <div
                className="flex flex-1 items-center text-center px-1 bg-orange-500 rounded-2xl w-full md:max-w-2/4  text-white justify-center h-full"
                style={{ height: '90px', minHeight: '90px' }}
            >
                <Image src={alertIcon} alt="Icon" className="w-18 h-14 md:w-28 md:h-16 p-0 m-0" />
                <span className="font-extrabold" color="text.secondary">
                    {errorMessage}
                </span>
            </div>
        </div>
    );
}
