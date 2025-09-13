import classes from "./about.module.css";
import { InDevelopment } from "widgets/inDevelopment/index.js";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const About = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.about}>
                <InDevelopment />
            </main>
        </Layout>
    );
};

export { About };
