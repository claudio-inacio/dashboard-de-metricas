/* eslint-disable @typescript-eslint/no-explicit-any */
import { CampaignData, ChannelInvestment } from "../types/dashboardData";

export type ChannelGroupedData = {
    chanelId: string;
    channel: string;
    total_investment_num: number;
    campaign_count: number;
};

const useGraphiPrepareData = () => {
    function groupCampaignsByChannel(campaigns: CampaignData[]) {

        const grouped: Record<string, ChannelGroupedData> = {};

        campaigns.forEach((campaign) => {

            const channel = campaign.channel;

            if (!grouped[channel]) {
                grouped[channel] = {
                    chanelId: channel,
                    channel,
                    total_investment_num: 0,
                    campaign_count: 0,
                };
            }

            grouped[channel].total_investment_num += Number(campaign.investment);
            grouped[channel].campaign_count += 1;

        });

        return Object.values(grouped).map((item) => ({
            ...item,
            total_investment_fmt: item.total_investment_num.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }),
        }));
    }
    return { groupCampaignsByChannel }
}

export default useGraphiPrepareData;