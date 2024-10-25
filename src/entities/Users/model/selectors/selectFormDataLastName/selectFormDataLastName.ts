import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectFormDataLastName = (state: StateSchema) => state.users.formData.lastName;
