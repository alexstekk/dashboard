import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectProductById = (state:StateSchema, id: number) => state.products.data.find((product) => +product.id === +id);
