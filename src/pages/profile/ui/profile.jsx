import React, { useState } from 'react';
import classes from "./profile.module.css";
import { subscriptionMock } from 'entities/subscription';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUserInfo } from 'entities/user/model/selectors';
import { AlbumList } from "widgets/albumList";
import { ProfilePostList } from "widgets/profilePostList";
import { ProfileUserInfo } from 'widgets/profileUserInfo';
import { userProfileMock } from 'entities/user/const/mockConst';
import { Layout } from "widgets/layout";
import { profileAlbumsWithPostsMock } from 'entities/albumsWithPosts';
import { profileAlbumsMock } from 'entities/album';
import { profilePostsMock } from 'entities/post/const/mockConst';

const Profile = () => {
	const [selectedAlbum, setSelectedAlbum] = useState(profileAlbumsMock[0].id);
	const currentPostList = profileAlbumsWithPostsMock
		.filter(i => i.albumId === selectedAlbum)
		.map(i => profilePostsMock.find(post => post.id === i.postId));

	const { profileId } = useParams("profileId");
	const userInfo = useSelector(selectUserInfo);
	const isOwnProfile = profileId == userInfo.id;
	const [isSubscribe, setIsSubscribe] = useState(subscriptionMock.value);

  	return (
		<Layout>
			<main className={classes.profile}>
				<ProfileUserInfo 
					srcImg={userProfileMock.srcImg}
					fullName={`${userProfileMock.firstName} ${userProfileMock.secondName}`}
					userName={userProfileMock.userName}
					description={userProfileMock.description}
					subscribers={userProfileMock.subcribers}
					subscribes={userProfileMock.subcribes}
					works={userProfileMock.works}
					isSubscribe={isSubscribe}
					setIsSubscribe={setIsSubscribe}
					isOwnProfile={isOwnProfile}
				/>
				<section className={classes.posts}>
					<AlbumList albumList={profileAlbumsMock} selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
					<ProfilePostList posts={currentPostList} />
				</section>
			</main>
		</Layout>
  	)
}

export { Profile };
