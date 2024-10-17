import {classNames} from "shared/lib/classNames/classNames";
import styles from './MenuLink.module.scss'
import {FC} from "react";
import {Link, LinkProps, useMatch, useResolvedPath} from "react-router-dom";

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const MenuLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, ...otherProps} = props;

    let resolved = useResolvedPath(to);
    const isMatched = useMatch({path: resolved.pathname, end: true})

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {},[className, isMatched ? styles.active : ''])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
