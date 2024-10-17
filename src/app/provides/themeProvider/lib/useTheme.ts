import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";
import {useContext} from "react";

interface useThemeData {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeData {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

    }

    return {
        theme,
        toggleTheme
    };
}