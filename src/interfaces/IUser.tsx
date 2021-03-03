export interface IUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string;
    location: string;
    email?: string;
    twitter_username: string;
    created_at: Date;
    updated_at: Date;
}
