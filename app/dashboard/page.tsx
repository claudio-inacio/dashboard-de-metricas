"use client";

import { use, useEffect } from "react";
import useDashboardData from "../hooks/useDashboardData";
import DashboardHeader from "./components/DashboardHeader";
import MetricsComponent from "./components/metrics/MetricsComponent";
import LoadingComponent from "../components/loader/LoadingComponent";
import GraphicInvestimentComponent from "../components/graphic/GraphicInvestimentComponent";
import Button from "../components/button/Button";

export default function Dashboard() {
  const { resultSet, handleGetDashboardData, requestLoading } = useDashboardData();

  useEffect(() => {
    handleGetDashboardData();
  }, []);


  return (
    <main className="min-w-[320px]">
      <DashboardHeader handleAtualizedata = {handleGetDashboardData} requestLoading={!!requestLoading || !resultSet} />
      <section className="md:px-10 px-4">
        {requestLoading ? (
          <LoadingComponent />
        ) : (
          resultSet &&
          <div className="w-full p-4 cursor-default bg-gray-100 space-y-2 rounded-2xl shadow ">
            <div className="flex justify-end">

             <Button disabled={requestLoading} buttontitle="Atualizar" handleFunction={handleGetDashboardData} color="warning" />
            </div>
            <MetricsComponent metrics={resultSet?.metrics} isMoney={true} />
            <GraphicInvestimentComponent campaigns={resultSet?.campaigns || []} />
          </div>
        )}
      </section>
    </main>
  );
}
