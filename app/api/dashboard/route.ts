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
        id: 1,
        name: "Black Friday 2026",
        channel: "Google Ads",
        status: "ativa",
        chanelId: 1,
        investment: 15000
      },
      {
        id: 2,
        name: "Campanha Instagram Verão",
        channel: "Instagram Ads",
        status: "ativa",
        chanelId: 2,
        investment: 8200
      },
      {
        id: 3,
        name: "Remarketing Site",
        channel: "Meta Ads",
        status: "pausada",
        chanelId: 3,
        investment: 5000
      },
      {
        id: 4,
        name: "Captação B2B LinkedIn",
        channel: "LinkedIn Ads",
        status: "ativa",
        chanelId: 4,
        investment: 12000
      },
      {
        id: 5,
        name: "YouTube Awareness",
        channel: "YouTube Ads",
        status: "pausada",
        chanelId: 5,
        investment: 9300
      },
      {
        id: 6,
        name: "Google Search Produto X",
        channel: "Google Ads",
         chanelId: 1,
        status: "ativa",
        investment: 6800
      },
      {
        id: 7,
        name: "Campanha Email Reengajamento",
        channel: "Email Marketing",
        status: "ativa",
         chanelId: 6,
        investment: 1200
      },
      {
        id: 8,
        name: "TikTok Teste Público Jovem",
        channel: "TikTok Ads",
        status: "pausada",
         chanelId: 7,
        investment: 4300
      },
      {
        id: 9,
        name: "Facebook Leads Q1",
        channel: "Facebook Ads",
        chanelId: 9,
        status: "ativa",
        investment: 7100
      },
      {
        id: 10,
        name: "Influenciadores Tech",
        channel: "Parcerias",
        chanelId: 8,
        status: "ativa",
        investment: 11000
      },
      {
        id: 11,
        name: "Google Display Remarketing",
        channel: "Google Ads",
         chanelId: 1,
        status: "ativa",
        investment: 3900
      },
      {
        id: 12,
        name: "Campanha Lançamento App",
        channel: "Instagram Ads",
         chanelId: 2,
        status: "pausada",
        investment: 14500
      },
      {
        id: 13,
        name: "LinkedIn Lead Gen Executivo",
        channel: "LinkedIn Ads",
        chanelId: 4,
        status: "ativa",
        investment: 9800
      },
      {
        id: 14,
        name: "Teste Público Frio",
        channel: "Meta Ads",
         chanelId: 3,
        status: "pausada",
        investment: 2600
      },
      {
        id: 15,
        name: "Retargeting Carrinho Abandonado",
        channel: "Google Ads",
         chanelId: 1,
        status: "ativa",
        investment: 5400
      }
    ]

  }

  return NextResponse.json(data)

}