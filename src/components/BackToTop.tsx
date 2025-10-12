"use client";

import { clsx } from "clsx";
import { ArrowUpToLine } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function BackToTop() {
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = useCallback(() => {
        window.scroll({
            left: 0,
            top: 0,
        });
    }, []);

    useEffect(() => {
        const scrollHandle = function () {
            if (window.pageYOffset >= 25) {
                setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };

        window.addEventListener("scroll", scrollHandle);

        return () => window.removeEventListener("scroll", scrollHandle);
    }, []);

    return (
        <Button
            aria-label={"back-to-top"}
            className={clsx("right-4 bottom-4 bg-primary", showTopButton && "fixed", !showTopButton && "hidden")}
            onClick={goToTop}
            size={"icon-lg"}
        >
            <ArrowUpToLine />
        </Button>
    );
}
