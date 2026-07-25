import HeroSection from "@/components/karavan/explore/hero-section";
import PlaceSection from "@/components/karavan/explore/place-section";
import ThreeDBackground from "@/components/karavan/welcome/3d-background";
import type { Place } from "@/types/place";

interface ExploreIndexProps {
    places: Place[];
}

export default function ExploreIndex({
    places,
}: ExploreIndexProps) {
    return (
        <div className="mb-16">
            <HeroSection />
            <PlaceSection places={places} />
            <ThreeDBackground />
        </div>
    )
}