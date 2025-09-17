import React, { useState, useEffect } from "react";
import classes from "./communitySearchForm.module.scss";
import { useWindowWidth } from "shared/hooks/useWindowWidth.js";
import type { CommunityType } from "entities/community/index.js";
import { globalOnChangeHandler } from "shared/lib/globalOnChangeHandler.js";
import { closeSearchHandler } from "../model/closeSearchHandler.js";
import { searchButtonHandler } from "../model/searchButtonHandler.js";

interface CommunitySearchFormPropsType {
    fullCommunitiesList: CommunityType[];
    setCommunitiesList: React.Dispatch<React.SetStateAction<CommunityType[]>>;
}

export const CommunitySearchForm = ({ fullCommunitiesList, setCommunitiesList }: CommunitySearchFormPropsType) => {
    const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
    const [currentConstSearchText, setCurrentConstSearchText] = useState<string>("Найти");
    const [searchText, setSearchText] = useState<string>("Найти");
    const [labelText, setLabelText] = useState<string>("Сообщество");
    const [searchTextValue, setSearchTextValue] = useState<string>("");
    const width = useWindowWidth();

    useEffect(() => {
        width < 360 ? setCurrentConstSearchText("Найти") : setCurrentConstSearchText("Найти сообщество");
        width < 500 ? setLabelText("Сообщество") : setLabelText("Название, описание, тег");
    }, [width]);

    useEffect(() => {
        isOpenSearch ? setSearchText("") : setSearchText(currentConstSearchText);
    }, [isOpenSearch, currentConstSearchText]);

    return (
        <form
            onSubmit={e => 
                searchButtonHandler(
                    e,
                    searchTextValue,
                    fullCommunitiesList,
                    isOpenSearch,
                    setIsOpenSearch,
                    setCommunitiesList
                )
            }
			onKeyDown={e => {
				if (e.key === "Enter") {
				  	searchButtonHandler(
						e,
						searchTextValue,
						fullCommunitiesList,
						isOpenSearch,
						setIsOpenSearch,
						setCommunitiesList
				  	);
				}
			}}
            className={classes.communitySearchWrapper}
        >
            <input
                id="searchCommunity"
                value={searchTextValue}
                onChange={e => globalOnChangeHandler(e, setSearchTextValue)}
                type="text"
                className={isOpenSearch ? `${classes.search} ${classes.open}` : classes.search}
            ></input>
            <label htmlFor="searchCommunity" className={classes.label}>
                {labelText}
            </label>
            <button
                onClick={e =>
                    closeSearchHandler(e, fullCommunitiesList, setSearchTextValue, setIsOpenSearch, setCommunitiesList)
                }
                className={classes.clearSearch}
            >
                ×
            </button>
            <input
                type="submit"
                value={searchText}
                className={classes.searchButton}
            ></input>
        </form>
    );
};
