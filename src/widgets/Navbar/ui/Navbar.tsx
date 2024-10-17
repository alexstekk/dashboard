import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {useTheme} from "app/provides/themeProvider";
import {MenuLink} from "shared/ui/MenuLink/MenuLink";
import {useMatch, useResolvedPath} from "react-router-dom";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    const {toggleTheme, theme} = useTheme();


    return (
        <div className={classNames(styles.Navbar, {},[])}>
            <MenuLink to={'/'} >Main page</MenuLink>
            <MenuLink to={'/users'} >Users page</MenuLink>
            <button onClick={toggleTheme}>Theme</button>
        </div>
    );
};
