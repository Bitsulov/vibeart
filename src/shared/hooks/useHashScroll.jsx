import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHashScroll = (yScroll=0, behavior="instant") => {
	const location = useLocation();
	useEffect(() => {
		if(location.hash) {
			const element = document.getElementById(location.hash.slice(1));
			element?.scrollIntoView({behavior: behavior});
			globalThis.scrollBy(0, yScroll);
		}
	}, [location])
}