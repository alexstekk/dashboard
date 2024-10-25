import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input, InputVariants } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Loader } from 'widgets/Loader';
import {
    fetchUsers,
    selectFormDataLastName,
    selectFormDataPhone,
    selectFormDataUserName,
    selectSingleUserFirstnameById,
    selectSingleUserLastnameById,
    selectSingleUserPhoneById,
    selectUsersQty,
    selectUsersState,
    updateSingleUserData,
    usersActions,
} from 'entities/Users';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import styles from './SingleUserEditPage.module.scss';

interface SingleUserEditPageProps {
    className?: string;
}

const SingleUserEditPage = ({ className }: SingleUserEditPageProps) => {
    const dispatch = useAppDispatch();

    const { id } = useParams();
    const navigate = useNavigate();

    const firstName = useSelector((state:StateSchema) => selectSingleUserFirstnameById(state, Number(id)));
    const formFirstName = useSelector(selectFormDataUserName);

    const lastName = useSelector((state:StateSchema) => selectSingleUserLastnameById(state, Number(id)));
    const formLastname = useSelector(selectFormDataLastName);

    const phone = useSelector((state:StateSchema) => selectSingleUserPhoneById(state, Number(id)));
    const formPhone = useSelector(selectFormDataPhone);

    const { isLoading, error } = useSelector(selectUsersState);
    const qty = useSelector(selectUsersQty);

    const onChangeFirstname = (firstname:string) => {
        dispatch(usersActions.setFormDataFirstname(firstname));
    };
    const onChangeLastname = (lastname:string) => {
        dispatch(usersActions.setFormDataLastname(lastname));
    };
    const onChangePhone = (phone:string) => {
        dispatch(usersActions.setFormDataPhone(phone));
    };

    const saveNewSingleUserData = async () => {
        const data = {
            firstName: formFirstName,
            lastName: formLastname,
            phone: formPhone,
        };

        await dispatch(updateSingleUserData({ id, data }));
        navigate(-1);
    };

    useEffect(() => {
        if (!qty) {
            dispatch(fetchUsers());
        }
    }, []);

    useEffect(() => {
        if (!isLoading && qty) {
            dispatch(usersActions.setFormDataForUser({ firstName, lastName, phone }));
        }
    }, [isLoading]);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={classNames(styles.SingleUserEditPage, {}, [className])}>
            <div className={styles.editBlock}>
                <Input
                    title="Firstname"
                    variant={InputVariants.OUTLINE}
                    value={formFirstName}
                    onChange={onChangeFirstname}
                />
                <Input
                    title="Lastname"
                    variant={InputVariants.OUTLINE}
                    value={formLastname}
                    onChange={onChangeLastname}
                />
                <Input
                    title="Phone"
                    variant={InputVariants.OUTLINE}
                    value={formPhone}
                    onChange={onChangePhone}
                />

            </div>
            <div className={styles.buttons}>
                <Button
                    variant={ButtonVariant.SOLID}
                    onClick={saveNewSingleUserData}
                >
                    Save
                </Button>
                <Button
                    variant={ButtonVariant.OUTLINE}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back
                </Button>
            </div>
        </div>
    );
};

export default SingleUserEditPage;
