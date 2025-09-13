import type React from "react";
import classes from "./linkWrapper.module.css";
import { Link } from "react-router-dom";

interface LinkWrapperType {
    href: string | null;
    children: React.ReactNode;
    className: string;
}

const LinkWrapper = ({ href, children, className, ...props }: LinkWrapperType) => {
    return (
        <>
            {href ? (
                <Link to={href} className={className} {...props}>
                    {children}
                </Link>
            ) : (
                <div className={`${classes.resetActivity} ${className}`} {...props}>
                    {children}
                </div>
            )}
        </>
    );
};

export { LinkWrapper };
