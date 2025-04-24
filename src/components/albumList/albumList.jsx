import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "./albumListDisabledButtons.css";

import classes from "./albumList.module.css";
import AlbumItem from '../albumItem/albumItem';
import SliderNavButton from '../sliderNavButton/sliderNavButton';

const AlbumList = ({albumList, selectedAlbum, setSelectedAlbum, ...props}) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const swiperRef = useRef(null);

	return (
		<div className={classes.posts__albums}>
			<SliderNavButton type={"prev"} ref={prevRef} swiper={swiperRef} />
			<Swiper
				spaceBetween={10}
				slidesPerView="auto"
				// onSlideChange={() => {}}
				className={classes.swiperAlbums}
				navigation= {{
					nextEl: prevRef.current,
					prevEl: nextRef.current,
				}}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				// onBeforeInit={(swiper) => {
				// 	swiperRef.current = swiper;
				// }}
			>
				{albumList.map((album) => 
					<SwiperSlide
						className={classes.slideAlbum}
						key={album.key}
					>
						<AlbumItem
							album={album}
							key={album.key}
							isActive={selectedAlbum === album.key - 1 ? true : false}
							onClick={() => {
								setSelectedAlbum(album.key - 1);
							}}
							{...props}
						/>
					</SwiperSlide>
				)}
			</Swiper>
			<SliderNavButton type={"next"} ref={nextRef} swiper={swiperRef} />
		</div>
	)
}

export default AlbumList;