import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type behaviorType = "auto" | "smooth";

export const useHashScroll = (yScroll: number = 0, behavior: behaviorType = "auto") => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            element?.scrollIntoView({ behavior: behavior });
            globalThis.scrollBy(0, yScroll);
        }
    }, [location]);
};
