import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classes from "./albumList.module.css";
import { AlbumItem } from 'features/albumItem';
import { AlbumListButtonLeft, AlbumListButtonRight } from 'features/albumListSliderButtons';

const AlbumList = ({albumList, selectedAlbum, setSelectedAlbum, ...props}) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const swiperRef = useRef(null);

	return (
		<div className={classes.posts__albums} {...props}>
			<AlbumListButtonLeft ref={prevRef} swiper={swiperRef} />
			<Swiper
				spaceBetween={10}
				slidesPerView="auto"
				// onSlideChange={() => {}}
				className={classes.swiperAlbums}
				navigation={{
					nextEl: nextRef.current,
					prevEl: prevRef.current,
				}}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				// onBeforeInit={(swiper) => {
				// 	swiperRef.current = swiper;
				// }}
			>
				{albumList.map(album => {
					const isActive = selectedAlbum === album.id ? true : false;
					return (
						<SwiperSlide
							className={classes.slideAlbum}
							key={`slide${album.id}`}
						>
							<AlbumItem
								id={album.id}
								name={album.name}
								key={`album${album.id}`}
								isActive={isActive}
								setSelectedAlbum={setSelectedAlbum}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
			<AlbumListButtonRight ref={nextRef} swiper={swiperRef} />
		</div>
	)
}

export { AlbumList };
