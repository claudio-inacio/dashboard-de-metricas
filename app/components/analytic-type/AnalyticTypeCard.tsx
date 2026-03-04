import Image, { StaticImageData } from "next/image";
import Button from "../button/Button";


interface AnalyticTypeCardProps {
    title: string;
    description: string;
    image?: string | StaticImageData;
    handleFunction: () => void;
    buttontitle: string;
    buttonColor: 'success' | 'error' | 'warning' | 'info' | 'primary';
    titleColor?: string;
}
const AnalyticTypeCard = ({ title, description, image, handleFunction, buttontitle, titleColor, buttonColor }: AnalyticTypeCardProps) => {
    return (
        <div

            className=" max-w-[350px] flex w-full flex-col items-center justify-center gap-2 py-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className={`text-2xl  ${titleColor || 'text-gray-700'}  font-bold`}>
                {title}
            </h3>
            <div className="w-3/4 my-1 h-px bg-gray-300" />
            {image && <Image src={image} alt="imagem que representa o tipo de análise" className="w-56 h-36 md:w-80 md:h-52" />}
            <span className="px-2">{description}</span>
            <Button buttontitle={buttontitle} styleClass="mt-6" color={buttonColor} handleFunction={handleFunction} />
        </div>
    )
}

export default AnalyticTypeCard;