import { useTranslation } from "react-i18next";
import classes from "./inDevelopment.module.scss";

const InDevelopment = () => {
	const { t } = useTranslation();

    return (
        <section className={classes.inDevelopment}>
            <h1 className={classes.inDevelopment__title}>{t("oops")}</h1>
            <p className={classes.inDevelopment__text}>{t("inDevelopment")}</p>
        </section>
    );
};

export { InDevelopment };
