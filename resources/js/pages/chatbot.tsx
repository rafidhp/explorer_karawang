import { Head } from "@inertiajs/react";
import ChatbotIndex from "@/components/karavan/chatbot/chatbot-index";
import UserLayout from "@/layouts/user-layout";

export default function Chatbot() {
    return (
        <UserLayout>
            <Head title="Chatbot">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <ChatbotIndex />
        </UserLayout>
    )
}