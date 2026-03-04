export type CampaignStatus = "ativa" | "pausada";

export interface Metric {
    totalClients: number;
    monthlyRevenue: number;
    conversionRate: number;
}

export interface CampaignData {
    id: number;
    name: string;
    channel: string;
    status: CampaignStatus;
    investment: number;
    chanelId: number,
}

export interface DashboardData {
    metrics: Metric;
    campaigns: CampaignData[];
}

export type ChannelInvestment = {
  chanelId: number;
  channel: string;
  total_investment: number;
  total_investment_num: number;
  total_investment_fmt: string;
};