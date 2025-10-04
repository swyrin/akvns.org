import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PRODUCTION_URL as string),
  title: "Arknights Vietnam Station",
  description: "For the Doctors, by the Doctors.",
  authors: [
    {
      name: "Trạm dừng chân chốn Terra",
      url: "https://facebook.com/terrastationvn",
    },
    {
      name: "Dreamchasers - IT Team",
      url: "https://github.com/arknights-vns",
    },
  ],
  openGraph: {
    url: process.env.PRODUCTION_URL,
    title: "Arknights Vietnam Station",
    siteName: "Arknights Vietnam Station",
    description: "For the Doctors, by the Doctors.",
    countryName: "Vietnam",
    locale: "vi-VN",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
