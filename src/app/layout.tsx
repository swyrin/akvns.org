import {
  Quicksand as VNS_Font,
  Geist_Mono as VNS_Font_Mono,
} from "next/font/google";
import { TerraTheme } from "@/components/TerraTheme";

import "./globals.css";

const font = VNS_Font({
  variable: "--font-vns",
  subsets: ["latin"],
});

const fontMono = VNS_Font_Mono({
  variable: "--font-vns-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.variable} ${fontMono.variable} antialiased`}>
        <TerraTheme>{children}</TerraTheme>
      </body>
    </html>
  );
}
