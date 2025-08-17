import React, { useEffect } from 'react';
import { ModalWindow } from '../../../features/modalWindow';
import { setEmailSignError, setPasswordSignError, setErrorText as setAuthErrorText } from '../../../features/authForm/model/authSlice';
import { setEmailRegError, setPasswordRegError, setPasswordAgainRegError, setErrorText as setRegErrorText } from '../../../features/regForm/model/regSlice';
import { types } from '../config/authModalTypes';
import { useDispatch, useSelector } from 'react-redux';

const AuthModal = ({...props}) => {
	const type = useSelector(state => state.modal.type);
	const showModal = useSelector(state => state.modal.show);

	const dispatch = useDispatch();

	useEffect(() => {
		if(showModal === false) {
			const timeout = setTimeout(() => {
				dispatch(setEmailSignError(false));
				dispatch(setPasswordSignError(false));
				dispatch(setEmailRegError(false));
				dispatch(setPasswordRegError(false));
				dispatch(setPasswordAgainRegError(false));
				dispatch(setAuthErrorText(""));
				dispatch(setRegErrorText(""));
				dispatch(setVisibility({type: "", show: false}));
			}, 350);
			return () => clearTimeout(timeout);
		}
	}, [showModal])

	return (
		<ModalWindow {...props}>
			{types[type]}
		</ModalWindow>
	)
}

export default AuthModal;