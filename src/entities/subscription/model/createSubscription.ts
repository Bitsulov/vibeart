interface SubscriptionType {
    id: number;
    subscribingUserId: number;
    subscribedUserId: number;
    value: boolean;
}

export function createSubscription({ id = Date.now(), subscribingUserId, subscribedUserId, value }: SubscriptionType) {
    return { id, subscribingUserId, subscribedUserId, value };
}
