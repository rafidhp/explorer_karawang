import { useMemo } from "react";
import { HeroCard, SmallCard } from "@/components/karavan/welcome/featured-place/card";
import FeaturedHeader from "@/components/karavan/welcome/featured-place/featured-header";
import type { Place } from "@/types/place";

interface FeaturedPlaceProps {
    places: Place[];
}

export default function FeaturedPlace({
    places,
}: FeaturedPlaceProps) {
    const featuredPlaces = useMemo(() => {
        return places
            .filter((place) => place.is_featured)
            .sort((a, b) => b.avg_rating - a.avg_rating)
            .slice(0, 5);
    }, [places]);

    if (featuredPlaces.length === 0) {
        return (
            <div>kosong bang</div>
        )
    }

    const [hero, ...items] = featuredPlaces;

    return (
        <div className="flex flex-col gap-8">
            <FeaturedHeader />
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                <div className="row-span-2">
                    <HeroCard place={hero} />
                </div>

                {items.map((place) => (
                    <SmallCard
                        key={place.id}
                        place={place}
                    />
                ))}
            </section>
        </div>
    )
}