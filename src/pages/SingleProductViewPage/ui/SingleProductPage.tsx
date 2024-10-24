import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import { productsApi } from 'entities/Products/model/service/fetchProducts/fetchProducts';
import { Loader } from 'widgets/Loader';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from './SingleProductPage.module.scss';

interface SingleProductPageProps {
    className?: string;
}

const SingleProductPage = ({ className }: SingleProductPageProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data, isLoading, error } = productsApi.useFetchProductByIdQuery(id);

    console.log(data);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={classNames(styles.SingleProductPage, {}, [className])}>
            <div className={styles.infoWrapper}>
                <div className={styles.image}>
                    <img src={data.thumbnail} alt="" />
                </div>
                <div className={styles.info}>
                    <h3>

                        {data.title}
                    </h3>
                    <p>
                        <span>Brand:</span>
                        {data.brand}
                    </p>
                    <p>
                        <span>Price:</span>
                        {data.price}
                    </p>
                    <p>
                        <span>Availability:</span>
                        {data.availabilityStatus}
                    </p>
                    <div className={styles.reviews}>
                        <h4>Recent reviews</h4>
                        {
                            data.reviews.map((rev) => <p className={styles.review}>{rev.comment}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button
                    variant={ButtonVariant.OUTLINE}
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Back
                </Button>
            </div>
        </div>

    );
};

export default SingleProductPage;
