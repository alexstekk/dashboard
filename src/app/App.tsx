import { useTheme } from 'app/provides/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provides/router';
import { Navbar } from 'widgets/Navbar';
import { UiBlock } from 'shared/ui/UiBlock/UiBlock';
import { Header } from 'widgets/Header';
import { LoginPage } from 'pages/LoginPage';

export const isAuth = false;

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            {
                isAuth ? (
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
