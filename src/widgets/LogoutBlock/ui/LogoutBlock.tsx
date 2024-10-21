import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import IconLogout from 'shared/assets/icons/solar--circle-top-up-linear.svg';
import { useDispatch } from 'react-redux';
import { localUserActions } from 'entities/LocalUser';
import styles from './LogoutBlock.module.scss';

interface LogoutBlockProps {
    className?: string;
}

export const LogoutBlock = ({ className }: LogoutBlockProps) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log('logout');
        dispatch(localUserActions.logout());
    };

    return (
        <Button
            variant={ButtonVariant.SOLID}
            className={classNames(styles.logoutBlock, {}, [className])}
            onClick={handleLogout}
        >
            Logout
            <IconLogout />
        </Button>
    );
};
