import { classNames } from 'shared/lib/classNames/classNames';
import LogoIcon from 'shared/assets/logo.png';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo = memo(
    ({ className }: LogoProps) => (
        <Link to="/" className={classNames(styles.Logo, {}, [className])}>
            <img src={LogoIcon} alt="logo" />
            <span>Dashboard</span>
        </Link>
    ),
);
