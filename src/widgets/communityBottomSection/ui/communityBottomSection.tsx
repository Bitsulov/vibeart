import type React from "react";
import { useDispatch } from "react-redux";
import { TagList } from "features/tagList/index.js";
import classes from "./communityBottomSection.module.scss";
import { AlbumList } from "widgets/albumList/index.js";
import { ProfilePostList } from "widgets/profilePostList/index.js";
import type { AlbumType } from "entities/album/index.js";
import type { PostType } from "entities/post/index.js";
import type { UserType } from "entities/user/index.js";
import type { TagType } from "entities/tag/index.js";
import type { countriesRu } from "shared/lib/countriesRu.js";
import { CommunityAdminsList } from "features/communityAdminsList/index.js";
import { CommunityCountriesList } from "features/communityCountriesList/index.js";
import { checkDateYear } from "shared/lib/dates.js";
import { openMoreInfoHandler } from "../model/openMoreInfoHandler.js";

interface CommunityBottomSectionPropsType {
    description: string;
    selectedAlbum: number;
    setSelectedAlbum: React.Dispatch<React.SetStateAction<number>>;
    albums: AlbumType[];
    postList: PostType[];
    admins: UserType[];
    tags: TagType[];
	date: string;
    countries: (typeof countriesRu)[number][] | "Весь мир";
}

const CommunityBottomSection = ({
    description,
    admins,
    albums,
    postList,
    countries,
    tags,
    selectedAlbum,
    setSelectedAlbum,
	date,
    ...props
}: CommunityBottomSectionPropsType) => {
	const dispatch = useDispatch();

    return (
        <section className={classes.communityBottom} {...props}>
            <div className={classes.communityMain}>
                <div className={classes.descriptionWrapper}>
                    <h3 className={classes.descriptionTitle}>Описание</h3>
                    <p className={classes.descriptionText}>{description}</p>
					<button onClick={e => openMoreInfoHandler(e, dispatch)} className={classes.moreButton}>Подробнее...</button>
                </div>
                <div className={classes.adminsWrapper}>
                    <h3 className={classes.adminsTitle}>Администраторы</h3>
                    <CommunityAdminsList adminsList={admins} />
                </div>
                <AlbumList albumList={albums} selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
                <ProfilePostList posts={postList} />
            </div>
            <div className={classes.communityAbout}>
                <h2 className={classes.aboutTitle}>О сообществе</h2>
				<p className={classes.createdAt}>Создано: {checkDateYear(date)}</p>
                <h3 className={classes.aboutSubtitle}>Страны:</h3>
                <CommunityCountriesList countriesList={countries} />
				<h3 className={classes.tagsTitle}>Теги:</h3>
                <TagList tags={tags} />
            </div>
        </section>
    );
};

export { CommunityBottomSection };
