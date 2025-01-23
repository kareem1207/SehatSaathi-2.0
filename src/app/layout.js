import { Header } from "@/UI/Header";
import { Footer } from "@/UI/Footer";
import "./globals.css";
import { Providers } from "@/Components/Themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "SehatSaathi",
  description: "A Health bot for all your medical needs",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen">
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
