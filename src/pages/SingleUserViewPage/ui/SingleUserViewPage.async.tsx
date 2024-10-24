import { lazy } from 'react';

export const SingleUserViewPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./SingleUserViewPage')), 1500);
    }),
);
