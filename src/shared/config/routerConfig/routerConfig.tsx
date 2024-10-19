import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { UsersPage } from 'pages/UsersPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { LoginPage } from 'pages/LoginPage';
import { ProductsPage } from 'pages/ProductsPage';
import { PostsPage } from 'pages/PostsPage';

export enum AppRoutes {
    MAIN='main',
    USERS='users',
    POSTS='posts',
    NOT_FOUND='not_found',
    LOGIN='login',
    PRODUCTS='products',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.POSTS]: '/posts',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PRODUCTS]: '/products',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [AppRoutes.USERS]: {
        path: routePath.users,
        element: <UsersPage />,
    },
    [AppRoutes.LOGIN]: {
        path: routePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.POSTS]: {
        path: routePath.posts,
        element: <PostsPage />,
    },
    [AppRoutes.PRODUCTS]: {
        path: routePath.products,
        element: <ProductsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },

};
