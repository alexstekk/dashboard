import { classNames } from 'shared/lib/classNames/classNames';
import { MenuLink } from 'shared/ui/MenuLink/MenuLink';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { routePath } from 'shared/config/routerConfig/routerConfig';
import UsersIcon from 'shared/assets/icons/solar--user-bold.svg';
import PostsIcon from 'shared/assets/icons/solar--file-text-linear.svg';
import MainIcon from 'shared/assets/icons/solar--home-outline.svg';
import ProductsIcon from 'shared/assets/icons/solar--widget-2-linear.svg';

import { Logo } from 'shared/ui/Logo/Logo';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <UiBlock className={classNames(styles.Navbar, {}, [className])}>
        <Logo className={styles.navbarLogo} />
        <MenuLink to={routePath.main} icon={<MainIcon />}>Main</MenuLink>
        <MenuLink to={routePath.users} icon={<UsersIcon />}>Users</MenuLink>
        <MenuLink to={routePath.products} icon={<ProductsIcon />}>Products</MenuLink>
        <MenuLink to={routePath.posts} icon={<PostsIcon />}>Posts</MenuLink>
        <MenuLink to={routePath.login} icon={<PostsIcon />}>Login</MenuLink>
        <ThemeSwitcher className={styles.themeSwitcher} />
    </UiBlock>
);
