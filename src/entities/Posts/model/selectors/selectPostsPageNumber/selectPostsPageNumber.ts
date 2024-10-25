import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectPostsPageNumber = (state: StateSchema) => state.posts.pageNumber;
