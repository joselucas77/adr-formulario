import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProgressStepper from "@/components/progress-stepper/progress-stepper";
import { AppProvider } from "@/contexts/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MembrosADR",
  description: "Cadastro de membros da ADR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppProvider>
          <div className="bg-gray-300 absolute h-screen p-5 duration-500 animate-mainContainer w-full dark:bg-gray-900">
            <div className="bg-white relative w-full h-full rounded-lg p-5 text-white dark:bg-gray-800 ">
              <ProgressStepper />
              {children}
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
