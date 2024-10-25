import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectProductsPageNumber = (state: StateSchema) => state.products.pageNumber;
