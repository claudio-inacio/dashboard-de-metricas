'use client'
import useDashboardData from "./hooks/useDashboardData";
import { useEffect } from "react";

export default function Home() {
  
  const { resultSet, handleGetDashboardData, requestLoading } = useDashboardData();

  useEffect(() => {
    handleGetDashboardData();


  }, [])
  

  console.log({resultSet})

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <span className="">MEU TEXTO</span>
    </div>
  );
}
