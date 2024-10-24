import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input, InputVariants } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Loader } from 'widgets/Loader';
import { selectUsersState, usersActions } from 'entities/Users';
import {
    selectSingleUserFirstname,
} from 'entities/Users/model/selectors/selectSingleUserFirstname/selectSingleUserFirstname';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { selectUsersQty } from 'entities/Users/model/selectors/selectUsersQty/selectUsersQty';
import { selectFormDataUserName } from 'entities/Users/model/selectors/selectFormDataUserName/selectFormDataUserName';
import { updateSingleUserData } from 'entities/Users/model/service/updateSingleUserData/updateSingleUserData';
import styles from './SingleUserEditPage.module.scss';

interface SingleUserEditPageProps {
    className?: string;
}

const SingleUserEditPage = ({ className }: SingleUserEditPageProps) => {
    const dispatch = useAppDispatch();

    const { id } = useParams();
    const navigate = useNavigate();

    const firstName = useSelector((state:StateSchema) => selectSingleUserFirstname(state, Number(id)));
    const formFirstName = useSelector(selectFormDataUserName);

    const lastName = 'lastName';
    const phone = 'phone';
    const { isLoading, error } = useSelector(selectUsersState);
    const qty = useSelector(selectUsersQty);

    const onChangeFirstname = (firstname:string) => {
        dispatch(usersActions.setFormDataFirstname(firstname));
    };
    const onChangeLastname = (lastname:string) => { };
    const onChangePhone = (phone:string) => { };

    // @ts-ignore
    const saveNewSingleUserData = async () => {
        const data = {
            firstName: formFirstName,
            lastName: 'hello',
        };

        await dispatch(updateSingleUserData({ id, data }));
        console.log({ id, data });
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
                    value={lastName}
                    onChange={onChangeLastname}
                />
                <Input
                    title="Phone"
                    variant={InputVariants.OUTLINE}
                    value={phone}
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
