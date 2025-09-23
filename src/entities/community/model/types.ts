import type { countriesRu } from "shared/lib/countriesRu.js";

export interface CommunityType {
	id: number;
	title: string;
	userName: string;
	description: string;
	subscribers: number;
	works: number;
	srcImg: string;
	creatorId: number;
	date: string;
	countries: (typeof countriesRu[number])[] | "Весь мир";
}
