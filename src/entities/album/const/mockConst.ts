import { createAlbum } from "../model/createAlbum.js";
import post1 from "@/shared/icons/post1.jpg";

export const profileAlbumsMock = [
    createAlbum({ id: 1, userId: 3 }),
    createAlbum({
        id: 2,
        name: "Пейзажи",
        srcImg: post1,
        userId: 3,
        isFirst: false
    }),
    createAlbum({
        id: 3,
        name: "Фентези",
        srcImg: post1,
        userId: 3,
        isFirst: false
    }),
    createAlbum({
        id: 4,
        name: "Альбом 3",
        srcImg: post1,
        userId: 3,
        isFirst: false
    }),
    createAlbum({
        id: 5,
        name: "idhdlzhglfjlgjlsghlfdahkhesruhsiuerhgkrd",
        srcImg: post1,
        userId: 3,
        isFirst: false
    })
];
