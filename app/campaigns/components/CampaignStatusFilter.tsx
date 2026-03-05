import { statusEnum } from "@/app/enum";
import { FilterType, } from "@/app/types/dashboardData";
import CampaignStatusFilterButton from "./CampaignStatusFilterButton";

type CampaignStatusFilterProps = {
    activeFilter: FilterType;
    handleFunction: (newFilter: FilterType) => void
};
export default function CampaignStatusFilter({
    activeFilter,
    handleFunction,
}: CampaignStatusFilterProps) {
    return (
        <div className="flex bg-gray-100 space-x-2 rounded-xl p-3 w-fit shadow-sm">
            <CampaignStatusFilterButton
                nameButton="TODAS"
                isActive={activeFilter === statusEnum.TODOS}
                handlefunction={() => activeFilter !== statusEnum.TODOS && handleFunction('todos')}
            />
            <CampaignStatusFilterButton
                nameButton="ATIVAS"
                isActive={activeFilter === statusEnum.ATIVA}
                handlefunction={() => activeFilter !== statusEnum.ATIVA && handleFunction('ativa')}
            />
            <CampaignStatusFilterButton
                nameButton="PAUSADAS"
                isActive={activeFilter === statusEnum.PAUSADA}
                handlefunction={() => activeFilter !== statusEnum.PAUSADA && handleFunction('pausada')}
            />
            <CampaignStatusFilterButton
                nameButton="FINALIZADAS"
                isActive={activeFilter === statusEnum.FINALIZADA}
                handlefunction={() => activeFilter !== statusEnum.FINALIZADA && handleFunction('finalizada')}
            />


        </div>
    );
}