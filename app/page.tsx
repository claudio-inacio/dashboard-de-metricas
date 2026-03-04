'use client';
import useDashboardData from "./hooks/useDashboardData";
import { useEffect } from "react";

import HomeContent from "./components/home/HomeContent";

export default function Home() {

  const { resultSet, handleGetDashboardData, requestLoading } = useDashboardData();

  useEffect(() => {
    handleGetDashboardData()

  }, [])


  return (
    <div className="flex min-h-screen flex-col font-sans min-w[320px]">
      <HomeContent title="Bem-vindo!" description="Acompanhe e analise o desemenho das suas campanhas de marketing de forma fácil e rápida." />
    </div>
  );
}
