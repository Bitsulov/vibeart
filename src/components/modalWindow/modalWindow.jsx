import React from 'react';

const ModalWindow = ({children, ...props}) => {
	return (
		<div {...props}>
			{children}
		</div>
	)
}

export default ModalWindow;