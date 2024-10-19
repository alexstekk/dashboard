import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
    className?: string;
}

const ProductsPage = ({ className }: ProductsPageProps) => (
    <div className={classNames(styles.ProductsPage, {}, [className])}>
        ProductsPage
    </div>
);

export default ProductsPage;
