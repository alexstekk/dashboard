import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectProductsQty = (state: StateSchema) => state.products.data.length;
