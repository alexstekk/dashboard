import { classNames } from 'shared/lib/classNames/classNames';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import styles from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

export const LoginPage = ({ className }: LoginPageProps) => (
    <div className={styles.content}>
        <UiBlock
            className={classNames(styles.LoginPage, {}, [className])}
            isCenter
        >
            LoginPage
        </UiBlock>
    </div>
);
