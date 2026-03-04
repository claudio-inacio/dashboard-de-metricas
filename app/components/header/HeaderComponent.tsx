import Image, { StaticImageData } from "next/image";

interface HeaderComponentProps {
    headertitle: string;
    imageIcon?: string | StaticImageData;
}
const HeaderComponent = ({ headertitle, imageIcon }: HeaderComponentProps) => {
    return (
        <header className="w-full pl-0 md:pl-14 h-24 bg-primary flex items-center md:justify-start justify-center ">
            {imageIcon && <Image src={imageIcon} alt="Icon" className="w-20 h-20 md:w-28 md:h-28" />}
            <span className=" text-white text-lg md:text-1xl font-extrabold flex flex-row ">
                {headertitle}
            </span>
        </header>
    )
}

export default HeaderComponent;