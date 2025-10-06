import FacebookLogo from "@public/facebook.svg";
import SteamLogo from "@public/steam.svg";
import VNS_Logo from "@public/VNS.svg";
import YoutubeLogo from "@public/youtube.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * "Em không đùa với anh đâu Tú, tên nó thật sự là Footer Béo."
 *
 * - giabao06 / John maimai
 */
export default function FatFooter() {
    return (
        <footer className="flex flex-col w-full bg-neutral-200 dark:bg-background min-h-72 justify-between shadow-sm shadow-primary">
            <div className="flex flex-col md:flex-row md:place-items-center-safe justify-evenly md:flex-1/2 gap-y-6">
                {/* Logo */}
                <div className="flex flex-row w-full md:w-fit justify-evenly md:flex-col [&_img]:dark:invert gap-4 mt-8">
                    <Image src={VNS_Logo} alt="VNS_Logo_Footer" className="self-center-safe" width={96} />
                    <div className="flex gap-x-2 place-items-center-safe my-4">
                        <Link href="https://www.facebook.com/terrastationvn">
                            <Image src={FacebookLogo} alt="FacebookLogo" width={32} />
                        </Link>
                        <div>/</div>
                        <Link href="https://www.youtube.com/@ArknightsVNS">
                            <Image src={YoutubeLogo} alt="YoutubeLogo" width={28} />
                        </Link>
                        <div>/</div>
                        <Link href="https://steamcommunity.com/groups/arknights_vietnam_station">
                            <Image src={SteamLogo} alt="SteamLogo" width={28} />
                        </Link>
                    </div>
                </div>
                {/* Contacts & stuffs. */}
                <div className="grid grid-cols-1 grid-rows-2 h-full gap-y-2 ml-8">
                    <div className="font-extrabold text-3xl self-end">Cộng đồng</div>
                    <div className="flex flex-col gap-y-1">
                        <div className="flex gap-x-2">
                            <Link href="https://discord.gg/arknights-vns">
                                Discord: <span className="font-bold">Arknights VNS</span>
                            </Link>
                            <ArrowUpRight size={18} className="self-center" />
                        </div>
                        <div className="flex gap-x-2">
                            <Link href="https://discord.gg/JrZaEVu5Hz">
                                Discord: <span className="font-bold">Phoenix Frontiers</span>
                            </Link>
                            <ArrowUpRight size={18} className="self-center" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-2 h-full gap-y-2 ml-8">
                    <div className="font-extrabold text-3xl self-end">Liên hệ</div>
                    <div className="flex flex-col gap-y-1">
                        <div>
                            <span className="font-bold">Email</span>:{" "}
                            <Link href="mailto:arknightsvns@gmail.com" className="font-mono">
                                arknightsvns@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center my-4 font-bold italic">
                ©{" "}
                <Link href="/" className="text-red-600 font-extrabold">
                    Arknights Vietnam Station
                </Link>
                , 2020-nay.
            </div>
        </footer>
    );
}
