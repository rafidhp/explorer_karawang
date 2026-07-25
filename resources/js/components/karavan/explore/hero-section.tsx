import {
    Search,
    SlidersHorizontal,
    MapPin,
    Utensils,
    Coffee,
    Trees,
    Landmark,
    Clapperboard,
    ShoppingBag,
    Gem,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
    {
        name: "Semua",
        active: true,
    },
    {
        name: "Kuliner",
        icon: Utensils,
    },
    {
        name: "Cafe",
        icon: Coffee,
    },
    {
        name: "Alam",
        icon: Trees,
    },
    {
        name: "Sejarah",
        icon: Landmark,
    },
    {
        name: "Hiburan",
        icon: Clapperboard,
    },
    {
        name: "Belanja",
        icon: ShoppingBag,
    },
    {
        name: "Hidden Gems",
        icon: Gem,
    },
];

export default function HeroSection() {
    return (
        <div className="mx-auto flex flex-col justify-center mt-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-sm font-medium text-yellow-300 w-fit">
                <MapPin className="size-4" />
                Direktori Karawang
            </div>
            <h1 className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
                Cari tempat yang{" "}
                <span className="text-yellow-300">
                    pas buat kamu.
                </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Powered by Karaventure — tinggal ketik,
                kami bantu menemukan tempat terbaik di Karawang.
            </p>
            <div
                className="
                    mt-8 rounded-3xl
                    border border-white/10
                    bg-[#0d0d0d]/90
                    p-3 backdrop-blur
                    transition-colors duration-200
                    focus-within:border-yellow-300/60
                "
            >
                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-zinc-500" />
                        <Input
                            placeholder="Cari sate maranggi, cafe, curug..."
                            className="
                                h-10
                                border-0
                                bg-transparent
                                pl-14
                                text-xl
                                shadow-none
                                placeholder:text-zinc-500
                                focus-visible:ring-0
                                focus-visible:outline-none
                            "
                        />
                    </div>
                    <button
                        className="
                            inline-flex h-10 items-center justify-center gap-2
                            rounded-2xl border border-white/10 bg-zinc-900
                            px-8 font-medium text-white
                            transition-all duration-300
                            hover:border-yellow-300/40
                            hover:bg-yellow-300
                            hover:text-black
                            cursor-pointer
                        "
                    >
                        <SlidersHorizontal className="size-5" />
                        Filter
                    </button>
                </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <button
                            key={category.name}
                            className={`
                                inline-flex items-center gap-2 rounded-full
                                border px-5 py-3
                                transition-all duration-300
                                ${category.active
                                    ? "border-yellow-300 bg-yellow-300 text-black"
                                    : "border-white/10 bg-white/5 text-white hover:border-yellow-300/40 hover:bg-yellow-300/10 cursor-pointer"
                                }
                            `}
                        >
                            {Icon && (
                                <Icon className="size-4" />
                            )}
                            {category.name}
                        </button>
                    );
                })}
            </div>
            <p className="mt-8 text-sm text-zinc-400">
                12 tempat ditemukan • 257 ms
            </p>
        </div>
    )
}