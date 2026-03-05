"use client";

import { lazy, Suspense, useEffect, useRef } from "react";
import useDashboardData from "../hooks/useDashboardData";
import DashboardContainer from "./components/DashboardContainer";
import PageHeaderActions from "../components/header/PageHeaderActions";


export default function Dashboard() {
  const { resultSet, handleGetDashboardData, requestLoading, error, handleClearErrorsCloseModal } = useDashboardData();
  const hasFetched = useRef(false);
  const ModalErrorInfo = lazy(() => import("../components/error/ModalErrorInfo"));

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      handleGetDashboardData({ isAtualize: false });
    }
  }, []);

  return (
    <main className="min-w-[320px]">
      <PageHeaderActions
        requestLoading={!!requestLoading}
        title="Visão Analítica das Campanhas"
      />
      <DashboardContainer resultSet={resultSet} loading={!!requestLoading} handleGetDashboardData={handleGetDashboardData} />
      <Suspense fallback={null}>

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
      </Suspense>
    </main>
  )
}
