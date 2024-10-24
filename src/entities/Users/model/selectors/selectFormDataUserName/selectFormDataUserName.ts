import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectFormDataUserName = (state: StateSchema) => state.users.formData.firstName;
