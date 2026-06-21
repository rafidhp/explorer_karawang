import { Head } from "@inertiajs/react";
import Index from "@/components/karavan/welcome";
import UserLayout from "@/layouts/user-layout";
import type { Category } from "@/types/category";

interface Props {
    categories: Category[];
}

export default function Welcome({
    categories,
}: Props) {
    return (
        <UserLayout>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <Index categories={categories} />
        </UserLayout>
    )
}
