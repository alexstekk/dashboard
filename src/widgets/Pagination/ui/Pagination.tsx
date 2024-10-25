import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from './Pagination.module.scss';

interface PaginationProps {
    className?: string;
    pages: number[];
    pageNumber: number;
    action: (page:number) => void;
}

export const Pagination = ({
    className, pageNumber, pages, action,
}: PaginationProps) => (
    <div className={classNames(styles.Pagination, {}, [className])}>
        <div className={styles.pagesWrapper}>
            {
                pages.map((page, index) => (
                    <Button
                        key={index}
                        onClick={() => {
                            action(page);
                        }}
                        variant={pageNumber === page ? ButtonVariant.SOLID : ButtonVariant.OUTLINE}
                    >
                        {page}
                    </Button>
                ))
            }
        </div>
    </div>
);
