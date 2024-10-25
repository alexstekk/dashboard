import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { useSelector } from 'react-redux';
import { selectUsersState, User, usersActions } from 'entities/Users';
import { Loader } from 'widgets/Loader';
import { UsersList } from 'entities/Users/ui/UsersList/UsersList';
import { selectUsersQty } from 'entities/Users/model/selectors/selectUsersQty/selectUsersQty';
import { selectUsersPageSize } from 'entities/Users/model/selectors/selectUsersPageSize/selectUsersPageSize';
import { selectUsersPageNumber } from 'entities/Users/model/selectors/selectUsersPageNumber/selectUsersPageNumber';
import { selectUsersTotal } from 'entities/Users/model/selectors/SelectUsersTotal/SelectUsersTotal';
import { Pagination } from 'widgets/Pagination';
import { paginate } from 'shared/lib/paginate/paginate';
import { usePaginate } from 'shared/lib/hooks/usePaginate/usePaginate';
import styles from './UsersPage.module.scss';

interface UsersPageProps {
    className?: string;
}

const UsersPage = ({ className }: UsersPageProps) => {
    const dispatch = useAppDispatch();
    const { isLoading, error, data } = useSelector(selectUsersState);
    const qty = useSelector(selectUsersQty);
    const pageSize = useSelector(selectUsersPageSize);
    const pageNumber = useSelector(selectUsersPageNumber);
    const totalUsers = useSelector(selectUsersTotal);

    const { dataToShow, pagesArr } = usePaginate(data, pageSize, totalUsers, pageNumber);
    const onChangePage = (pageNumber: number) => {
        dispatch(usersActions.setPageNumber(pageNumber));
    };

    useEffect(() => {
        if (!qty) {
            dispatch(fetchUsers());
        }
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
            <UsersList data={dataToShow} />
            <Pagination pages={pagesArr} pageNumber={pageNumber} action={onChangePage} />
        </>
    );
};

export default UsersPage;
