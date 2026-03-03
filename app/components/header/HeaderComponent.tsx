import Image, { StaticImageData } from "next/image";

interface HeaderComponentProps {
    headerTittle: string;
    imageIcon?: string | StaticImageData;
}
const HeaderComponent = ({ headerTittle, imageIcon }: HeaderComponentProps) => {
    return (
        <header className="w-full pl-0 md:pl-14 h-24 bg-primary flex items-center md:justify-start justify-center ">
            {imageIcon && <Image src={imageIcon} alt="Icon" className="w-20 h-20 md:w-28 md:h-28" />}
            <span className=" text-lg md:text-2xl font-extrabold flex flex-row ">
                {headerTittle}
            </span>
        </header>
    )
}

export default HeaderComponent;