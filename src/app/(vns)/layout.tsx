import type { ReactNode } from "react";
import FatFooter from "@/components/FatFooter";
import NavigationBar from "@/components/NavigationBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <NavigationBar />
            <div className="max-w-screen min-h-screen scroll-smooth">{children}</div>
            <FatFooter />
        </>
    );
}
