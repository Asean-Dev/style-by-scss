import type { Metadata } from "next";
import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ConfigLayoutProvider from "@/theme/provider";
import { CssBaseline } from "@mui/material";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-thai",
});
export const metadata: Metadata = {
  title: "Administrative Court",
  description: "The Administrative Court English",
  keywords: "Administrative Court, ADMC, Administrative Court English",
  metadataBase: new URL("https://admc-th.wewebplus.com/"),
  openGraph: {
    images: "/og1200x630.jpg",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    siteId: "@ADCM",
    creator: "@ADCM",
    images: "/tw800x418.jpg",
  },
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/assets/favicon/favicon.ico",
    icon: [
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/assets/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/assets/favicon/apple-icon.png" },
      {
        url: "/assets/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/assets/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: {
      rel: "apple-icon-precomposed",
      url: "/assets/favicon/apple-icon-precomposed.png",
    },
  },
  manifest: "/assets/favicon/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-toolpad-color-scheme="light">
      <body className={notoSansThai.className}>
        <AppRouterCacheProvider>
          <ConfigLayoutProvider>
            <CssBaseline />
            {children}
          </ConfigLayoutProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
