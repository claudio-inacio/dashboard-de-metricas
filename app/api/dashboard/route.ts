import { DashboardData } from "@/app/types/dashboardData";
import { NextResponse } from "next/server";


export async function GET() {
  const data: DashboardData = {
    metrics: {
      totalClients: 1284,
      monthlyRevenue: 87450.32,
      conversionRate: 3.76
    },
    campaigns: [
  {
    id: 2,
    name: "Campanha Instagram Verão",
    channel: "Instagram Ads",
    status: "finalizada",
    chanelId: 2,
    startDate: "01/06/2025",
    endDate: "30/06/2025",
    investment: 8200
  },
  {
    id: 3,
    name: "Remarketing Site",
    channel: "Meta Ads",
    status: "pausada",
    chanelId: 3,
    investment: 5000,
    startDate: "15/05/2025",
    endDate: "15/06/2025"
  },
  {
    id: 5,
    name: "YouTube Awareness",
    channel: "YouTube Ads",
    status: "pausada",
    chanelId: 5,
    investment: 9300,
    startDate: "10/06/2025",
    endDate: "10/07/2025"
  },
  {
    id: 6,
    name: "Google Search Produto X",
    channel: "Google Ads",
    chanelId: 1,
    status: "ativa",
    investment: 6800,
    startDate: "05/06/2025",
    endDate: "05/07/2025"
  },
  {
    id: 7,
    name: "Campanha Email Reengajamento",
    channel: "Email Marketing",
    status: "ativa",
    chanelId: 6,
    investment: 1200,
    startDate: "10/01/2025",
    endDate: "10/03/2025"
  },
  {
    id: 8,
    name: "TikTok Teste Público Jovem",
    channel: "TikTok Ads",
    status: "pausada",
    chanelId: 7,
    investment: 4300,
    startDate: "16/06/2025",
    endDate: "16/07/2025"
  },
  {
    id: 9,
    name: "Facebook Leads Q1",
    channel: "Facebook Ads",
    chanelId: 9,
    status: "ativa",
    investment: 7100,
    startDate: "01/01/2025",
    endDate: "31/03/2025"
  },
  {
    id: 10,
    name: "Influenciadores Tech",
    channel: "Parcerias",
    chanelId: 8,
    status: "finalizada",
    investment: 11000,
    startDate: "01/06/2025",
    endDate: "31/08/2025"
  },
  {
    id: 11,
    name: "Google Display Remarketing",
    channel: "Google Ads",
    chanelId: 1,
    status: "ativa",
    investment: 3900,
    startDate: "20/06/2025",
    endDate: "20/11/2025"
  },
  {
    id: 12,
    name: "Campanha Lançamento App",
    channel: "Instagram Ads",
    chanelId: 2,
    status: "pausada",
    investment: 14500,
    startDate: "01/05/2025",
    endDate: "31/07/2025"
  },
  {
    id: 14,
    name: "Teste Público Frio",
    channel: "Meta Ads",
    chanelId: 3,
    status: "pausada",
    startDate: "01/06/2025",
    endDate: "30/06/2025",
    investment: 2600
  }
]

  }

  return NextResponse.json(data)

}