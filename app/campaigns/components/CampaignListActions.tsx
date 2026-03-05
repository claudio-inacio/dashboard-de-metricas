import Button from "@/app/components/button/Button";
import { FilterType } from "@/app/types/dashboardData";
import CampaignStatusFilter from "./CampaignStatusFilter";



interface CampaignListActionsProps {
  loading: boolean;
  currentFilter: FilterType,
  handleGetDashboardData: (props: { isAtualize: boolean, isDashboardPage: boolean, filterSelected?: FilterType, callBackFunction?: () => void }) => void;
  handleTradeFilterType: (newFilter: FilterType) => void
}

export default function CampaignListActions({ currentFilter, handleTradeFilterType, handleGetDashboardData, loading }: CampaignListActionsProps) {

  return (

    <div className="flex justify-between items-center">
      <CampaignStatusFilter
        activeFilter={currentFilter}
        handleFunction={handleTradeFilterType}

      />
      <Button disabled={loading} buttontitle="Atualizar"
        handleFunction={() => {
          handleGetDashboardData({ isAtualize: true, isDashboardPage: false, filterSelected: currentFilter })
        }

        }
        color="warning" />
    </div>
  );
}