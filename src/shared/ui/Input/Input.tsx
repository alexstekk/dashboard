import { classNames } from 'shared/lib/classNames/classNames';
import { FC, InputHTMLAttributes, ReactHTMLElement } from 'react';
import styles from './Input.module.scss';

export enum InputVariants {
    OUTLINE='outline'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    title?: string;
    variant?: string;
    testValue?: string;
}

export const Input : FC<InputProps> = (props) => {
    const {
        className,
        title,
        variant,
        testValue,
    } = props;
    return (
        <div className={styles.inputContainer}>
            <p>{title}</p>
            <input
                className={classNames(styles.input, {}, [className, styles[variant]])}
                value={testValue}
            />
        </div>
    );
};
