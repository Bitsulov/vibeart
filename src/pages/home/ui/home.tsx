import classes from "./home.module.scss";
import { AuthModal } from "widgets/authModal/index.js";
import { WelcomeMain } from "widgets/welcomeMain/index.js";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Home = () => {
    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.home}>
                <AuthModal />
                <WelcomeMain />
            </main>
        </Layout>
    );
};

export { Home };
