import { colorButtoEnum } from "@/app/enum";
import Image, { StaticImageData } from "next/image";


interface ButtonProps {

    image?: string | StaticImageData;
    handleFunction: () => void;
    buttontitle: string;
    color: 'success' | 'error' | 'warning' | 'info' | 'primary' ;
    variant?: 'contained' | 'outlined';
}
const Button = ({ buttontitle, color, variant, handleFunction }: ButtonProps) => {
    return (

        <button
            className={`mt-6 ${colorButtoEnum[color]} text-white font-bold py-2 px-4 rounded cursor-pointer`}
            onClick={handleFunction}
        >
            {buttontitle}
        </button>
    )
}

export default Button;