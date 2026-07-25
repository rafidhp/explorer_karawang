import ThreeDBackground from "@/components/karavan/welcome/3d-background";
import AiPreview from "@/components/karavan/welcome/ai-preview";
import CategorySection from "@/components/karavan/welcome/category-section";
import CtaSection from "@/components/karavan/welcome/cta-section";
import FeaturedPlace from "@/components/karavan/welcome/featured-place";
import HeroSection from "@/components/karavan/welcome/hero-section";
import ReviewSection from "@/components/karavan/welcome/review-section";
import type { Category } from "@/types/category";
import type { Place } from "@/types/place";

interface Props {
    places: Place[];
    categories: Category[];
}

export default function Index({
    places,
    categories,
}: Props) {
    return (
        <div className="mb-16">
            <HeroSection />
            <CategorySection categories={categories} />
            <FeaturedPlace places={places} />
            <AiPreview />
            <ReviewSection />
            <CtaSection />
            <ThreeDBackground />
        </div>
    )
}