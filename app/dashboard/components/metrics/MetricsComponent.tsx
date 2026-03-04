'use client'

import { Metric } from "@/app/types/dashboardData";
import MetricItem from "./MetricItem";
import monthlytIcon from "../../../assets/img/monthly-icon.png";
import clientIcon from "../../../assets/img/client-icon.png";
import conversionIcon from "../../../assets/img/conversion-icon.png";
import DataErrorRequestComponent from "@/app/components/error/DataErrorRequestComponent";



interface MetricsComponentProps {
  metrics: Metric | undefined | null;
  isMoney: boolean;
  loading: boolean;
}


export default function MetricsComponent({ metrics, isMoney = false, loading }: MetricsComponentProps) {
  if (!metrics && !loading) {
    return <DataErrorRequestComponent errorMessage="Erro Interno! Não foi possível carregar as métricas" />;
  }
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <MetricItem cardIcon={clientIcon} title="Total de Clientes" value={metrics?.totalClients || 0} />
      <MetricItem cardIcon={monthlytIcon} title="Receita Mensal" value={metrics?.monthlyRevenue || 0} isMoney={isMoney} />
      <MetricItem cardIcon={conversionIcon} title="Taxa de Conversão" value={metrics?.conversionRate || 0} />
    </div>

  );
}
