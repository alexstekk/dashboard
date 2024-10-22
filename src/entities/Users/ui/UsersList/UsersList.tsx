import { classNames } from 'shared/lib/classNames/classNames';
import { User } from 'entities/Users';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import EditIcon from 'shared/assets/icons/user-edit-icon.svg';
import DeleteIcon from 'shared/assets/icons/user-delete-icon.svg';
import ViewIcon from 'shared/assets/icons/user-view-icon.svg';
import { Link } from 'react-router-dom';
import styles from './UsersList.module.scss';

interface UsersListProps {
    className?: string;
    data?: User[];
}

export const UsersList = ({ className, data }: UsersListProps) => {
    const handleEditUser = (id: number) => {
        console.log('Edit user id', id);
    };
    return (
        <div className={classNames(styles.UsersList, {}, [className])}>
            <table className={styles.userTable}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.phone}</td>
                                <td className={styles.usersActions}>
                                    <Link to=""><EditIcon /></Link>
                                    <Link to=""><ViewIcon /></Link>
                                    <Link to=""><DeleteIcon /></Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};
