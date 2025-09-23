import { createCommunityWithAdmins } from "../model/createCommunityWithAdmins.js";

export const communityWithAdminsMock = [
    createCommunityWithAdmins({ id: 1, communityId: 1, AdminId: 2 }),
    createCommunityWithAdmins({ id: 2, communityId: 1, AdminId: 3 }),
    createCommunityWithAdmins({ id: 3, communityId: 1, AdminId: 4 }),
];
