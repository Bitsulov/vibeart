import { useLocation } from 'react-router-dom';

export const useQueryParam = (param) => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	return query.get(param) || null;
}