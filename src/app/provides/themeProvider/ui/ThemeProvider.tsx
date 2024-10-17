import {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const ThemeProvider: FC = ({children}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const ThemeContextValue = useMemo(()=>({
        theme,
        setTheme,
    }),[theme])

    return (
        <ThemeContext.Provider value={ThemeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;