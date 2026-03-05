'use client';
import { lazy, Suspense, useEffect, useRef } from "react";
import PageHeaderActions from "../components/header/PageHeaderActions";
import useDashboardData from "../hooks/useDashboardData";
import CampaignListContainer from "./components/CampaignListContainer";
import { useSearchParams } from "next/navigation";
import { FilterType } from "../types/dashboardData";


export default function CampaingnContainer() {
  const { resultSet, handleGetDashboardData, requestLoading, error, handleClearErrorsCloseModal } = useDashboardData();
  const searchParams = useSearchParams();
  const ModalErrorInfo = lazy(() => import("../components/error/ModalErrorInfo"));
  const filterParam = searchParams.get("filter") as FilterType | null;
  const hasFetched = useRef(false);


  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      handleGetDashboardData({ isAtualize: false, isDashboardPage: false });
    }

  }, []);

  return (
    <main>
      <PageHeaderActions
        requestLoading={false}
        title="Lista de Campanhas"
      />

      <Suspense fallback={null}>
        <CampaignListContainer
          filterParam={filterParam}
          loading={requestLoading} handleGetDashboardData={handleGetDashboardData} campaigns={resultSet?.campaigns || []}
        />
      </Suspense>
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
