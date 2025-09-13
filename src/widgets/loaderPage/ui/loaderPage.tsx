import { useEffect, useState } from "react";
import classes from "./loaderPage.module.scss";
import { useLocation } from "react-router-dom";

interface LoaderPagePropsType {
    pageStatus: boolean;
}

const LoaderPage = ({ pageStatus, ...props }: LoaderPagePropsType) => {
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(true);
        // if (pageStatus) {
        //     const timer = setTimeout(() => {
        //         setIsVisible(false);
        //     }, 300);
        //     return () => clearTimeout(timer);
        // }
    }, [location.pathname, pageStatus]);
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

    return (
        <section className={`${classes.loader} ${isVisible ? classes.show : classes.hide}`}>
            <div className={classes.loader__round} {...props}></div>
        </section>
    );
};

export { LoaderPage };
