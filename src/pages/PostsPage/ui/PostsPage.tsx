import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PostsPage.module.scss';

interface PostsPageProps {
    className?: string;
}

const PostsPage = ({ className }: PostsPageProps) => (
    <div className={classNames(styles.PostsPage, {}, [className])}>
        PostsPage
    </div>
);

export default PostsPage;
