import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { useSelector } from 'react-redux';
import { selectUsersState } from 'entities/Users';
import { Loader } from 'widgets/Loader';
import { UsersList } from 'entities/Users/ui/UsersList/UsersList';
import styles from './UsersPage.module.scss';

interface UsersPageProps {
    className?: string;
}

const UsersPage = ({ className }: UsersPageProps) => {
    const dispatch = useAppDispatch();
    const { isLoading, error, data } = useSelector(selectUsersState);

    console.log(isLoading, error, data);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h1 className={styles.title}>Users</h1>
            <UsersList data={data} />
        </>
    );
};

export default UsersPage;
