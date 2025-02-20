export type Review = {
    user?: {
        name?: string;
    };
    created_at?: string;
    comment?: string;
    rating?: number;
};

export type Ratings = {
    count?: number;
    average_rating?: number;
    rating_count?: {
        [key: string]: number;
    };
    review?: any[];
};

export type Offer = {
    image?: string;
    name?: string;
};

export type CustomProps = {
    offer?: Offer;
};

export type Category = {
    id: string;
    name?: string;
};

export type Brand = {
    id: string;
    name?: string;
};

export type Product = {
    id: string;
    name: string;
    description?: string;
    original_price?: number;
    price: number;
    stock?: number;
    category: Category;
    brand: Brand;
    sub_category_id?: string;
    child_sub_category_id?: string;
    images: string[];
    rating: Ratings;
    custom_props: CustomProps; 
    badge?: string;
    created_at: string;
    updated_at?: string;
};