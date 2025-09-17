import { Layout } from "widgets/layout/index.js";
import classes from "./communities.module.scss";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { CommunitiesListOver } from "widgets/communitiesListOver/index.js";
import { useState } from "react";
import { communitiesMock } from "entities/community/index.js";
import { CommunitiesList } from "widgets/communitiesList/index.js";

export const Communities = () => {
	const isPageLoaded = useLoadPageStatus();

	const [communitiesList, setCommunitiesList] = useState(communitiesMock);

	return (
		<Layout pageStatus={isPageLoaded}>
			<main className={classes.communities}>
				<section className={classes.communitiesContainer}>
					<CommunitiesListOver fullCommunitiesList={communitiesMock} setCommunitiesList={setCommunitiesList} />
					<CommunitiesList communitiesList={communitiesList} />
				</section>
			</main>
		</Layout>
	)
}
