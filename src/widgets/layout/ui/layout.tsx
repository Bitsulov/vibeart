import type React from "react";
import classes from "./layout.module.css";
import { Header } from "../../header/index.js";
import { Footer } from "../../footer/index.js";
import { LoaderPage } from "../../loaderPage/index.js";
import { Notice } from "features/notice/index.js";

interface LayoutPropsType {
    children: React.ReactNode;
    pageStatus: boolean;
}

const Layout = ({ children, pageStatus }: LayoutPropsType) => {
    return (
        <div className={classes.layout}>
            <LoaderPage pageStatus={pageStatus} />
            <Notice />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export { Layout };
