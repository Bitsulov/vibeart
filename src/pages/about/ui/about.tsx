import classes from "./about.module.scss";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { AboutInner } from "widgets/aboutInner/index.js";

const About = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.about}>
                <AboutInner />
            </main>
        </Layout>
    );
};

export { About };
