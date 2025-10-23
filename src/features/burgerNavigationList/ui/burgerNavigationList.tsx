import { useTranslation } from "react-i18next";
import classes from "./burgerNavigationList.module.scss";
import { Link } from "react-router-dom";

interface BurgerNavigationListProps {
    options: {
        textKey: string;
        haveCounter: boolean;
        counter?: number;
        href: string;
    }[];
}

const BurgerNavigationList = ({ options }: BurgerNavigationListProps) => {
	const { t } = useTranslation();

    return (
        <>
            {options.map((option, index) => (
                <Link to={option.href} className={classes.burger__link} key={index + 1}>
                    {option.haveCounter ? <span className={classes.burgerNoticeLen}>{option.counter}</span> : ""}
                    {t(option.textKey)}
                </Link>
            ))}
        </>
    );
};

export default BurgerNavigationList;
