import { useEffect, useRef } from "react";
import classes from "./burger.module.scss";
import { toggleBurgerHandler } from "../model/toggleBurgerHandler.js";
import { useDispatch, useSelector } from "react-redux";
import { selectBURGEROPENLINKSHEIGHT, selectBurgerLinksHeight, selectIsBurgerOpen } from "../model/selectors.js";
import { setBurgerOpenLinksHeight, setBurgerLinksHeight, setIsBurgerOpen } from "../model/BurgerSlice.js";
import { navigationBurgerClickHandler } from "../model/navigationBurgerClickHandler.js";
import { BurgerNavigationList } from "../../burgerNavigationList/index.js";
import { useBurgerNavigationOptions } from "../config/useBurgerNavigationOptions.jsx";
import { useLocation } from "react-router-dom";

const Burger = ({ ...props }) => {
    const location = useLocation();
    const isBurgerOpen = useSelector(selectIsBurgerOpen);
    const burgerLinksHeight = useSelector(selectBurgerLinksHeight);
    const BURGEROPENLINKSHEIGHT = useSelector(selectBURGEROPENLINKSHEIGHT);
    const burgerMenuRef = useRef<HTMLElement>(null);

    const optionsRes = useBurgerNavigationOptions();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBurgerOpenLinksHeight(burgerMenuRef.current?.scrollHeight));
        dispatch(setBurgerLinksHeight(0));
    }, []);

    useEffect(() => {
        dispatch(setIsBurgerOpen(false));
    }, [location.pathname]);

    return (
        <div
            className={
                isBurgerOpen ? `${classes.header__burger} ${classes.header__burgerActive}` : classes.header__burger
            }
            onClick={e => toggleBurgerHandler(e, dispatch, burgerLinksHeight, BURGEROPENLINKSHEIGHT)}
            {...props}
        >
            <div className={classes.burgerEl}></div>
            <div className={classes.burgerEl}></div>
            <div className={classes.burgerEl}></div>
            <nav
                style={BURGEROPENLINKSHEIGHT === null ? {} : { height: burgerLinksHeight + "px" }}
                className={classes.burger__links}
                ref={burgerMenuRef}
                onClick={navigationBurgerClickHandler}
            >
                <BurgerNavigationList options={optionsRes} />
            </nav>
        </div>
    );
};

export { Burger };
