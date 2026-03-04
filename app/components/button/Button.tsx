import { colorButtoEnum } from "@/app/enum";

interface ButtonProps {
    handleFunction: () => void;
    buttontitle: string;
    styleClass?: string;
    disabled: boolean;
    color: 'success' | 'error' | 'warning' | 'info' | 'primary';

}
const Button = ({ buttontitle, color, handleFunction, styleClass, disabled }: ButtonProps) => {
    return (

        <button
            disabled={disabled}
            className={`
    ${colorButtoEnum[color]}
    text-white font-bold py-2 px-4 rounded
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${styleClass ?? ''}
  `}
            onClick={handleFunction}
        >
            {buttontitle}
        </button>
    )
}

export default Button;