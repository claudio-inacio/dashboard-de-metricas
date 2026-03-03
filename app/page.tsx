'use client';
import useDashboardData from "./hooks/useDashboardData";
import { useEffect } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import logoImage from "./assets/img/new-icon.png";

export default function Home() {
  
  const { resultSet, handleGetDashboardData, requestLoading } = useDashboardData();

  useEffect(() => {
    handleGetDashboardData()

  }, [])
  

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <HeaderComponent headerTittle="DASHBOARD DE MÉTRICAS" imageIcon={logoImage}/>
      <span className="">MEU TEXTO</span>
    </div>
  );
}
