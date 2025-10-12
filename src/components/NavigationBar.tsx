import type { Route } from "next";

import VNS_Icon from "@public/VNS_Icon.svg";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import DiscordInfoCard from "@/components/DiscordInfoCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const links: { href: Route; label: string }[] = [
    { href: "#about", label: "Về chúng mình" },
    { href: "#projects", label: "Dự án" },
    { href: "#human-resources", label: "Nhân sự" },
    { href: "#translations", label: "Truyện tại Trạm" },
];

export default function NavigationBar() {
    return (
        <header className={"sticky top-0 z-50 flex h-18 w-full justify-between bg-background drop-shadow-2xl drop-shadow-neutral-400/15"}>
            <div className={"flex"}>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            aria-label={"burger-menu"}
                            className={"ml-4 self-center md:hidden"}
                            size={"icon"}
                            variant={"outline"}
                        >
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <SheetHeader>
                            <SheetTitle>Arknights Vietnam Station</SheetTitle>
                            <SheetDescription>Các đường link trong website.</SheetDescription>
                        </SheetHeader>
                        <div className={"mt-2 ml-4 grid gap-2 py-6"}>
                            {links.map((entry) => {
                                return (
                                    <Link href={entry.href} key={entry.label}>
                                        {entry.label}
                                    </Link>
                                );
                            })}
                        </div>
                        <SheetFooter className={"flex flex-row justify-start"}>
                            <ThemeSwitcher />
                            {/* <DiscordInfoCard /> */}
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                <Link className={"ml-4 flex items-center gap-4 md:ml-12"} href={"/"}>
                    <Image alt={"VNS_Logo_Header"} className={"size-[50px] dark:invert"} src={VNS_Icon} />
                </Link>
            </div>
            <NavigationMenu aria-label={"nav-bar"} className={"hidden gap-6 lg:flex"} viewport>
                <NavigationMenuList className={"gap-x-8"}>
                    {links.map((entry) => {
                        return (
                            <NavigationMenuItem key={entry.label}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link
                                        className={"relative inline-block after:absolute after:bottom-[-0.25em] after:left-1/2 after:h-[3px] after:w-0 after:-translate-x-1/2 after:bg-current after:transition-[width] after:duration-300 hover:after:w-full"}
                                        href={entry.href}
                                    >
                                        {entry.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
            <div className={"flex items-center space-x-2"}>
                {/* <div className={"hidden md:flex"}><DiscordInfoCard /></div> */}
                <ThemeSwitcher />
            </div>
        </header>
    );
}
