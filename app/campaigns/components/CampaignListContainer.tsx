import TableList from "@/app/components/generic-table/TableList";
import LoadingComponent from "@/app/components/loader/LoadingComponent";
import { CampaignData, FilterType } from "@/app/types/dashboardData";
import { campaingColumns, statusEnumArray, statusEnum } from "@/app/enum";
import { useMemo, useState } from "react";
import CampaignListActions from "./CampaignListActions";
import ModalErrorInfo from "@/app/components/error/ModalErrorInfo";
import InvalidUrlAlertComponent from "@/app/components/error/InvalidUrlAlertComponent";



interface CampaignListContainerProps {
  campaigns: CampaignData[];
  loading: boolean;
  filterParam: FilterType | null,
  handleGetDashboardData: (props: { isAtualize: boolean, isDashboardPage: boolean, filterSelected?: FilterType, callBackFunction?: () => void }) => void;
}

export default function CampaignListContainer({ campaigns, loading, handleGetDashboardData, filterParam }: CampaignListContainerProps) {
  const urlFilter = filterParam || 'todos'
  const urlExist = statusEnumArray.includes(urlFilter)
  const invalidUrlParams = !urlExist && !!filterParam;
  const [openModalErrorUrl, setModalErrorUrl] = useState(invalidUrlParams)
  const [currentFilter, setCurrentFilter] = useState<FilterType>(filterParam || "todos")


  const handleTradeFilterType = (newfilter: FilterType) => {
    setCurrentFilter(newfilter)
  }
  const filteredCampaigns = useMemo(() => {

    if (currentFilter === statusEnum.TODOS) return campaigns;
    return campaigns.filter((c) => c.status === currentFilter);
  }, [campaigns, currentFilter]);

  return (
    <div className="p-4 space-y-2">
      <CampaignListActions loading={loading} handleTradeFilterType={handleTradeFilterType} currentFilter={currentFilter} handleGetDashboardData={handleGetDashboardData} />
      {loading ? (
        <LoadingComponent title="Carregando dados" messageLoading="Aguarde enquanto buscamos suas campanhas" />
      ) : (

        <TableList columns={campaingColumns} data={filteredCampaigns} />
      )}
      {openModalErrorUrl && (
        <ModalErrorInfo
          open={openModalErrorUrl}
          title="URL DE FILTRO INVALIDA"
          message={
            <InvalidUrlAlertComponent />
          }
          onClose={() => setModalErrorUrl(false)}
        />
      )}

    </div>
  );
}