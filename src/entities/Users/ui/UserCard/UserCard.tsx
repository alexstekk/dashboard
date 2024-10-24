import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UserCard.module.scss';

interface UserCardProps {
    className?: string;
    user?: any;
}

export const UserCard = ({ className, user }: UserCardProps) => (
    <div className={classNames(styles.UserCard, {}, [className])}>
        <img src={user.image} alt={user.firstName} />
        <div className={styles.infoBlock}>
            <p>
                <span>Firstname</span>
                {user.firstName}
            </p>
            <p>
                <span>Lastname</span>
                {user.lastName}
            </p>
            <p>
                <span>Age</span>
                {user.age}
            </p>
            <p>
                <span>Phone</span>
                {user.phone}
            </p>
        </div>
    </div>
);
