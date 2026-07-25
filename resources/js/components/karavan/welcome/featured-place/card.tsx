import { Star, ChevronRight, Gem } from "lucide-react";
import type { Place } from "@/types/place";

interface CardProps {
    place: Place;
    isExplorePage?: boolean | null;
}

function HeroCard({ place }: CardProps) {
    const isHiddenGem = place.category.name === 'Hidden-Gems';

    return (
        <article
            className="
                group box-content relative
                space-y-5 border border-amber-300/20
                rounded-xl bg-black/50
                hover:-translate-y-1 cursor-pointer
                transition-all duration-300
                hover:border-yellow-400/30
                hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]
            "
        >
            <img
                src={place.place_images[0]?.image}
                alt={place.name}
                className="aspect-16/10 md:aspect-3/5 w-full rounded-lg object-cover"
            />
            <div className="p-4 space-y-5 mb-12">
                <div className="flex justify-between items-center">
                    {isHiddenGem ? (
                        <span className="bg-yellow-300 text-black py-1 px-4 text-xs rounded-full flex items-center justify-center gap-1">
                            <Gem className="size-4 text-blue-600 fill-blue-400" />
                            {place.category.name}
                        </span>
                    ) : (
                        <span className="bg-muted-foreground/30 px-4 py-1 text-xs text-white rounded-full">
                            {place.category.name}
                        </span>
                    )}
                    <span className="flex items-center justify-center gap-1">
                        <Star className="size-4.5 fill-yellow-400 text-yellow-500 pb-0.5" />
                        {place.avg_rating}
                    </span>
                </div>
                <h2 className="text-3xl font-semibold md:font-bold">
                    {place.name}
                </h2>
                <p className="italic text-muted-foreground">
                    {place.tagline}
                </p>
                <p className="line-clamp-2 md:line-clamp-3">
                    {place.description}
                </p>
            </div>
            <div className="absolute bottom-2 w-full p-4">
                <div className="flex justify-between text-xs uppercase">
                    <span>{place.district}</span>
                    <span className="flex items-center gap-1 group-hover:text-yellow-300 transition-all duration-200">
                        See Detail
                        <ChevronRight className="size-4" />
                    </span>
                </div>
            </div>
        </article>
    );
}

function SmallCard({
    place,
    isExplorePage = false
}: CardProps) {
    const isHiddenGem = place.category.name === 'Hidden-Gems';

    return (
        <article
            className="
                group box-content relative
                space-y-3 border border-amber-300/20
                rounded-xl bg-black/50
                hover:-translate-y-1 cursor-pointer
                transition-all duration-300
                hover:border-yellow-400/30
                hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]
            "
        >
            <img
                src={place.place_images[0]?.image}
                alt={place.name}
                className="aspect-video w-full rounded-lg object-cover"
            />
            <div className={`p-4 space-y-3 mb-12 ${isExplorePage ? 'xl:mb-12' : 'xl:mb-0'}`}>
                <div className="flex justify-between items-center">
                    {isHiddenGem ? (
                        <span className="bg-yellow-300 text-black py-1 px-4 text-xs rounded-full flex items-center justify-center gap-1">
                            <Gem className="size-4 text-blue-600 fill-blue-400" />
                            {place.category.name}
                        </span>
                    ) : (
                        <span className="bg-muted-foreground/30 px-4 py-1 text-xs text-white rounded-full">
                            {place.category.name}
                        </span>
                    )}
                    <span className="flex items-center justify-center gap-1">
                        <Star className="size-4.5 fill-yellow-400 text-yellow-500 pb-0.5" />
                        {place.avg_rating}
                    </span>
                </div>
                <h3 className="text-2xl font-semibold">
                    {place.name}
                </h3>
                <p className="italic text-base text-muted-foreground">
                    {place.tagline}
                </p>
                <p className="line-clamp-2 text-sm">
                    {place.description}
                </p>
            </div>
            <div className="absolute bottom-2 w-full p-4">
                <div className="flex justify-between text-xs uppercase">
                    <span>{place.district}</span>
                    <span className="flex items-center gap-1 group-hover:text-yellow-300 transition-all duration-200">
                        See Detail
                        <ChevronRight className="size-4" />
                    </span>
                </div>
            </div>
        </article>
    );
}

export {
    HeroCard,
    SmallCard
}