import classes from "./gallery.module.scss";
import { GalleryList } from "widgets/galleryList/index.js";
import { PageTitle } from "widgets/pageTitle/index.js";
import { useQueryParam } from "shared/hooks/useQueryParam.js";
import { galleryPostsMock } from "entities/post/index.js";
import { Layout } from "widgets/layout/index.js";
import { useLoadPageStatus } from "entities/pageStats/hooks/useLoadPageStatus.js";
import { useTranslation } from "react-i18next";

const Gallery = () => {
	const { t } = useTranslation();

    const search = useQueryParam("search");

    const isPageLoaded = useLoadPageStatus();

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.gallery}>
                <div className={classes.gallery__container}>
                    <PageTitle title={t("Gallery")} />
                    <GalleryList postsList={galleryPostsMock} queryText={search} />
                </div>
            </main>
        </Layout>
    );
};

export { Gallery };
