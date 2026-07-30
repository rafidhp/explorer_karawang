import { useState, useMemo } from "react";
import HeroSection from "@/components/karavan/explore/hero-section";
import PlaceSection from "@/components/karavan/explore/place-section";
import ThreeDBackground from "@/components/karavan/welcome/3d-background";
import type { Category } from "@/types/category";
import type { Place } from "@/types/place";

interface ExploreIndexProps {
    places: Place[];
    categories: Category[];
    selectedCategory: number | null;
    showTrending: boolean;
    query: string;
}

export default function ExploreIndex({
    places,
    categories,
    selectedCategory: initialSelectedCategory,
    showTrending: initialTrending,
    query,
}: ExploreIndexProps) {
    const [search, setSearch] = useState(query);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        initialSelectedCategory
    );
    const [showTrending, setShowTrending] = useState(initialTrending);

    const filteredPlaces: Place[] = useMemo(() => {
        return places.filter((place) => {
            const matchCategory =
                selectedCategory === null ||
                place.category_id === selectedCategory;

            const matchTrending = !showTrending || place.is_trending;

            const keyword = search.trim().toLowerCase();

            if (!keyword) {
                return matchCategory && matchTrending;
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

            return (
                matchCategory &&
                matchTrending &&
                searchable.includes(keyword)
            );
        });
    }, [places, search, selectedCategory, showTrending]);

    return (
        <div className="mb-16">
            <HeroSection
                places={filteredPlaces}
                categories={categories}
                search={search}
                onSearchChange={setSearch}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                showTrending={showTrending}
                onTrendingChange={setShowTrending}
            />
            <PlaceSection places={filteredPlaces} />
            <ThreeDBackground />
        </div>
    )
}