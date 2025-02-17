export type Ratings = {
    review_count?: number;
    average_rating?: number;
};

export type Offer = {
    offer_image?: string;
    offer_name?: string;
};

export type CustomProps = {
    offer?: Offer;
};

export type Product = {
    id: string;
    name: string;
    original_price?: number;
    price: number;
    images: string[];
    ratings: Ratings;
    custom_props: CustomProps; 
    badge?: string;
    created_at: string;
    updated_at?: string;
};