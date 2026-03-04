import { CampaignData, ChannelInvestment } from "../types/dashboardData";


const useGraphiPreareData = () => {
    function groupCampaignsByChannel(campaigns: CampaignData[]): ChannelInvestment[] {
        const grouped: Record<number, ChannelInvestment> = {};

        campaigns.forEach((campaign) => {
            if (!grouped[campaign.chanelId]) {
                grouped[campaign.chanelId] = {
                    chanelId: campaign.chanelId,
                    channel: campaign.channel,
                    total_investment: 0,
                    total_investment_num: 0,
                    total_investment_fmt: "",
                };
            }

            grouped[campaign.chanelId].total_investment += campaign.investment;
        });

        return Object.values(grouped).map((item) => ({
            ...item,
            total_investment_num: item.total_investment,
            total_investment_fmt: item.total_investment.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }),
        }));
    }
    return { groupCampaignsByChannel }
}

export default useGraphiPreareData;