import React, { useEffect, useState } from 'react';
import classes from "./modalWindow.module.css";
import { closeModalHandler } from '../model/closeModalHandler';
import { modalClickHandler } from '../model/modalClickHandler';
import { useSelector, useDispatch } from 'react-redux';

const ModalWindow = ({children, ...props}) => {
	const [modalClasses, setModalClasses] = useState(classes.modal__overlay);
	const [loaded, setLoaded] = useState(false);

	const showModal = useSelector(state => state.modal.show);

	const dispatch = useDispatch();

	useEffect(() => {
		if(loaded)
			if(showModal) {
				setModalClasses(`${classes.modal__overlay} ${classes.show}`);
			} else {
				setModalClasses(`${classes.modal__overlay} ${classes.hide}`);
				setTimeout(() => {
					setModalClasses(classes.modal__overlay);
				}, 300);
			}
		else {
			setLoaded(true);
		}
	}, [showModal])

	return (
		<div
			className={modalClasses}
			onClick={(e) => closeModalHandler(e, dispatch)}
		>
			<div
				className={classes.modal}
				onClick={modalClickHandler}
				{...props}
			>
				{children}
			</div>
			<div
				className={classes.modal__close}
				onClick={(e) => closeModalHandler(e, dispatch)}
			>×</div>
		</div>
	)
}

export { ModalWindow };
