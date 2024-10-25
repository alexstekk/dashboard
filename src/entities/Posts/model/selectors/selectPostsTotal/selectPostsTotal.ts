import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectPostsTotal = (state: StateSchema) => state.posts.total;
