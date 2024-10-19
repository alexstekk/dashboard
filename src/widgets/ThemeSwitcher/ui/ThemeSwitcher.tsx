import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/provides/themeProvider';
import IconLight from 'shared/assets/icons/solar--moon-bold.svg';
import IconDark from 'shared/assets/icons/solar--sun-2-bold.svg';
import pic1 from 'shared/assets/logo.png';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme, theme } = useTheme();
    return (
        <Button
            variant={ButtonVariant.OUTLINE}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {
                theme === Theme.DARK ? (
                    <>
                        <IconDark />
                        <span>Light mode</span>
                    </>
                ) : (
                    <>
                        <IconLight />
                        <span>Dark mode</span>
                    </>
                )
            }

        </Button>
    );
};
