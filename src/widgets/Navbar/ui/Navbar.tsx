import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provides/themeProvider';
import { MenuLink } from 'shared/ui/MenuLink/MenuLink';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <UiBlock className={classNames(styles.Navbar, {}, [])}>
            <MenuLink to="/">Main page</MenuLink>
            <MenuLink to="/users">Users page</MenuLink>
            <ThemeSwitcher />

        </UiBlock>
    );
};
