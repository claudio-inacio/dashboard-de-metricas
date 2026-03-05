/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { DashboardData } from "../types/dashboardData";
import LocalStorageUtils from "../utils/LocalStorageUtils"
import { ToastContainer, toast } from 'react-toastify';

interface GetDashboardDataProps {
    isAtualize: boolean;
    isDashboardPage?: boolean;
    filterIsActive?: boolean
}


const useDashboardData = () => {
    const resultSetFromStorage = LocalStorageUtils.getItem("dashboardData", true) || null;

    const [resultSet, setResultSet] = useState<DashboardData | null>(resultSetFromStorage);
    const [requestLoading, setRequestLoading] = useState<boolean>(!resultSetFromStorage ? true : false);
    const [error, setError] = useState<string | false>(false);


    const handleClearErrorsCloseModal = () => {
        setError(false)
    }

    const handleGetDashboardData = async ({ isAtualize = false, isDashboardPage = true }: GetDashboardDataProps) => {
        setRequestLoading(true);
        try {

            //para simular uma tratativa de erro, basta alterar a rota para /api/dashboards-error ou qualquer outra rota que não exista
            const response = await fetch("/api/dashboard");
            if (!response.ok) {
                throw new Error("Falha na requisição do dados de dashboard. Tente novamente mais tarde ou clieque em atualizar!");
            }
            const json: DashboardData = await response.json();
            // LocalStorageUtils.setItem("dashboardData", json);
            const successAtualizeMessage = isDashboardPage ? 'Dados do dashboard atualizados com sucesso!' : "Lista de campanhas atualizada com sucesso!"
            const successInitialRequestMessage = isDashboardPage ? "Dados do dashboard carregados com sucesso!" : "Lista de campanhas carregada com sucesso!"
            toast.success(isAtualize ? successAtualizeMessage : successInitialRequestMessage);
            setResultSet(json);
            return json.campaigns
        }
        catch (error) {
            setError(error instanceof Error ? error.message : "Falha na requisição do dados de dashboard. Tente novamente mais tarde")
        } finally {
            setRequestLoading(false);
        }
    }
    return { resultSet, handleGetDashboardData, requestLoading, error, handleClearErrorsCloseModal }
}

export default useDashboardData;