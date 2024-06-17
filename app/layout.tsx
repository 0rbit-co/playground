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

// export const metadata: Metadata = {
//   title: "0rbit | Oracle on Arweave",
//   description:
//     "Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL.",
//     icons: {
//       icon: [
//         {
//           media: "(prefers-color-scheme: light)",
//           url: "/favicon.ico",
//           href: "/favicon.ico",
//         },
//         {
//           media: "(prefers-color-scheme: dark)",
//           url: "/favicon.ico",
//           href: "/favicon.ico",
//         },
//       ],
//     },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="0rbit | Playground" />
        <meta
          property="og:description"
          content="Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL."
        />
        <meta
          property="og:image"
          content="https://www.0rbit.co/logos/ogLogo.jpg"
        />
        <meta property="og:url" content="https://www.playground.0rbit.co" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <title>0rbit | Playground</title>
        <meta
          name="description"
          content="Decentralized Oracle on Arweave ecosystem for accessing off-chain data. Get data from any URL."
        />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
