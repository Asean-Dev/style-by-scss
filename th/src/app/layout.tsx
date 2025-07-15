import React from "react";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ConfigLayoutProvider from "@/themes/theme";

// scss
import "@/assets/scss/libs/_aos.scss";
import "@/assets/scss/libs/_grid.scss";
import "@/assets/scss/libs/_fontawesome.scss";
import "@/assets/scss/libs/_icon-custom.scss";
import "@/assets/scss/libs/_feather.scss";
import "@/assets/scss/configs/_fonts.scss";
import "@/assets/scss/configs/_variable.scss";
import "@/assets/scss/configs/_base.scss";

export const metadata: Metadata = {
  title: "ศาลปกครอง",
  description: "The Administrative Court Thai",
  keywords: "Administrative Court, ADMC, ศาลปกครอง",
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
    shortcut: "/img/favicon/favicon.ico",
    icon: [
      {
        url: "/img/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/img/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/img/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/img/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/img/favicon/apple-icon.png" },
      {
        url: "/img/favicon/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/img/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: {
      rel: "apple-icon-precomposed",
      url: "/img/favicon/apple-icon-precomposed.png",
    },
  },
  manifest: "/img/favicon/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider>
          <ConfigLayoutProvider>{children}</ConfigLayoutProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
