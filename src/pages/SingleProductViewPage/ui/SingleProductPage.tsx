import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from 'widgets/Loader';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    selectProductsState, selectProductById, selectProductsQty, fetchProducts,
} from 'entities/Products';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import LikeIcon from 'shared/assets/icons/solar--like-outline.svg';
import DislikeIcon from 'shared/assets/icons/solar--dislike-outline.svg';
import styles from './SingleProductPage.module.scss';

interface SingleProductPageProps {
    className?: string;
}

const SingleProductPage = ({ className }: SingleProductPageProps) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { isLoading, error } = useSelector(selectProductsState);

    const data = useSelector((state: StateSchema) => selectProductById(state, Number(id)));

    const productQty = useSelector(selectProductsQty);

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
        <div className={classNames(styles.SingleProductPage, {}, [className])}>
            <div className={styles.infoWrapper}>
                <div className={styles.image}>
                    <img src={data?.thumbnail} alt="" />
                </div>
                <div className={styles.info}>
                    <h3>

                        {data?.title}
                    </h3>
                    <p>
                        <span>Brand:</span>
                        {data?.brand}
                    </p>
                    <p>
                        <span>Price:</span>
                        {data?.price}
                    </p>
                    <p>
                        <span>Availability:</span>
                        {data?.availabilityStatus}
                    </p>
                    <div className={styles.reviews}>
                        <h4>Recent reviews</h4>
                        {
                            data?.reviews.map((rev, i) => (
                                <p key={i} className={styles.review}>
                                    {rev.rating > 3 ? <LikeIcon /> : <DislikeIcon />}
                                    {rev.comment}
                                </p>
                            ))
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
