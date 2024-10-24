import { User } from 'entities/Users';
import { EditFormSchema } from 'entities/Users/model/types/Users';

export type Post = {
    id: number
    title: string
    body: string
    tags: Array<string>
    reactions: {
        likes: number
        dislikes: number
    }
    views: number
    userId: number
}

export interface PostsSchema {
    data?: Post[];
    isLoading?: boolean;
    error?: string;
}
