import { useState } from "react";
import classes from "./profile.module.scss";
import { subscriptionMock } from "entities/subscription/index.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserInfo } from "entities/user/index.js";
import { AlbumList } from "widgets/albumList/index.js";
import { ProfilePostList } from "widgets/profilePostList/index.js";
import { ProfileUserInfo } from "widgets/profileUserInfo/index.js";
import { userProfileMock } from "entities/user/index.js";
import { Layout } from "widgets/layout/index.js";
import { profileAlbumsWithPostsMock } from "entities/albumsWithPosts/index.js";
import { profileAlbumsMock } from "entities/album/index.js";
import { profilePostsMock, type PostType } from "entities/post/index.js";
import { useLoadPageStatus } from "entities/pageStats/index.js";

const Profile = () => {

    if (!profileAlbumsMock[0]) return;

    const isPageLoaded = useLoadPageStatus();

    const [selectedAlbum, setSelectedAlbum] = useState(profileAlbumsMock[0].id);
    const currentPostList = profileAlbumsWithPostsMock
        .filter(i => i.albumId === selectedAlbum)
        .map(i => profilePostsMock.find(post => post.id === i.postId))
        .filter((post): post is PostType => post !== undefined);

    const profileId = useParams().profileId;
    const userInfo = useSelector(selectUserInfo);
    const isOwnProfile = Boolean(profileId && +profileId === userInfo.id);
    const [isSubscribe, setIsSubscribe] = useState(subscriptionMock.value);

    return (
        <Layout pageStatus={isPageLoaded}>
            <main className={classes.profile}>
                <ProfileUserInfo
                    srcImg={userProfileMock.srcImg}
                    fullName={`${userProfileMock.firstName} ${userProfileMock.secondName}`}
                    userName={userProfileMock.userName}
                    description={userProfileMock.description}
                    subscribers={userProfileMock.subscribers}
                    subscribes={userProfileMock.subscribes}
                    works={userProfileMock.works}
                    isSubscribe={isSubscribe}
                    setIsSubscribe={setIsSubscribe}
                    isOwnProfile={isOwnProfile}
                />
                <section className={classes.posts}>
                    <AlbumList
                        albumList={profileAlbumsMock}
                        selectedAlbum={selectedAlbum}
                        setSelectedAlbum={setSelectedAlbum}
                    />
                    <ProfilePostList posts={currentPostList} />
                </section>
            </main>
        </Layout>
    );
};

export { Profile };
