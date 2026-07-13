import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://nocta.digital";
const SITE_NAME = "NOCTA";
const TITLE = "NOCTA | Software, IA, Diseño y Marketing Digital";
const DESCRIPTION =
  "En NOCTA diseñamos, desarrollamos y automatizamos soluciones digitales para empresas mediante software, inteligencia artificial, diseño estratégico, producción audiovisual y marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "NOCTA",
    "software a medida",
    "inteligencia artificial",
    "diseño digital",
    "marketing digital",
    "branding",
    "desarrollo web",
    "producción audiovisual",
    "automatización",
    "agencias digitales",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/preview-latest.png",
        width: 1200,
        height: 630,
        alt: "NOCTA — soluciones digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/preview-latest.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans bg-black text-white antialiased`}
      >
        <SiteHeader />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
