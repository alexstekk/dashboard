import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectPostsByUserId = (state:StateSchema, id: number) => state.posts.data.filter(
    (post) => Number(post.userId) === Number(id),
);
