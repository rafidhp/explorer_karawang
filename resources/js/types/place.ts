import type { Category } from "@/types/category";

export interface Place {
    id: number;
    category_id: number;
    name: string;
    slug: string;
    tagline: string | null;
    description: string;
    tags: [];
    avg_rating: number;
    address: string;
    district: string | null;
    hours: string | null;
    lat: number | null;
    lng: number | null;
    is_featured: boolean;
    is_trending: boolean;
    is_hidden: boolean;

    category: Category;
    place_images: PlaceImage[];
    roblox_images: RobloxImage[];
}

export interface PlaceImage {
    id: number;
    place_id: number;
    image: string;

    place: Place;
}

export interface RobloxImage {
    id: number;
    place_id: number;
    image: string;
    
    place: Place;
}