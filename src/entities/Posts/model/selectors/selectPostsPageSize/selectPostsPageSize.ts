import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectPostsPageSize = (state: StateSchema) => state.posts.pageSize;
