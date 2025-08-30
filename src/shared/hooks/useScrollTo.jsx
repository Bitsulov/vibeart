import { useEffect } from "react";

export const useScrollTo = (elementRef, deps = [], behavior = "auto") => {
	useEffect(() => {
		elementRef.current?.scrollIntoView({behavior: behavior});
	}, deps);
}
