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
    pageSize?: number;
    pageNumber?: number;
    total?: number;
}
