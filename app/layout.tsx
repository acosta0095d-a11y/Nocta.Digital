import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "nocta",
    template: "%s · nocta",
  },
  description:
    "En Nocta combinamos tecnología, creatividad y estrategia para llevar tu negocio al siguiente nivel.",
  applicationName: "nocta",
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
