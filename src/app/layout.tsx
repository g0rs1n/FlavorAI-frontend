import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_LOGO_URL,
  NO_INDEX_PAGE
} from '../lib/constants/seo.constants'

import QueryProvider from "@/lib/providers/QueryProvider";
import ToasterS from "@/components/ui/Toaster/Toaster";

import "../styles/globals.scss"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: SITE_LOGO_URL
  },
  robots: NO_INDEX_PAGE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable}`}
      >
        <QueryProvider>
          {children}
          <ToasterS/>
        </QueryProvider>
      </body>
    </html>
  );
}
