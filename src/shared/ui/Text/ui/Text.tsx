import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Text.module.scss';

interface TextProps {
    className?: string;
}

export const Text: FC<TextProps> = (props) => {
    const { className, children } = props;
    return (
        <div className={classNames(styles.Text, {}, [className])}>
            {children}
        </div>
    );
};
