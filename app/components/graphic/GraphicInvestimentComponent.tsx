import useGraphiPrepareData from "@/app/hooks/useGraphiPrepareData";
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

const colors = [
  "#1d4ed8",
  "#2563eb",
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#14b8a6",
  "#22c55e",
  "#eab308",
  "#f97316",
  "#ef4444",
];

interface CampaignInvestmentChartProps {
  campaigns?: CampaignData[];
  error: boolean;
}



function GraphicInvestimentComponent({
  campaigns = [],
  error,
}: CampaignInvestmentChartProps) {
  const { groupCampaignsByChannel } = useGraphiPrepareData();
  const data = groupCampaignsByChannel(campaigns);

  if (error) {
    return (
      <div className="my-20">
        <DataErrorRequestComponent errorMessage="Erro Interno! Não foi possível carregar o gráfico" />
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] md:h-[500px] p-4 md:p-4 lg:p-12 bg-white rounded-2xl shadow">

      <h3 className="mb-6 font-semibold text-gray-700">
        INVESTIMENTO EM CAMPANHAS POR CANAL
      </h3>

      {data.length === 0 ? (
        <DontResultSetDataComponent
          title="Nenhum dado disponível"
          messageInfo="Não há dados de campanhas para exibir"
        />
      ) : (
        <>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                top: 0,
                right: 10,
                left: 10,
                bottom: 20,
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
                width={100}
                tick={{ fontSize: 12, fontWeight: 600 }}
              />

              <Tooltip
                cursor={false}
                isAnimationActive={false}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  padding: "10px",
                }}
                formatter={(_, __, item) => [
                  item.payload.total_investment_fmt,
                  "Investimento",
                ]}
                labelFormatter={(label) => `Canal: ${label}`}
                content={({ payload }) => {

                  if (!payload || !payload.length) return null;

                  const data = payload[0].payload;

                  return (
                    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow text-sm">
                      <p className="font-semibold text-gray-700 mb-1">
                        {data.channel}
                      </p>

                      <p className="text-gray-600">
                        Investimento: <span className="font-semibold">{data.total_investment_fmt}</span>
                      </p>

                      <p className="text-gray-600">
                        Campanhas: <span className="font-semibold">{data.campaign_count}</span>
                      </p>
                    </div>
                  );
                }}
              />

              <Bar
                dataKey="total_investment_num"
                barSize={22}
                radius={[0, 6, 6, 0]}
                isAnimationActive={false}
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

          {/* legenda */}
          <div className="flex flex-wrap gap-4 mt-6">
            {data.map((channel, index) => (
              <div
                key={channel.chanelId}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: colors[index % colors.length],
                  }}
                />
                {channel.channel}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default memo(GraphicInvestimentComponent);