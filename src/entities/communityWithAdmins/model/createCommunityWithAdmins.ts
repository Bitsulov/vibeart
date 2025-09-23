import type { CommunityWithAdminsType } from "./type.js";

export function createCommunityWithAdmins({id, communityId, AdminId}: CommunityWithAdminsType) {
	return {id, communityId, AdminId}
}
