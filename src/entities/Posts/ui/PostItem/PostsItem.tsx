import { classNames } from 'shared/lib/classNames/classNames';
import { Post } from 'entities/Posts/model/types/Post';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import LikeIcon from 'shared/assets/icons/solar--like-outline.svg';
import DislikeIcon from 'shared/assets/icons/solar--dislike-outline.svg';
import ViewsIcon from 'shared/assets/icons/solar--eye-outline.svg';
import DeleteIcon from 'shared/assets/icons/user-delete-icon.svg';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import {
    selectSingleUserFirstname,
} from 'entities/Users/model/selectors/selectSingleUserFirstname/selectSingleUserFirstname';
import { Link } from 'react-router-dom';
import styles from './PostsItem.module.scss';

interface PostsItemProps {
    className?: string;
    post: Post;
    handleDelete: (id: number) => void
}

export const PostsItem = ({ className, post, handleDelete }: PostsItemProps) => {
    const autor = useSelector((state:StateSchema) => selectSingleUserFirstname(state, post.userId)) || 'anonymous';

    return (
        <div className={classNames(styles.PostsItem, {}, [className])}>

            <div className={styles.header}>
                Post by
                {' '}
                {
                    post.userId < 100 ? (<Link to={`/users/view/${post.userId}`}>{autor}</Link>) : ('anonymous')
                }

            </div>
            <div className={styles.body}>
                <h2>{post.title}</h2>
                <div>{post.body}</div>
            </div>
            <div className={styles.footer}>
                <div className={styles.stat}>
                    <div>
                        <LikeIcon />
                        {post.reactions.likes}
                    </div>
                    <div>
                        <DislikeIcon />
                        {' '}
                        {post.reactions.dislikes}
                    </div>
                    <div>
                        <ViewsIcon />
                        {' '}
                        {post.views}
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button variant={ButtonVariant.CLEAR} onClick={() => { handleDelete(post.id); }}>
                        <DeleteIcon />
                    </Button>
                </div>
            </div>

        </div>

    );
};
