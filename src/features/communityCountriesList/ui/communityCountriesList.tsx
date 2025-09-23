import type { countriesRu } from "shared/lib/countriesRu.js";
import classes from "./communityCountriesList.module.scss";

interface CommunityCountriesListPropsType {
	countriesList: (typeof countriesRu)[number][] | "Весь мир";
}

const CommunityCountriesList = ({countriesList, ...props}: CommunityCountriesListPropsType) => {
	return (
		<ul className={classes.countryList} {...props}>
			{countriesList !== "Весь мир" ? (
				countriesList.map(country => (
					<li key={country} className={classes.countryItem}>
						{country}
					</li>
				))
			) : (
				<li className={classes.countryItem}>Весь мир</li>
			)}
		</ul>
	)
}

export { CommunityCountriesList };
