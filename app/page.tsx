'use client';
import useDashboardData from "./hooks/useDashboardData";
import { useEffect } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import logoImage from "./assets/img/new-icon.png";
import HomeContent from "./components/home/HomeContent";

export default function Home() {

  const { resultSet, handleGetDashboardData, requestLoading } = useDashboardData();

  useEffect(() => {
    handleGetDashboardData()

  }, [])


  return (
    <div className="flex min-h-screen flex-col font-sans min-w[320px]">
      <HeaderComponent headertitle="DASHBOARD DE MÉTRICAS" imageIcon={logoImage} />
      <HomeContent title="Bem-vindo!" description="Acompanhe e analise o desemenho das suas campanhas de marketing de forma fácil e rápida." />
    </div>
  );
}
