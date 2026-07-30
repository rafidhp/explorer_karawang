import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    Coffee,
    UtensilsCrossed,
    Trees,
    Landmark,
    Clapperboard,
    ShoppingBag,
    Gem,
    Compass,
} from 'lucide-react';
import { explore } from '@/routes';
import type { Category } from "@/types/category";

interface Props {
    categories: Category[];
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

export default function CategorySection({
    categories,
}: Props) {
    return (
        <section className="relative mx-auto py-24">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
                <div>
                    <p className="text-sm md:text-base text-amber-300 font-medium mb-2">
                        Kategori
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Mau eksplor <span className="text-amber-300">yang mana?</span>
                    </h2>
                </div>
                <p className="text-muted-foreground max-w-sm text-sm md:text-base">
                    Pilih kategorinya, kami siapin daftar tempat terbaik versi warga Karawang asli.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {categories.map((cat) => {
                    const config = categoryConfig[cat.name as keyof typeof categoryConfig] ?? Compass;
                    const Icon = config?.icon;
                    const label = config?.label ?? cat.name;

                    return (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                        >
                            <Link
                                href={explore()}
                                data={{ category: cat.id }}
                                className="group block bg-black/80 rounded-2xl border border-amber-300/20 p-5 text-center hover:shadow-glow transition-all"
                            >
                                <div className="relative mx-auto w-12 h-12 mb-3">
                                    <div className="absolute inset-0 bg-amber-300 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                                    <div className="relative bg-glass bg-white/10 rounded-xl size-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                                        <Icon className="size-5 group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                </div>

                                <p className="font-semibold text-sm">
                                    {label}
                                </p>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>        
    );
}