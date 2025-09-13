export interface UserType {
    id: number;
    userName: string;
    firstName: string;
    secondName: string;
    description?: string;
    subscribers?: number;
    subscribes?: number;
    works?: number;
    srcImg: string;
    status: "offline" | "online";
}
