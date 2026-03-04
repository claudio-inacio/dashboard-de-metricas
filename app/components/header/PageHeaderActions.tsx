'use client'
import Button from "@/app/components/button/Button";
import TitleComponent from "@/app/components/title/TitleComponent";
import { useRouter } from "next/navigation";


interface PageHeaderActionsProps {
  requestLoading: boolean;

  title: string;
}

export default function PageHeaderActions({ requestLoading, title }: PageHeaderActionsProps) {
  const router = useRouter()

  return (
    <header className="md:p-6 p-4 flex flex-row  items-center gap-8 ">
      <Button disabled={requestLoading} buttontitle="Voltar" handleFunction={() => router.back()} color="info" />
      <TitleComponent styleClass='font-bold text-gray-700' title={title} />
    </header>

  );
}
