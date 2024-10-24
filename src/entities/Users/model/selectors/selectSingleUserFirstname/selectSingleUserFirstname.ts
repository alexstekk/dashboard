import { createSelector } from '@reduxjs/toolkit';
import { selectUsersList } from 'entities/Users/model/selectors/selectUsersList/selectUsersList';

export const selectSingleUserFirstname = createSelector(
    selectUsersList,
    (_: any, id: Number) => id,
    (usersList, id) => usersList.find((user) => Number(user.id) === Number(id))?.firstName,
);
