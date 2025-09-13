import { useSelector, useDispatch } from "react-redux";
import { selectIsLoaded } from "../model/selectors.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setIsLoaded } from "../model/pageStatsSlice.js";

export const useLoadPageStatus = () => {
    const isLoadedPage = useSelector(selectIsLoaded);
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoaded(false));
    }, [location]);

    return isLoadedPage;
};
