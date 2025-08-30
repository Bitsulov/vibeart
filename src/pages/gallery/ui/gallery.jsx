import React from 'react';
import classes from "./gallery.module.css";
import { GalleryList } from 'widgets/galleryList';
import { PageTitle } from "widgets/pageTitle";
import { useQueryParam } from 'shared/hooks/useQueryParam';
import { galleryPostsMock } from 'entities/post';
import { Layout } from "widgets/layout";

const Gallery = () => {
	const search = useQueryParam("search");
	
	return (
		<Layout>
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
