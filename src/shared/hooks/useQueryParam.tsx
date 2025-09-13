import { useLocation } from "react-router-dom";

export const useQueryParam = (param: string) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    return query.get(param) || null;
};
