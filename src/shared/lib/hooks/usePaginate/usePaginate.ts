import { paginate } from 'shared/lib/paginate/paginate';

export function usePaginate<T>(
    AllData: T[],
    pageSize: number,
    totalDataCount: number,
    pageNumber: number,

) {
    const pagesCount = Math.ceil(totalDataCount / pageSize);
    const pagesArr = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const dataToShow = paginate(AllData, pageSize, pageNumber);

    return { dataToShow, pagesArr };
}
