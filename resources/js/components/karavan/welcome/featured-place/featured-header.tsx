import { Sparkles } from "lucide-react"

export default function FeaturedHeader() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center text-yellow-300">
                <Sparkles className="size-4 fill-yellow-300" />
                <p>Pilihan Karaventure</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Tempat-tempat yang <span className="text-yellow-300">wajib mampir</span>
            </h2>
        </div>
    )
}