import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { Loader } from 'features/Loader';

const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {
                Object.values(routeConfig).map(({ element, path }) => (
                    <Route element={element} path={path} key={path} />
                ))
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
