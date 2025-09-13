import classes from "./header.module.scss";
import logoBlack from "shared/icons/logo-black.png";
import { Burger } from "features/burger/index.js";
import { Link } from "react-router-dom";
import { HeaderForm } from "features/headerForm/index.js";
import { HeaderNavigationDesktop } from "features/headerNavigationDesktop/index.js";
import { selectUserInfo } from "entities/user/model/selectors.js";
import { useSelector } from "react-redux";

const Header = () => {
    const userInfo = useSelector(selectUserInfo);

    return (
        <header>
            <Link className={classes.header__logo} to="/gallery">
                <img src={logoBlack} alt="logo" className={classes.header__logoImg}></img>
                <span className={classes.header__title}>VibeArt</span>
            </Link>
            <HeaderForm />
            <HeaderNavigationDesktop avatar={userInfo.srcImg} userId={userInfo.id} />
            <Burger />
        </header>
    );
};

export { Header };
