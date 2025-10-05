import VNS_Logo from "@public/VNS.svg";
import { Menu } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links: { label: string; href: Route }[] = [
    { label: "Về chúng mình", href: "#about" },
    { label: "Dự án", href: "#projects" },
    { label: "Nhân sự", href: "#human-resources" },
    { label: "Truyện tại Trạm", href: "#translations" },
];

export default function NavigationBar() {
    return (
        <header
            className={
                "flex sticky top-0 z-50 h-18 w-full drop-shadow-neutral-600 drop-shadow-2xl backdrop-blur-lg justify-between"
            }>
            <div className={"flex"}>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="ml-4 self-center lg:hidden" size="icon" variant="outline">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="max-w-2/3!" side="left">
                        <SheetHeader>
                            <SheetTitle>Arknights Vietnam Station</SheetTitle>
                            <SheetDescription>Các đường link trong website.</SheetDescription>
                        </SheetHeader>
                        <div className="mt-2 ml-4 grid gap-2 py-6">
                            {links.map((entry) => {
                                return (
                                    <Link key={entry.label} href={entry.href}>
                                        {entry.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
                <Link className="ml-4 md:ml-12 flex items-center gap-4" href="/" prefetch={false}>
                    <Image alt="VNS_Logo_Header" className="size-[50px] dark:invert" src={VNS_Logo} />
                </Link>
            </div>
            <nav className="hidden gap-6 lg:flex place-content-center-safe justify-evenly flex-wrap w-1/2">
                {links.map((entry) => {
                    return (
                        <Link key={entry.label} href={entry.href}>
                            {entry.label}
                        </Link>
                    );
                })}
            </nav>
            <div className="flex items-center space-x-2">
                <ThemeSwitcher />
            </div>
        </header>
    );
}
