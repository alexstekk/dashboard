import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './MenuLink.module.scss';

interface MenuLinkProps extends NavLinkProps{
    className?: string;
    icon? : ReactNode
}

export const MenuLink: FC<MenuLinkProps> = (props) => {
    const {
        to, className, children, state, icon, ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) => classNames(
                styles.MenuLink,
                { [styles.active]: isActive },
                [className],
            )}
            {...otherProps}
        >

            {icon}
            <span>{children}</span>
        </NavLink>
    );
};
