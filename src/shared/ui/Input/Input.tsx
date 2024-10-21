import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, FC, InputHTMLAttributes, memo,
} from 'react';
import styles from './Input.module.scss';

export enum InputVariants {
    OUTLINE='outline'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    title?: string;
    variant?: string;
    value: string;
    type: string;
    onChange: (value: string) => void;
}

export const Input : FC<InputProps> = memo((props) => {
    const {
        className,
        title,
        type,
        variant,
        value,
        name,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={styles.inputContainer}>
            <p>{title}</p>
            <input
                className={classNames(styles.input, {}, [className, styles[variant]])}
                value={value}
                type={type}
                name={name}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
