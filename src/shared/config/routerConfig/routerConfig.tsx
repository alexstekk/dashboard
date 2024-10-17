import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {UsersPage} from "pages/UsersPage";



export enum AppRoutes {
    MAIN='main',
    USERS= 'users'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USERS]: '/users',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN] : {
        path: routePath.main,
        element: <MainPage />
    },
    [AppRoutes.USERS] : {
        path: routePath.users,
        element: <UsersPage />
    },

}