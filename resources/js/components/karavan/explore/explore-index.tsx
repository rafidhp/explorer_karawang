import { useState, useMemo } from "react";
import HeroSection from "@/components/karavan/explore/hero-section";
import PlaceSection from "@/components/karavan/explore/place-section";
import ThreeDBackground from "@/components/karavan/welcome/3d-background";
import type { Category } from "@/types/category";
import type { Place } from "@/types/place";

interface ExploreIndexProps {
    places: Place[];
    categories: Category[];
}

export default function ExploreIndex({
    places,
    categories,
}: ExploreIndexProps) {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

    const filteredPlaces: Place[] = useMemo(() => {
        return places.filter((place) => {
            const matchCategory =
                selectedCategory === null ||
                place.category_id === selectedCategory;

            const keyword = search.trim().toLowerCase();

            if (!keyword) {
                return matchCategory;
            }

            const searchable = [
                place.name,
                place.tagline,
                place.description,
                place.address,
                place.district,
                place.category.name,
                ...(place.tags ?? []),
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return matchCategory && searchable.includes(keyword);
        });
    }, [places, search, selectedCategory]);

    return (
        <div className="mb-16">
            <HeroSection
                places={filteredPlaces}
                categories={categories}
                search={search}
                onSearchChange={setSearch}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <PlaceSection places={filteredPlaces} />
            <ThreeDBackground />
        </div>
    )
}