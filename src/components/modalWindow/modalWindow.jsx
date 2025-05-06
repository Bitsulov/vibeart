import React, { useEffect, useState } from 'react';
import classes from "./modalWindow.module.css";

const ModalWindow = ({Component, propsModalContent, showModal, setShowModal, ...props}) => {
	const [modalClasses, setModalClasses] = useState(classes.modal__overlay);
	const [loaded, setLoaded] = useState(false);

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
			onClick={() => setShowModal(false)}
		>
			<div
				className={classes.modal}
				onClick={(e) => {e.stopPropagation()}}
				{...props}
			>
				{Component && <Component {...propsModalContent} />}
			</div>
			<div
				className={classes.modal__close}
				onClick={() => setShowModal(false)}
			>×</div>
		</div>
	)
}

export default ModalWindow;