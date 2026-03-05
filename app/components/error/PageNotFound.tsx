'use client';

import { useRouter } from "next/navigation";
import Button from "../button/Button";


export default function NotFoundComponent() {
    const router = useRouter();

    return (
        <div className="w-full min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center p-6">

            <h1 className="text-6xl font-bold text-gray-700">
                404
            </h1>

            <h2 className="text-2xl font-semibold text-gray-600">
                Página não encontrada
            </h2>

            <p className="text-gray-500 max-w-md">
                A página que você tentou acessar não existe ou foi removida.
                Verifique o endereço ou retorne para o início da aplicação.
            </p>

            <Button
                buttontitle="Voltar para o início"
                color="primary"
                disabled={false}
                handleFunction={() => router.push("/")}
            />
        </div>
    );
}