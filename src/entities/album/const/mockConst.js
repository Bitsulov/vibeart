import { createAlbum } from "../model/createAlbum";

export const profileAlbumsMock = [
	createAlbum({id: 1, userId: 3}),
	createAlbum({id: 2, name: "Пейзажи", srcImg: "shared/icons/post1.jpg", userId: 3, isFirst: false}),
	createAlbum({id: 3, name: "Фентези", srcImg: "shared/icons/post1.jpg", userId: 3, isFirst: false}),
	createAlbum({id: 4, name: "Альбом 3", srcImg: "shared/icons/post1.jpg", userId: 3, isFirst: false}),
	createAlbum({id: 5, name: "idhdlzhglfjlgjlsghlfdahkhesruhsiuerhgkrd", srcImg: "shared/icons/post1.jpg", userId: 3, isFirst: false}),
];
