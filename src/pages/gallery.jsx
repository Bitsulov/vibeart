import React, { useEffect, useRef, useState } from 'react';
import "../styles/gallery.css";
import GalleryList from '../components/galleryList/galleryList';
import Loader from '../components/loader/loader';

const Gallery = ({getNewNotice}) => {
	const [galleryList, setGalleryList] = useState([
		{id: 1, isLiked: false, likes: 0, reposts: 0, image: "/images/post1.jpg", date: "14.05.2025", title: "Сияние города1", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая картина в неоновом стиле"},
		{id: 2, isLiked: true, likes: 1, reposts: 1, image: "/images/post2.jpg", date: "13.05.2025", title: "Туман над рекой11", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Арт с городской эстетикой"},
		{id: 3, isLiked: false, likes: 0, reposts: 0, image: "/images/post3.jpeg", date: "14.05.2025", title: "Сияние города111", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая картина в неоновом стиле"},
		{id: 4, isLiked: true, likes: 1, reposts: 1, image: "/images/post2.jpg", date: "13.05.2025", title: "Туман над рекой1111", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифровая картина в неоновом стиле"},
		{id: 5, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой11111", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифровая картина в неоновом стиле"},
		{id: 6, isLiked: false, likes: 0, reposts: 0, image: "/images/post1.jpg", date: "14.05.2025", title: "Сияние города111111", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая картина в неоновоadsaffafaffaraм стиле"},
		{id: 7, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой1111111", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифровая vaffартина в неоновом стиле"},
		{id: 8, isLiked: false, likes: 0, reposts: 0, image: "/images/post1.jpg", date: "14.05.2025", title: "Сияние города11111111", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая картина в неоновом стиле"},
		{id: 9, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города11111111", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 10, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой111111111", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 11, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой1111111111", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 12, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой111111111111", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 13, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города0", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 14, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой00", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 15, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 16, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой0000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 17, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города00000", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 18, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой000000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 19, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой0000000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 20, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой00000000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 21, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города000000000", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 22, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой0000000000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 23, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой00000000000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 24, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой000000000000", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 25, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города2", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 26, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой22", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 27, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 28, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой2222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 29, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города22222", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 30, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой222222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 31, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой2222222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 32, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой22222222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 33, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города222222222", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 34, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой2222222222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 35, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой22222222222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 36, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой222222222222", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 37, isLiked: false, likes: 0, reposts: 0, image: "/images/post2.jpg", date: "14.05.2025", title: "Сияние города3", authorId: 1, authorName: "Анна", authorImg: "/images/ava-person.jpg", description: "Цифровая каvffasvavртина в неоновом стиле"},
		{id: 38, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой33", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 39, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой333", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
		{id: 40, isLiked: true, likes: 1, reposts: 1, image: "/images/post3.jpeg", date: "13.05.2025", title: "Туман над рекой3333", authorId: 2, authorName: "Марк", authorImg: "/images/ava.jpg", description: "Цифроваvsdfvsdя картина в неоновом стиле"},
	]);

	const [numbersPostsDel, setNumbersPostsDel] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	const [numberPostLengthDel, setNumberPostLengthDel] = useState(12);
	const [currentGalleryListDel, setCurrentGalleryListDel] = useState([]);

	const [isLoadingPosts, setIsLoadingPosts] = useState(false);
	const loaderRef = useRef(null);
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		setIsLoadingPosts(true);
		setCurrentGalleryListDel(galleryList.filter(el => {
			if(numbersPostsDel.includes(el.id)) {
				return el;
			}
		}));
		setIsLoadingPosts(false);
	}, [numbersPostsDel])

	const loadPosts = async () => {
		setIsLoadingPosts(true);
		// const newPosts = galleryList.filter((el) => {

		// })
		const list = [];
		for(let i = numberPostLengthDel + 1; i <= numberPostLengthDel + 12; i++) {
			if(i <= galleryList.length + 1) {
				list.push(i);
			} else {
				setShowLoader(false);
				break;
			}
		}
		setNumberPostLengthDel(numberPostLengthDel + 12);
		if(list) {
			setNumbersPostsDel(prev => [...prev, ...list]);
		} else {
			setShowLoader(false);
		}
		setIsLoadingPosts(false);
	}

	window.addEventListener("scroll", e => {
		if(loaderRef.current.offsetTop - window.scrollY - window.innerHeight < 0) {
			loadPosts();
		}
	})
	
	return (
		<main className="gallery">
			<div className="gallery__container">
				<h2 className="gallery__title">Галерея</h2>
				{/* <GalleryList postsList={galleryList} /> */}
				<GalleryList postsList={currentGalleryListDel} />
				<Loader ref={loaderRef} show={showLoader ? true : false}/>
			</div>
		</main>
	)
}

export default Gallery;