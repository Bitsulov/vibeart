import { useState } from "react";
import { Layout } from "widgets/layout/index.js";
import classes from "./community.module.scss";
import { useLoadPageStatus } from "entities/pageStats/index.js";
import { communitieMock } from "entities/community/const/mockConst.js";
import { userCommunityMock } from "entities/user/index.js";
import { communityWithAdminsMock } from "entities/communityWithAdmins/index.js";
import { communityPostsMock } from "entities/post/index.js";
import { communityAlbumsWithPostsMock } from "entities/albumsWithPosts/index.js";
import { CommunityTopSection } from "widgets/communityTopSection/index.js";
import { CommunityBottomSection } from "widgets/communityBottomSection/index.js";
import { communityAlbumsMock } from "entities/album/index.js";
import { communityTagsMocks } from "entities/tag/index.js";
import { CommunityModal } from "widgets/communityModal/index.js";

export const Community = () => {
    const isPageLoaded = useLoadPageStatus();

    const [selectedAlbum, setSelectedAlbum] = useState(1);
    const admins = userCommunityMock.filter(user => communityWithAdminsMock.find(i => i.AdminId === user.id));
    const currentPostList = communityPostsMock.filter(post =>
        communityAlbumsWithPostsMock.find(i => selectedAlbum === i.albumId && i.postId === post.id)
    );

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.community}>
                <CommunityModal
                    countriesList={communitieMock.countries}
                    date={communitieMock.date}
                    tagsList={communityTagsMocks}
                />
                <CommunityTopSection
                    title={communitieMock.title}
                    srcImg={communitieMock.srcImg}
                    userName={communitieMock.userName}
                    subscribers={communitieMock.subscribers}
                    works={communitieMock.works}
                />
                <CommunityBottomSection
                    description={communitieMock.description}
                    selectedAlbum={selectedAlbum}
                    setSelectedAlbum={setSelectedAlbum}
                    albums={communityAlbumsMock}
                    postList={currentPostList}
                    admins={admins}
                    tags={communityTagsMocks}
                    date={communitieMock.date}
                    countries={communitieMock.countries}
                />
            </main>
        </Layout>
    );
};
