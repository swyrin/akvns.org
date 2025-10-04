"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import type { ComponentProps } from "react";

export function TerraTheme({ children }: ComponentProps<typeof ThemeProvider>) {
  const pathname = usePathname();

  const forcedThemeMap: { [route: string]: "dark" | "light" } = {};

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme={forcedThemeMap[pathname]}
    >
      {children}
    </ThemeProvider>
  );
}
