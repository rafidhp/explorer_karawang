import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    return (
        <div
            onClick={() => window.history.back()}
            className="
                absolute top-4 left-4
                rounded-full bg-black/70
                border border-white/40
                aspect-square p-3 z-50
                hover:bg-black/50
                transition cursor-pointer
            "
        >
            <ArrowLeft className="size-6" />
        </div>
    )
}