// types
export { Post, PostsSchema } from './model/types/Post';

// reducer, actions
export { postsReducer, postsActions } from './model/slice/postsSlice';

// services
export { fetchPosts } from './model/service/fetchPosts/fetchPosts';
export { deletePost } from './model/service/deletePost/deletePost';

// selectors
export { selectPostsByUserId } from './model/selectors/selectPostsByUserId/selectPostsByUserId';
export { selectPostsPageNumber } from './model/selectors/selectPostsPageNumber/selectPostsPageNumber';
export { selectPostsPageSize } from './model/selectors/selectPostsPageSize/selectPostsPageSize';
export { selectPostsQty } from './model/selectors/selectPostsQty/selectPostsQty';
export { selectPostsState } from './model/selectors/selectPostsState/selectPostsState';
export { selectPostsTotal } from './model/selectors/selectPostsTotal/selectPostsTotal';

// ui
export { PostsList } from './ui/PostList/PostsList';
export { PostsItem } from './ui/PostItem/PostsItem';
