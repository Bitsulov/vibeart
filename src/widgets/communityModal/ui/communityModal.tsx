import { CommunityCountriesList } from 'features/communityCountriesList/index.js';
import { ModalWindow } from 'features/modalWindow/index.js'
import { TagList } from 'features/tagList/index.js';
import { checkDateYear } from 'shared/lib/dates.js';
import classes from "./communityModal.module.scss";
import type { TagType } from 'entities/tag/index.js';
import type { countriesRu } from 'shared/lib/countriesRu.js';

interface CommunityModalPropsType {
	countriesList: (typeof countriesRu)[number][] | "Весь мир";
	tagsList: TagType[];
	date: string
}

const CommunityModal = ({countriesList, tagsList, date}: CommunityModalPropsType) => {
	return (
		<ModalWindow>
			<h2 className={classes.aboutTitle}>О сообществе:</h2>
			<p className={classes.createdAt}>Создано {checkDateYear(date)}</p>
			<h3 className={classes.aboutSubtitle}>Страны:</h3>
			<CommunityCountriesList countriesList={countriesList} />
			<h3 className={classes.tagsTitle}>Теги:</h3>
			<TagList tags={tagsList} />
		</ModalWindow>
	)
}

export { CommunityModal };
