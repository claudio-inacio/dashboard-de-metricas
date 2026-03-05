export type CampaignStatus = "ativa" | "pausada" | "finalizada";
export type FilterType = "todos" | "ativa" | "pausada" | "finalizada";

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
    startDate: string,
    endDate: string,
}

export interface ListCampaignData extends Omit<CampaignData, "endDate"> {
    endDate: string | undefined;
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

export type ColumnType = "text" | "currency" | "date" | "status" | "custom";

export type TableColumn<T> = {
    header: string;
    field: keyof T;
    type?: ColumnType;
    render?: (item: T) => React.ReactNode;
};