import { useTheme } from 'app/provides/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provides/router';
import { Navbar } from 'widgets/Navbar';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { Header } from 'widgets/Header';
import { LoginPage } from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { localUserActions, selectLocalUserAuthData } from 'entities/LocalUser';

export const isAuth = false;

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const authData = useSelector(selectLocalUserAuthData);

    useEffect(() => {
        dispatch(localUserActions.initAuthData());
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            {
                authData ? (
                    <>
                        <Navbar />
                        <div className="page-content">
                            <Header />
                            <UiBlock isFlexGrow isColumn>
                                <AppRouter />
                            </UiBlock>
                        </div>
                    </>
                ) : (
                    <LoginPage />
                )
            }
        </div>
    );
};

export { App };
