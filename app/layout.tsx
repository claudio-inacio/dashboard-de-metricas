import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./components/header/HeaderComponent";
import logoImage from "./assets/img/new-icon.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard de Metricas",
  description: "Acompanhe as métricas de marketing da sua empresa em um dashboard intuitivo e fácil de usar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComponent headertitle="DASHBOARD DE MÉTRICAS" imageIcon={logoImage} />
        {children}
      </body>
    </html>
  );
}
