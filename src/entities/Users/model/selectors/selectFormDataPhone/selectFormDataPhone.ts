import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectFormDataPhone = (state: StateSchema) => state.users.formData.phone;
