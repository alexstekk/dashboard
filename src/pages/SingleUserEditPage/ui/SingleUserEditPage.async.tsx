import { lazy } from 'react';

export const SingleUserEditPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./SingleUserEditPage')), 1500);
    }),
);
