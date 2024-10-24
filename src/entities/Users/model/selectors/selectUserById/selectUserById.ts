import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUserById = (state:StateSchema, id: number) => state.users.data.find((user) => user.id === id);
