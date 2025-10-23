import type React from "react";
import classes from "./communitiesListOver.module.scss";
import type { CommunityType } from "entities/community/index.js";
import { CommunitySearchForm } from "features/communitySearchForm/index.js";
import { useTranslation } from "react-i18next";

interface CommunitiesListOverPropsType {
	fullCommunitiesList: CommunityType[];
    setCommunitiesList: React.Dispatch<React.SetStateAction<CommunityType[]>>;
}

export const CommunitiesListOver = ({ fullCommunitiesList, setCommunitiesList, ...props }: CommunitiesListOverPropsType) => {
	const { t } = useTranslation();

    return (
        <div className={classes.communitiesContainerTop} {...props}>
            <h1 className={classes.communitiesTitle}>{t("MyCommunities")}</h1>
			<CommunitySearchForm fullCommunitiesList={fullCommunitiesList} setCommunitiesList={setCommunitiesList} />
        </div>
    );
};
