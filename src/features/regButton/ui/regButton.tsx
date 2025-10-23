import classes from "./regButton.module.scss";
import { regButtonHandler } from "../model/regButtonHandler.js";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const RegButton = ({ ...props }) => {
	const { t } = useTranslation();

    const dispatch = useDispatch();

    return (
        <button className={classes.regButton} onClick={e => regButtonHandler(e, dispatch)} {...props}>
            {t("Register")}
        </button>
    );
};

export { RegButton };
