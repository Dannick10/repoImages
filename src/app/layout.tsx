import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "repo-images",
  description: "Encontre e explore imagens de alta qualidade com facilidade usando nossa plataforma. Utilize a funcionalidade de busca baseada no Pexels para descobrir uma vasta galeria de imagens relacionadas à sua pesquisa. Ideal para quem busca inspiração visual, recursos gráficos ou simplesmente deseja visualizar uma ampla variedade de imagens em um ambiente amigável e intuitivo. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}   data-theme="lofi">
        <Header />
        <div className="min-h-80">
          <Suspense fallback={<div className="loading-spinner loading-lg m-auto"></div>}>
        {children}
          </Suspense>
        </div>
        <Footer/>
        </body>
    </html>
  );
}
