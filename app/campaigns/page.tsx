'use client';

import { lazy, Suspense, useEffect } from "react";
import PageHeaderActions from "../components/header/PageHeaderActions";
import useDashboardData from "../hooks/useDashboardData";
import CampaignListContainer from "./components/CampaignListContainer";


export default function Campaigns() {
  const { resultSet, handleGetDashboardData, requestLoading, error, handleClearErrorsCloseModal } = useDashboardData();

  const ModalErrorInfo = lazy(() => import("../components/error/ModalErrorInfo"));


  useEffect(() => {
    if (!resultSet) {
      handleGetDashboardData({ isAtualize: false, isDashboardPage: false });
    }
  }, []);


  return (
    <main>
      <PageHeaderActions
        requestLoading={false}
        title="Lista de Campanhas"
      />
      <CampaignListContainer loading={requestLoading} handleGetDashboardData={handleGetDashboardData} campaigns={resultSet?.campaigns || []} />

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
  );
}
