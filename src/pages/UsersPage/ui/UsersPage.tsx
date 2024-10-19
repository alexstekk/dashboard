import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UsersPage.module.scss';

interface UsersPageProps {
    className?: string;
}

const UsersPage = ({ className }: UsersPageProps) => (
    <div className={classNames(styles.UsersPage, {}, [className])}>
        UsersPage
    </div>
);

export default UsersPage;
