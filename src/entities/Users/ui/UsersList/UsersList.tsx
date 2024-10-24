import { classNames } from 'shared/lib/classNames/classNames';
import { User, usersActions } from 'entities/Users';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import EditIcon from 'shared/assets/icons/user-edit-icon.svg';
import DeleteIcon from 'shared/assets/icons/user-delete-icon.svg';
import ViewIcon from 'shared/assets/icons/user-view-icon.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deleteUser } from 'entities/Users/model/service/deleteUser/deleteUser';
import styles from './UsersList.module.scss';

interface UsersListProps {
    className?: string;
    data?: User[];
}

export const UsersList = ({ className, data }: UsersListProps) => {
    const dispath = useAppDispatch();

    const removeUser = (id: number) => {
        dispath(deleteUser(id));
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
                                    <Link to={`/users/edit/${user.id}`}><EditIcon /></Link>
                                    <Link to={`/users/view/${user.id}`}><ViewIcon /></Link>
                                    <Button
                                        variant={ButtonVariant.CLEAR}
                                        onClick={
                                            () => { removeUser(user.id); }
                                        }
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
};
