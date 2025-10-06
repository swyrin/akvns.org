import type { Metadata, Viewport } from "next";
import { Quicksand as VNS_Font, Geist_Mono as VNS_Font_Mono } from "next/font/google";
import type React from "react";
import { TerraTheme } from "@/components/TerraTheme";

import "./globals.css";

const font = VNS_Font({
    variable: "--font-vns",
    subsets: ["latin", "vietnamese"],
});

const fontMono = VNS_Font_Mono({
    variable: "--font-vns-mono",
    subsets: ["latin"],
});

const prod_url = process.env.PRODUCTION_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(prod_url),
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
        url: prod_url,
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
    themeColor: "#fe0606",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${font.variable} ${fontMono.variable} antialiased font-sans`}>
                <TerraTheme>{children}</TerraTheme>
            </body>
        </html>
    );
}
