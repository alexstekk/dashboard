import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deletePost } from '../../model/service/deletePost/deletePost';
import { PostsItem } from '../../ui/PostItem/PostsItem';
import { Post } from '../../model/types/Post';
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
