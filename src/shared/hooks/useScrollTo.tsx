import { useEffect } from "react";
import type React from "react";

type behaviorType = "auto" | "smooth";

export const useScrollTo = (
    elementRef: React.RefObject<HTMLElement | null | undefined>,
    deps: React.DependencyList = [],
    behavior: behaviorType = "auto"
) => {
    useEffect(() => {
        elementRef.current?.scrollIntoView({ behavior: behavior });
    }, deps);
};
