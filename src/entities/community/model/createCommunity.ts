import type { CommunityType } from "./types.js";

export function createCommunity({
    id,
    title,
    userName,
    description,
    subscribers = 0,
    works = 0,
    srcImg,
    creatorId,
	date,
	countries = [],
}: CommunityType) {
    return { id, title, userName, description, subscribers, works, srcImg, creatorId, date, countries };
}
