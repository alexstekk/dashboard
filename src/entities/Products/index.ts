// types
export { Product, ProductsSchema } from './model/types/Product';

// actions,reducer
export { productsReducer, productsActions } from './model/slice/productsSlice';

// service
export { fetchProducts } from './model/service/fetchProducts/fetchProducts';

// selectors
export { selectProductById } from './model/selectors/selectProductById/selectProductById';
export { selectProductsPageNumber } from './model/selectors/selectProductsPageNumber/selectProductsPageNumber';
export { selectProductsPageSize } from './model/selectors/selectProductsPageSize/selectProductsPageSize';
export { selectProductsQty } from './model/selectors/selectProductsQty/selectProductsQty';
export { selectProductsState } from './model/selectors/selectProductsState/selectProductsState';
export { selectProductsTotal } from './model/selectors/selectProductsTotal/selectProductsTotal';

// ui
export { ProductCard } from './ui/ProductCard/ProductCard';
export { ProductsList } from './ui/ProductsList/ProductsList';
