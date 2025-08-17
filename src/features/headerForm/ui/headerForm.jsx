import React, { useEffect } from 'react';
import classes from "./headerForm.module.css";
import searchIcon from "../../../shared/icons/search-white.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setFormRef } from '../model/headerFormSlice';
import { headerFormHandler } from '../model/headerFormHandler';
import { headerInputHandler } from '../model/headerInputHandler';
import { headerButtonHandler } from '../model/headerButtonHandler';

const HeaderForm = () => {
	const dispatch = useDispatch();
	const searchRef = useRef(null);
	const searchText = useSelector(state => state.headerForm.searchText);

	useEffect(() => {
		dispatch(setFormRef(searchRef));
	}, [])

	return (
		<form
			onSubmit={headerFormHandler}
			className={classes.header__form}
			action="#"
			method="get"
		>
			<input
				onChange={headerInputHandler}
				value={searchText}
				className={classes.header__search}
				type="text"
				placeholder="Художник, пост или тег..."
			></input>
			<Link
				ref={searchRef}
				to={`/gallery?search=${searchText}`}
				className={classes.header__submit}
				onClick={headerButtonHandler}
			>
				<img src={searchIcon} alt="Найти" className={classes.header__submitImg}></img>
			</Link>
		</form>
	)
}

export default HeaderForm;