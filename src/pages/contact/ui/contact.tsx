import classes from "./contact.module.scss";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { ContactSection } from "widgets/contactSection/index.js";

const Contact = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.contact}>
                <ContactSection />
            </main>
        </Layout>
    );
};

export { Contact };
