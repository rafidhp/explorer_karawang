import ThreeDBackground from "@/components/karavan/welcome/3d-background";
import CategorySection from "@/components/karavan/welcome/category-section";
import HeroSection from "@/components/karavan/welcome/hero-section";
import type { Category } from "@/types/category";

interface Props {
    categories: Category[];
}

export default function Index({
    categories
}: Props) {
    return (
        <div className="mb-16">
            <HeroSection />
            <CategorySection categories={categories} />
            <ThreeDBackground />
        </div>
    )
}