import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './UiBlock.module.scss';

interface UiBlockProps {
    className?: string;
    isFlexGrow?: boolean;
    isColumn? : boolean;
    isCenter?: boolean;
}

export const UiBlock: FC<UiBlockProps> = ({
    className, children, isFlexGrow, isColumn, isCenter,
}) => (
    <div className={classNames(
        styles.UiBlock,
        { [styles.grow]: isFlexGrow, [styles.column]: isColumn, [styles.center]: isCenter },
        [className],
    )}
    >
        {children}
    </div>
);
