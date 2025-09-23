export interface AlbumType {
    id: number;
    name?: string;
    srcImg?: string | null;
    userId: number | null;
	communityId: number | null;
    isFirst?: boolean
}
