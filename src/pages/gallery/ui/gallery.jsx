import React, { useEffect } from 'react';
import classes from "./gallery.module.css";
import { GalleryList } from 'widgets/galleryList';
import { PageTitle } from "widgets/pageTitle";
import { useQueryParam } from 'shared/hooks/useQueryParam';
import { galleryPostsMock } from 'entities/post';
import { Layout } from "widgets/layout";
import { useLoadPageStatus } from 'entities/pageStats/hooks/useLoadPageStatus';

const Gallery = () => {
	const search = useQueryParam("search");

	const isPageLoaded = useLoadPageStatus();
	
	return (
		<Layout pageStatus={isPageLoaded}>
			<main className={classes.gallery}>
				<div className={classes.gallery__container}>
					<PageTitle title="Галерея" />
					<GalleryList postsList={galleryPostsMock} queryText={search} />
				</div>
			</main>
		</Layout>
	)
}

export { Gallery };
