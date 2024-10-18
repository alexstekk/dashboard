import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './UiBlock.module.scss';

interface UiBlockProps {
    className?: string;
}

export const UiBlock: FC<UiBlockProps> = ({ className, children }) => (
    <div className={classNames(styles.UiBlock, {}, [className])}>
        {children}
    </div>
);
