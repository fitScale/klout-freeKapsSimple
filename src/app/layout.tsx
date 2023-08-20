import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Archivo } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import ApolloClientProvider from "@/shopify/storeFront.apollo.client";
import AppContextProvider from "@/contexts/AppContext";

import localFont from "next/font/local";

const helvetica = localFont({
  src: "../../public/fonts/helvetica.otf",
  variable: "--helvetica",
});

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });
const archivo = Archivo({ subsets: ["latin"], variable: "--archivo" });
const inter = Inter({ subsets: ["latin"], variable: "--Inter" });

export const metadata = {
  title: "KLOUT PWR - FREE PUMP KAPS ",
  description:
    "Limited time only! Get FREE Pump Kaps, when you buy any pre-workout!",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${montserrat.variable} ${inter.variable} ${helvetica.variable}`}
    >
      <ApolloClientProvider>
        <body>
          {children}
          <Analytics />
        </body>
      </ApolloClientProvider>
    </html>
  );
}
