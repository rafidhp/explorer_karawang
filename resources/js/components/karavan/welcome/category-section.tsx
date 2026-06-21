import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
    Coffee,
    UtensilsCrossed,
    Trees,
    Landmark,
    Ticket,
    ShoppingBag,
    Gem,
    Compass,
} from 'lucide-react';
import type { Category } from "@/types/category"

interface Props {
    categories: Category[];
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
    Kuliner: UtensilsCrossed,
    Cafe: Coffee,
    Alam: Trees,
    Sejarah: Landmark,
    Hiburan: Ticket,
    Belanja: ShoppingBag,
    'Hidden-Gems': Gem,
};

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
                {categories.map((cat, i) => {
                    const Icon = CATEGORY_ICONS[cat.name] ?? Compass;

                    return (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            whileHover={{ y: -4 }}
                        >
                            <Link
                                href='#'
                                data={{ category: cat.name }}
                                className="group block bg-black/80 rounded-2xl border border-amber-300/20 p-5 text-center hover:shadow-glow transition-all"
                            >
                                <div className="relative mx-auto w-12 h-12 mb-3">
                                    <div className="absolute inset-0 bg-amber-300 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                                    <div className="relative bg-glass bg-white/10 rounded-xl size-full flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                                        <Icon className="size-5 group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                </div>

                                <p className="font-semibold text-sm">
                                    {cat.name}
                                </p>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>        
    );
}