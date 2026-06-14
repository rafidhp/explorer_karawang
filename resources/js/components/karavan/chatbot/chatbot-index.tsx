import MessageSection from "@/components/karavan/chatbot/message-section";
import ThreeDBackground from "@/components/karavan/welcome/3d-background";

export default function ChatbotIndex() {
    return (
        <div className="flex flex-col w-full">
            <MessageSection />
            <ThreeDBackground />
        </div>
    )
}