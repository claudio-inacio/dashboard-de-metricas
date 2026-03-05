'use client'
import Button from "@/app/components/button/Button";
import TitleComponent from "@/app/components/title/TitleComponent";
import { redirect } from 'next/navigation';


interface PageHeaderActionsProps {
  requestLoading: boolean;
  title: string;
  route?: string | null;
}

export default function PageHeaderActions({ requestLoading, title, route = null }: PageHeaderActionsProps) {

  return (
    <header className="md:p-6 p-4 flex flex-row  items-center gap-8 ">
      <Button disabled={requestLoading} buttontitle="Voltar" handleFunction={() => redirect( route || '/')} color="info" />
      <TitleComponent styleClass='font-bold text-gray-700' title={title} />
    </header>

  );
}
