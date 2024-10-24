import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectPostsState = (state:StateSchema) => state.posts;
