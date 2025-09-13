import { useQueryParam } from "shared/hooks/useQueryParam.jsx";

export const useGetErrorCode = () => {
    return useQueryParam("code") ?? 404;
};
