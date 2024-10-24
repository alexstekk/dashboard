import { classNames } from 'shared/lib/classNames/classNames';
import { Product } from 'entities/Products/model/types/Product';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
    className?: string;
    product: Product;
}

export const ProductCard = ({ className, product }: ProductCardProps) => (
    <div className={classNames(styles.ProductCard, {}, [className])}>
        <Link to={`/products/view/${product.id}`} className={styles.image}>
            <img src={product.thumbnail} alt={product.title} />
        </Link>
        <div className={styles.cardBody}>
            <Link to={`/products/view/${product.id}`} className={styles.title}>
                {product.title}
            </Link>
            <div className={styles.footer}>
                <span className={styles.price}>
                    {product.price}
                </span>
                {
                    product.stock ? <span className={styles.instock}>in stock</span>
                        : <span className={styles.outstock}>out of stock</span>
                }
            </div>
        </div>
    </div>
);
