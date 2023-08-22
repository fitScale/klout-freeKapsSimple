import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Archivo } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import ApolloClientProvider from "@/shopify/storeFront.apollo.client";
import AppContextProvider from "@/contexts/AppContext";

import localFont from "next/font/local";
import Script from "next/script";

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
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1016469529505447');
fbq('track', 'PageView');
`,
          }}
        />
        <body>
          {children}
          <Analytics />
        </body>
      </ApolloClientProvider>
    </html>
  );
}
