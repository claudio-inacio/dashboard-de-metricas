"use client";

import { useEffect } from "react";
import useDashboardData from "../hooks/useDashboardData";
import DashboardHeader from "./components/DashboardHeader";
import DashboardContainer from "./components/DashboardContainer";
import dynamic from 'next/dynamic'
const ModalErrorInfo = dynamic(() => import('../components/error/ModalErrorInfo'), { ssr: false })


export default function Dashboard() {
  const { resultSet, handleGetDashboardData, requestLoading, error, handleClearErrorsCloseModal } = useDashboardData();

  useEffect(() => {
    if (!resultSet) {
      handleGetDashboardData();
    }
  }, []);

  return (
    <main className="min-w-[320px]">
      <DashboardHeader handleAtualizedata={handleGetDashboardData} requestLoading={!!requestLoading} />
      <DashboardContainer resultSet={resultSet} loading={!!requestLoading} handleGetDashboardData={handleGetDashboardData} />

      {error && (
        <ModalErrorInfo
          open={true}
          title="Falha na requisição"
          message={
            typeof error === "string"
              ? error
              : "Ocorreu um erro desconhecido. Tente novamente mais tarde."
          }
          onClose={handleClearErrorsCloseModal}
        />
      )}
    </main>
  )
}
