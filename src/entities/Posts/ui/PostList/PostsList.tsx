import { classNames } from 'shared/lib/classNames/classNames';
import { Post } from 'entities/Posts/model/types/Post';
import { PostsItem } from 'entities/Posts/ui/PostItem/PostsItem';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deletePost } from 'entities/Posts/model/service/deletePost/deletePost';
import styles from './PostsList.module.scss';

interface PostsListProps {
    className?: string;
    postsData?: Post[];
}

export const PostsList = ({ className, postsData }: PostsListProps) => {
    const dispatch = useAppDispatch();

    const handleDelete = (id:number) => {
        dispatch(deletePost(id));
    };
    return (
        <div className={classNames(styles.PostsList, {}, [className])}>
            {
                postsData.map((post) => <PostsItem key={post.id} post={post} handleDelete={handleDelete} />)
            }
        </div>
    );
};
