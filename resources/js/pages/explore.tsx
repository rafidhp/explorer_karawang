import { Head } from "@inertiajs/react";
import ExploreIndex from "@/components/karavan/explore/explore-index";
import UserLayout from "@/layouts/user-layout";
import type { Category } from "@/types/category";
import type { Place } from "@/types/place";

interface ExploreProps {
    places: Place[];
    categories: Category[];
}

export default function About({
    places,
    categories,
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
            <ExploreIndex
                places={places}
                categories={categories}
            />
        </UserLayout>
    )
}