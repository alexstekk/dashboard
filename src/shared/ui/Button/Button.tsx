import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE='outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;

}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        variant,
        ...otherProps
    } = props;
    return (
        <button
            className={
                classNames(styles.Button, {}, [className, styles[variant]])
            }
            {...otherProps}
            type="button"
        >
            {children}
        </button>
    );
};
