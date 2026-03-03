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
}

export interface DashboardData {
    metrics: Metric;
    campaigns: CampaignData[];
}