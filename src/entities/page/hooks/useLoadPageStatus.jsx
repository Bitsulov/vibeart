import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoaded } from '../model/selectors';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setIsLoaded } from '../model/pageSlice';

export const useLoadPageStatus = () => {
	const isLoadedPage = useSelector(selectIsLoaded);
	const location = useLocation();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsLoaded(false));
	  }, [location]);
	
	  useEffect(() => {
		dispatch(setIsLoaded(true));
	  }, [location]);

	return isLoadedPage;
}