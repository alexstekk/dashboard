import { lazy } from 'react';

export const SingleProductViewPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./SingleProductPage')), 1500);
    }),
);
