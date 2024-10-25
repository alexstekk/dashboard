import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'widgets/Loader';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { usePaginate } from 'shared/lib/hooks/usePaginate/usePaginate';
import { Pagination } from 'widgets/Pagination';
import { productsActions } from '../../model/slice/productsSlice';
import { selectProductsTotal } from '../../model/selectors/selectProductsTotal/selectProductsTotal';
import { selectProductsPageNumber } from '../../model/selectors/selectProductsPageNumber/selectProductsPageNumber';
import { selectProductsPageSize } from '../../model/selectors/selectProductsPageSize/selectProductsPageSize';
import { fetchProducts } from '../../model/service/fetchProducts/fetchProducts';
import { selectProductsQty } from '../../model/selectors/selectProductsQty/selectProductsQty';
import { selectProductsState } from '../../model/selectors/selectProductsState/selectProductsState';
import { Product } from '../../model/types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductsList.module.scss';

interface ProductsListProps {
    className?: string;
}

export const ProductsList = ({ className }: ProductsListProps) => {
    const { data, error, isLoading } = useSelector(selectProductsState);
    const productQty = useSelector(selectProductsQty);
    const dispatch = useAppDispatch();
    const pageSize = useSelector(selectProductsPageSize);
    const pageNumber = useSelector(selectProductsPageNumber);
    const totalPages = useSelector(selectProductsTotal);

    const { pagesArr, dataToShow } = usePaginate<Product>(data, pageSize, totalPages, pageNumber);

    const onChangePage = (page: number) => {
        dispatch(productsActions.setPage(page));
    };

    useEffect(() => {
        if (!productQty) {
            dispatch(fetchProducts());
        }
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <div className={classNames(styles.ProductsList, {}, [className])}>
                {
                    dataToShow.map((product: Product) => <ProductCard product={product} key={product.id} />)
                }
            </div>
            <Pagination pages={pagesArr} pageNumber={pageNumber} action={onChangePage} />
        </>
    );
};
