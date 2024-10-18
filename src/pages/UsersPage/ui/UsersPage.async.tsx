import { lazy } from 'react';

export const UsersPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./UsersPage')), 1500);
    }),
);
