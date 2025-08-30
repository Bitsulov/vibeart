import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setUserInfo } from 'entities/user';
import { userMock } from 'entities/user/const/mockConst';

const InitProvider = ({children}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setUserInfo(userMock));
	}, [dispatch]);

	return (
		<>
			{children}
		</>
	)
}

export { InitProvider };
