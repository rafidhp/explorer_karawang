import { Head } from "@inertiajs/react";
import AboutIndex from "@/components/karavan/about/about-index";
import ThreeDBackground from "@/components/karavan/welcome/3d-background";
import UserLayout from "@/layouts/user-layout"

export default function About() {
    return (
        <UserLayout>
            <Head>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AboutIndex />
            <ThreeDBackground />
        </UserLayout>
    )
}