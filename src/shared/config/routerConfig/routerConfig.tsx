import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { UsersPage } from 'pages/UsersPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { LoginPage } from 'pages/LoginPage';
import { ProductsPage } from 'pages/ProductsPage';
import { PostsPage } from 'pages/PostsPage';
import { SingleUserEditPage } from 'pages/SingleUserEditPage';
import { SingleUserViewPage } from 'pages/SingleUserViewPage';
import SingleProductPage from 'pages/SingleProductViewPage/ui/SingleProductPage';

export enum AppRoutes {
    MAIN='main',
    USERS='users',
    USERS_EDIT='/users/edit/:id',
    USERS_VIEW='/users/view/:id',
    POSTS='posts',
    LOGIN='login',
    PRODUCTS='products',
    PRODUCTS_VIEW='/products/view/:id',
    NOT_FOUND='not_found',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.USERS_EDIT]: '/users/edit/:id',
    [AppRoutes.USERS_VIEW]: '/users/view/:id',
    [AppRoutes.POSTS]: '/posts',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PRODUCTS]: '/products',
    [AppRoutes.PRODUCTS_VIEW]: '/products/view/:id',
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
    [AppRoutes.USERS_EDIT]: {
        path: routePath['/users/edit/:id'],
        element: <SingleUserEditPage />,
    },
    [AppRoutes.USERS_VIEW]: {
        path: routePath['/users/view/:id'],
        element: <SingleUserViewPage />,
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
    [AppRoutes.PRODUCTS_VIEW]: {
        path: routePath['/products/view/:id'],
        element: <SingleProductPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },

};
