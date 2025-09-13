import { createSubscription } from "../model/createSubscription.js";

export const subscriptionMock = createSubscription({
    id: 1,
    subscribingUserId: 1,
    subscribedUserId: 2,
    value: false
});
