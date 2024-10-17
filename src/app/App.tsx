import React, {Suspense} from 'react';

import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/provides/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {

    const {toggleTheme, theme} = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Main page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export {App};