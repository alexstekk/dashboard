import {useTheme} from "app/provides/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/provides/router";
import {Navbar} from "widgets/Navbar";

const App = () => {

    const { theme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />

            <AppRouter />
        </div>
    );
};

export {App};