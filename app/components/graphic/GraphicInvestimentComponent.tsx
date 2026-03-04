import useGraphiPreareData from "@/app/hooks/useGraphiPreareData";
import { CampaignData } from "@/app/types/dashboardData";
import { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import DontResultSetDataComponent from "../error/DontResultSetDataComponent";
import DataErrorRequestComponent from "../error/DataErrorRequestComponent";

const colors = ["#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"];

interface CampaignInvestmentChartProps {
  campaigns?: CampaignData[];
  error: boolean;
}

function GraphicInvestimentComponent({
  campaigns = [],
  error
}: CampaignInvestmentChartProps) {
  const { groupCampaignsByChannel } = useGraphiPreareData();
  const data = groupCampaignsByChannel(campaigns);

console.log({data})
  if (error) {
    return (

      <div className="my-20">
        <DataErrorRequestComponent errorMessage="Erro Interno! Não foi possível carregar o gráfico" />;

      </div>
    )

  }

  return (
    <div className="w-full h-[350px] md:h-[500px] p-4 md:p-4 lg:p-12 bg-white rounded-2xl shadow">
      <h3 className="mb-10">INVESTIMENTO EM CAMPANHAS POR CANAL</h3>
      {data.length === 0 ? (
        <DontResultSetDataComponent title="Nenhum dado disponível" messageInfo="Não há dados de campanhas para exibir" />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 70,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              type="number"
              tick={{ fontSize: 11 }}
              tickFormatter={(value) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  maximumFractionDigits: 0,
                })
              }
            />

            <YAxis
              dataKey="channel"
              type="category"
              width={90}
              tick={{ fontSize: 12, fontWeight: 600 }}
            />

            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#1d4ed8", fontWeight: 600 }}
              formatter={(_, __, item) => [
                item.payload.total_investment_fmt,
                "Investimento",
              ]}
            />

            <Bar
              dataKey="total_investment_num"
              barSize={20}
              radius={[0, 6, 6, 0]}
            >
              {data.map((channel, index) => (
                <Cell
                  key={`cell-${channel.chanelId}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default memo(GraphicInvestimentComponent);