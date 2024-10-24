import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectPostsQty = (state:StateSchema) => state.posts.data.length;
