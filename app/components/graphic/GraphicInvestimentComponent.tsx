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

const colors = ["#1d4ed8", "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"];

interface CampaignInvestmentChartProps {
  campaigns?: CampaignData[];
}

function GraphicInvestimentComponent({
  campaigns = [],
}: CampaignInvestmentChartProps) {
  const { groupCampaignsByChannel } = useGraphiPreareData();
  const data = groupCampaignsByChannel(campaigns);

  if (data.length === 0) {
    return (
      <div className="w-full h-[300px] md:h-[500px] p-6 md:p-20 bg-white rounded-2xl shadow flex flex-col items-center justify-center text-gray-500">
        <p className="text-lg font-semibold">Nenhum dado disponível</p>
        <p className="text-sm text-gray-400 mt-1 text-center">
          Não há campanhas para exibir.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[500px] p-4 md:p-4 lg:p-12 bg-white rounded-2xl shadow">
        <h3 className="mb-10">INESTIMENTO EM CAMPANHAS POR CANAL</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 10,
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
    </div>
  );
}

export default memo(GraphicInvestimentComponent);