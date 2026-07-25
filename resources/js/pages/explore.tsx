import { Head } from "@inertiajs/react";
import ExploreIndex from "@/components/karavan/explore/explore-index";
import UserLayout from "@/layouts/user-layout";
import type { Place } from "@/types/place";

interface ExploreProps {
    places: Place[];
}

export default function About({
    places,
}: ExploreProps) {
    return (
        <UserLayout>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <ExploreIndex places={places} />
        </UserLayout>
    )
}