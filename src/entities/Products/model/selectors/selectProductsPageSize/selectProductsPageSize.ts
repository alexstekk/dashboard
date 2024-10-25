import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectProductsPageSize = (state: StateSchema) => state.products.pageSize;
