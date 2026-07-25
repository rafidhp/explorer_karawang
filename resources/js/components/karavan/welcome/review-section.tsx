import {
    MessageCircle,
    Quote,
    UserRound,
} from "lucide-react";

const reviews = [
    {
        id: 1,
        comment:
            "Akhirnya ada platform yang bener-bener ngerti Karawang. Hidden gems-nya juara!",
        name: "Rara Permata",
        role: "Travel Blogger",
    },
    {
        id: 2,
        comment:
            "Cari cafe buat ngerjain tugas tinggal scroll. Filter-nya enak banget dipake.",
        name: "Dimas Anugrah",
        role: "Mahasiswa Unsika",
    },
    {
        id: 3,
        comment:
            "Warungku jadi rame banget setelah masuk Explore Karawang. Terima kasih banyak!",
        name: "Bu Eli",
        role: "Pelaku UMKM",
    },
];

export default function ReviewSection() {
    return (
        <div className="flex flex-col gap-8 w-full mt-24">
            <div className="flex flex-col items-center gap-2 w-full">
                <span
                    className="
                        text-yellow-300 text-base
                        flex items-center justify-center
                        w-full gap-2 font-medium
                    "
                >
                    <MessageCircle className="size-4" />
                    Kata Mereka
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    Komentar <span className="text-yellow-400">Warga Karawang</span>
                </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className="
                            group
                            rounded-3xl
                            border border-yellow-300/20
                            bg-black/30
                            p-8 cursor-default
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-yellow-400/30
                            hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]
                        "
                    >
                        <Quote
                            className="
                                mb-6 size-8
                                text-yellow-400
                            "
                        />
                        <p className="min-h-24 text-lg leading-8 text-white">
                            {review.comment}
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <div
                                className="
                                    flex size-14 items-center justify-center
                                    rounded-full
                                    bg-yellow-400/10
                                    ring-2 ring-white/10
                                "
                            >
                                <UserRound className="size-10 text-yellow-300" />
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-white">
                                    {review.name}
                                </h4>
                                <p className="text-base text-slate-400">
                                    {review.role}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}