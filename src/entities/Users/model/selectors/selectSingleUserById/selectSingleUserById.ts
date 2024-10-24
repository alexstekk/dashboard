import { createSelector } from '@reduxjs/toolkit';
import { selectUsersList } from '../selectUsersList/selectUsersList';

export const selectSingleUserById = createSelector(
    selectUsersList,
    (_: any, id: Number) => id,
    (usersList, id) => usersList.find((user) => user.id === id),
);
