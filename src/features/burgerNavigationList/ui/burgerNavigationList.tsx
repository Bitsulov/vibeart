import classes from "./burgerNavigationList.module.scss";
import { Link } from "react-router-dom";

interface BurgerNavigationListProps {
    options: {
        text: string;
        haveCounter: boolean;
        counter?: number;
        href: string;
    }[];
}

const BurgerNavigationList = ({ options }: BurgerNavigationListProps) => {
    return (
        <>
            {options.map((option, index) => (
                <Link to={option.href} className={classes.burger__link} key={index + 1}>
                    {option.haveCounter ? <span className={classes.burgerNoticeLen}>{option.counter}</span> : ""}
                    {option.text}
                </Link>
            ))}
        </>
    );
};

export default BurgerNavigationList;
