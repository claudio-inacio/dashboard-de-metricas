/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { DashboardData } from "../types/dashboardData";





const useDashboardData = () => {
    const [resultSet, setResultSet] = useState<DashboardData | []>([]);
    const [requestLoading, setRequestLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);

    const handleGetDashboardData = async () => {
        setRequestLoading(true);
        try {
            const response = await fetch("/api/dashboard");
            if (!response.ok) {
                throw new Error("Falha ao buscar os dados do dashboard");
            }
            const json: DashboardData = await response.json();
            setResultSet(json);
        }
        catch (error) {
            setError (error instanceof Error ? error.message : "Erro desconhecido")
        } finally {
            setRequestLoading(false);
        }
    }
    return { resultSet, handleGetDashboardData, requestLoading }
}

export default useDashboardData;