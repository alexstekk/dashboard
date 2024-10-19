import { lazy } from 'react';

export const PostsPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => { resolve(import('./PostsPage')); }, 1500);
    }),
);
