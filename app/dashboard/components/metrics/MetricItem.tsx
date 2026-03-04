import { currencyToBRL } from "@/app/utils";
import Image, { StaticImageData } from "next/image";


interface MetricItemProps {
  title: string;
  value: string | number;
  cardIcon?: string | StaticImageData;
  isMoney?: boolean;
}

export default function MetricItem({ title, value, cardIcon, isMoney = false }: MetricItemProps) {


  return (
    <div
      className="min-w-[320px] w-full h-32 space-y-2 flex p-4 flex-col bg-white rounded-2xl ">
      <p className={` text-2xl  font-semibold tracking-tight leading-none  text-gray-500 `}>
        {title}
      </p>
      <div className="flex items-center justify-start ">
        {cardIcon && <Image src={cardIcon} alt="imagem que representa o tipo de análise" className="w-18 h-14" />}
        <span className="text-3xl  font-extrabold text-gray-700">{isMoney ? currencyToBRL(Number(value)) : value}</span>
      </div>

    </div>

  );
}
