import { Head } from "@inertiajs/react";
import DetailIndex from "@/components/karavan/place/detail-index";
import type { Place } from "@/types/place";

interface PlaceIndexProps {
    place: Place;
    relatedPlaces: Place[];
}

export default function PlaceIndex({
    place,
    relatedPlaces,
}: PlaceIndexProps) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <DetailIndex
                place={place}
                relatedPlaces={relatedPlaces}
            />
        </>
    )
}