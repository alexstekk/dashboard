import { User } from 'entities/Users';
import { EditFormSchema } from 'entities/Users/model/types/Users';

export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: Array<string>
    brand: string
    sku: string
    weight: number
    dimensions: {
        width: number
        height: number
        depth: number
    }
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Array<{
        rating: number
        comment: string
        date: string
        reviewerName: string
        reviewerEmail: string
    }>
    returnPolicy: string
    minimumOrderQuantity: number
    meta: {
        createdAt: string
        updatedAt: string
        barcode: string
        qrCode: string
    }
    images: Array<string>
    thumbnail: string
}

export interface ProductsSchema {
    data?: Product[];
    isLoading?: boolean;
    error?: string;
    pageSize?: number;
    pageNumber?: number;
    total?: number;
}
