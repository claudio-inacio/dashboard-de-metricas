'use client'
import Button from "@/app/components/button/Button";
import MetricsComponent from "./metrics/MetricsComponent";
import { DashboardData } from "@/app/types/dashboardData";
import GraphicInvestimentComponent from "@/app/components/graphic/GraphicInvestimentComponent";
import LoadingComponent from "@/app/components/loader/LoadingComponent";


interface DashboardContainerProps {
  resultSet: DashboardData | null;
  loading: boolean;
  handleGetDashboardData: () => void;
}

export default function DashboardContainer({ handleGetDashboardData, resultSet, loading }: DashboardContainerProps) {

  return (
    <section className="md:px-10 px-4">
      <div className="w-full p-4 cursor-default bg-gray-100 space-y-2 rounded-2xl shadow ">
        <div className="flex justify-end">
          <Button disabled={loading} buttontitle="Atualizar" handleFunction={handleGetDashboardData} color="warning" />
        </div>
        {loading ? (
          <LoadingComponent title="Carregando dados" messageLoading="Aguarde enquanto buscamos as métricas" />
        ) : (
          <>
            <MetricsComponent loading={loading} metrics={resultSet?.metrics} isMoney={true} />
            <GraphicInvestimentComponent error={!resultSet?.campaigns && !loading} campaigns={resultSet?.campaigns} />
          </>
        )}
      </div>
    </section>
  );
}
