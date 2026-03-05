import Button from "@/app/components/button/Button";
import TableList from "@/app/components/generic-table/TableList";
import LoadingComponent from "@/app/components/loader/LoadingComponent";
import StatusComponent from "@/app/components/status/StatusComponent";
import { CampaignData, ListCampaignData, TableColumn } from "@/app/types/dashboardData";




interface CampaignListContainerProps {
  campaigns: CampaignData[];
  loading: boolean;
  handleGetDashboardData: (props: { isAtualize: boolean, isDashboardPage: boolean }) => void;
}

const columns: TableColumn<ListCampaignData>[] = [
  { header: "Nome", field: "name", type: "text" },
  { header: "Canal", field: "channel", type: "text" },
  {
    header: "Status", field: "status", type: "custom", render: (item) => (
      <StatusComponent status={item.status} />
    )
  },
  { header: "Investimento", field: "investment", type: "currency" },
  { header: "Início", field: "startDate", type: "date" },
];

export default function CampaignListContainer({ campaigns, loading, handleGetDashboardData }: CampaignListContainerProps) {
  return (
    <div className="p-4 space-y-2">

      <div className="flex justify-end items-center">

        <Button disabled={loading} buttontitle="Atualizar"

          handleFunction={() => handleGetDashboardData({ isAtualize: false, isDashboardPage: false })} color="warning" />
      </div>

      {loading ? (
        <LoadingComponent title="Carregando dados" messageLoading="Aguarde enquanto buscamos suas campanhas" />
      ) : (

        <TableList columns={columns} data={campaigns} />
      )}

    </div>
  );
}