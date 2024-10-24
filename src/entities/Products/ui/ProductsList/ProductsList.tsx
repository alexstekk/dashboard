import { classNames } from 'shared/lib/classNames/classNames';
import { productsApi } from 'entities/Products/model/service/fetchProducts/fetchProducts';
import { Loader } from 'widgets/Loader';
import { ProductCard } from 'entities/Products/ui/ProductCard/ProductCard';
import { Product } from 'entities/Products/model/types/Product';
import styles from './ProductsList.module.scss';

interface ProductsListProps {
    className?: string;
}

export const ProductsList = ({ className }: ProductsListProps) => {
    const { data, error, isLoading } = productsApi.useFetchAllProductsQuery('');

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={classNames(styles.ProductsList, {}, [className])}>

            {
                data.products.map((product: Product) => <ProductCard product={product} key={product.id} />)
            }
        </div>
    );
};
