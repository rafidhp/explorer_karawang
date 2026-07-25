import { SmallCard } from "@/components/karavan/welcome/featured-place/card";
import type { Place } from "@/types/place";

interface PlaceSectionProps {
    places: Place[];
}

export default function PlaceSection({
    places,
}: PlaceSectionProps) {
    if (places.length === 0) {
        return (
            <section className="py-16">
                <p className="text-center text-muted-foreground">
                    Belum ada tempat yang tersedia.
                </p>
            </section>
        );
    }

    return (
        <section className="pt-16">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {places.map((place) => (
                    <SmallCard
                        key={place.id}
                        place={place}
                        isExplorePage={true}
                    />
                ))}
            </div>
        </section>
    )
}