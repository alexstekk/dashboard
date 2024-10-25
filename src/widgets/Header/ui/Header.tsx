import { classNames } from 'shared/lib/classNames/classNames';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { useSelector } from 'react-redux';
import { selectLocalUserName } from 'entities/LocalUser';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const userName = useSelector(selectLocalUserName);
    return (
        <UiBlock className={styles.headerContainer}>
            <div className={classNames(styles.header, {}, [className])}>
                Glad to see you again,
                {' '}
                <span>{userName}</span>
                !
            </div>
        </UiBlock>
    );
};
