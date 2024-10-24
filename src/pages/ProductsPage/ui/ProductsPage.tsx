import { classNames } from 'shared/lib/classNames/classNames';
import { ProductsList } from 'entities/Products/ui/ProductsList/ProductsList';
import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = ({ className }: ProductsPageProps) => (
    <div className={classNames(styles.ProductsPage, {}, [className])}>
        <ProductsList />
    </div>
);

export default ProductsPage;
