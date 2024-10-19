import { classNames } from 'shared/lib/classNames/classNames';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => (
    <UiBlock className={styles.headerContainer}>
        <div className={classNames(styles.Header, {}, [className])}>
            Header
        </div>
    </UiBlock>
);
