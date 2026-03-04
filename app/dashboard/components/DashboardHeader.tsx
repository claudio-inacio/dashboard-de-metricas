'use client'
import Button from "@/app/components/button/Button";
import TitleComponent from "@/app/components/title/TitleComponent";
import { useRouter } from "next/navigation";


interface DashboardHeaderProps {
  requestLoading: boolean;
  handleAtualizedata: () => void;
}

export default function DashboardHeader({ requestLoading }: DashboardHeaderProps) {
  const router = useRouter()

  return (
    <header className="md:p-10 p-4 flex flex-row  items-center gap-8 ">
      <Button disabled={requestLoading} buttontitle="Voltar" handleFunction={() => router.back()} color="info" />
      <TitleComponent styleClass='font-bold text-gray-700' title="Visão Analitica das Campanhas" />
    </header>

  );
}
