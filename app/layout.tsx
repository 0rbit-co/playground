import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "0rbit | Oracle on Arweave",
  description:
    "Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/sqLight.svg",
        href: "/logos/sqLight.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/sqDark.svg",
        href: "/logos/sqDark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        ></Script>
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS}');`}
        </Script>
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
