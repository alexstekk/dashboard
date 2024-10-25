import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'widgets/Loader';
import { ProductCard } from 'entities/Products/ui/ProductCard/ProductCard';
import { Product } from 'entities/Products/model/types/Product';
import { useSelector } from 'react-redux';
import { selectProductsState } from 'entities/Products/model/selectors/selectProductsState/selectProductsState';
import { useEffect } from 'react';
import { selectProductsQty } from 'entities/Products/model/selectors/selectProductsQty/selectProductsQty';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProducts } from 'entities/Products/model/service/fetchProducts/fetchProducts';
import { usePaginate } from 'shared/lib/hooks/usePaginate/usePaginate';
import { selectProductsPageSize } from 'entities/Products/model/selectors/selectProductsPageSize/selectProductsPageSize';
import {
    selectProductsPageNumber,
} from 'entities/Products/model/selectors/selectProductsPageNumber/selectProductsPageNumber';
import { selectProductsTotal } from 'entities/Products/model/selectors/selectProductsTotal/selectProductsTotal';
import { Pagination } from 'widgets/Pagination';
import { productsActions } from 'entities/Products/model/slice/productsSlice';
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
