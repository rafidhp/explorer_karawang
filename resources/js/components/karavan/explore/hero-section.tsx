import {
    Search,
    SlidersHorizontal,
    MapPin,
    UtensilsCrossed,
    Coffee,
    Trees,
    Landmark,
    Clapperboard,
    ShoppingBag,
    Gem,
    Flame,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Category } from "@/types/category";
import type { Place } from "@/types/place";

interface HeroSectionProps {
    categories: Category[];
    places: Place[];
    search: string;
    onSearchChange: (value: string) => void;
    selectedCategory: number | null;
    onCategoryChange: (categoryId: number | null) => void;
    showTrending: boolean;
    onTrendingChange: (value: boolean) => void;
}

const categoryConfig = {
    Kuliner: {
        icon: UtensilsCrossed,
        label: "Kuliner",
    },
    Cafe: {
        icon: Coffee,
        label: "Cafe",
    },
    Alam: {
        icon: Trees,
        label: "Alam",
    },
    Sejarah: {
        icon: Landmark,
        label: "Sejarah",
    },
    Hiburan: {
        icon: Clapperboard,
        label: "Hiburan",
    },
    Belanja: {
        icon: ShoppingBag,
        label: "Belanja",
    },
    "Hidden-Gems": {
        icon: Gem,
        label: "Hidden Gems",
    },
} as const;

export default function HeroSection({
    categories,
    places,
    search,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    showTrending,
    onTrendingChange,
}: HeroSectionProps) {
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
                            value={search}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Cari sate maranggi, cafe, curug..."
                            className="
                                h-10 border-0
                                bg-transparent
                                pl-14 text-xl
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
            <div className="mt-8 flex items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
                <button
                    onClick={() => {
                        onCategoryChange(null);
                        onTrendingChange(false);
                    }}
                    className={`
                        inline-flex items-center gap-2 rounded-full
                        border px-5 py-3 transition-all duration-300
                        ${selectedCategory === null && !showTrending
                            ? "border-yellow-300 bg-yellow-300 text-black"
                            : "border-white/10 bg-white/5 text-white hover:border-yellow-300/40 hover:bg-yellow-300/10 cursor-pointer"
                        }
                    `}
                >
                    Semua
                </button>
                <button
                    onClick={() => {
                        onTrendingChange(!showTrending);
                        onCategoryChange(null);
                    }}
                    className={`
                        inline-flex items-center gap-2 rounded-full
                        border px-5 py-3 transition-all duration-300
                        ${showTrending
                            ? "border-red-500 bg-red-500/10 text-white"
                            : "border-white/10 bg-white/5 text-white hover:border-red-500/40 hover:bg-red-500/10 cursor-pointer"
                        }
                    `}
                >
                    <div className="relative size-4">
                        <Flame className="absolute inset-0 size-4" />

                        <Flame
                            className={`
                                absolute inset-0 size-4
                                fill-red-500 text-red-500
                                transition-[clip-path] duration-500 ease-out
                                ${showTrending
                                    ? "[clip-path:inset(0_0_0_0)]"
                                    : "[clip-path:inset(100%_0_0_0)]"
                                }
                            `}
                        />
                    </div>

                    Trending
                </button>

                {categories.map((category) => {
                    const config = categoryConfig[category.name as keyof typeof categoryConfig];
                    const Icon = config?.icon;
                    const label = config?.label ?? category.name;

                    return (
                        <button
                            key={category.id}
                            onClick={() => {
                                onCategoryChange(category.id);
                                onTrendingChange(false);
                            }}
                            className={`
                                inline-flex items-center gap-2 rounded-full whitespace-nowrap
                                border px-5 py-3 transition-all duration-300
                                ${selectedCategory === category.id
                                    ? "border-yellow-300 bg-yellow-300 text-black"
                                    : "border-white/10 bg-white/5 text-white hover:border-yellow-300/40 hover:bg-yellow-300/10 cursor-pointer"
                                }
                            `}
                        >
                            {Icon && <Icon className="size-4" />}
                            {label}
                        </button>
                    );
                })}
            </div>
            <p className="mt-8 text-sm text-zinc-400">
                {places.length} tempat ditemukan
            </p>
        </div>
    )
}