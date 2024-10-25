import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectProductsTotal = (state: StateSchema) => state.products.total;
