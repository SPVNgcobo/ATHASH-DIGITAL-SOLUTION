import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Athash Digital Solutions | From Idea to Institution",
  description:
    "We help South African businesses and institutions launch, modernise and grow through branding, technology and digital systems.",
  metadataBase: new URL("https://athash.co.za"),
  openGraph: {
    title: "Athash Digital Solutions | From Idea to Institution",
    description:
      "We help South African businesses and institutions launch, modernise and grow through branding, technology and digital systems.",
    type: "website",
    url: "https://athash.co.za",
    images: [
      {
        url: "https://athash.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Athash Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athash Digital Solutions | From Idea to Institution",
    description:
      "We help South African businesses and institutions launch, modernise and grow through branding, technology and digital systems.",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}