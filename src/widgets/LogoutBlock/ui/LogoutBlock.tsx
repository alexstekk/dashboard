import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import IconLogout from 'shared/assets/icons/solar--circle-top-up-linear.svg';
import styles from './LogoutBlock.module.scss';

interface LogoutBlockProps {
    className?: string;
}

export const LogoutBlock = ({ className }: LogoutBlockProps) => {
    const handleLogout = () => {
        console.log('logout');
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
