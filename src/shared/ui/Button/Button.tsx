import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import styles from './Button.module.scss';

export enum ButtonVariant {
    CLEAR = 'clear',
    OUTLINE='outline',
    SOLID='solid',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;
    children: ReactNode;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(
    (props) => {
        const {
            className,
            children,
            variant,
            disabled,
            ...otherProps
        } = props;
        return (
            <button
                className={
                    classNames(
                        styles.Button,
                        { [styles.disabled]: disabled },
                        [className, styles[variant]],
                    )
                }
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        );
    },
);
