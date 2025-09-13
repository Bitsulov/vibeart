import classes from "./contact.module.css";
import { InDevelopment } from "widgets/inDevelopment/index.js";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Contact = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.contact}>
                <InDevelopment />
            </main>
        </Layout>
    );
};

export { Contact };
