import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectProductsState = (state:StateSchema) => state.products;
