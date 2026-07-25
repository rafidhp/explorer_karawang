import {
    ArrowRight,
    BotMessageSquare,
    Sparkles,
    User,
} from "lucide-react";

const suggestions = [
    "Cafe buat nugas",
    "Tempat makan keluarga",
    "Hidden gems Karawang",
];

const messages = [
    {
        id: 1,
        role: "user",
        text: "Cariin cafe yang enak buat kerja dong.",
    },
    {
        id: 2,
        role: "ai",
        text: "Aku nemuin beberapa cafe yang tenang, punya WiFi cepat, colokan banyak, dan cocok buat nugas 👇",
    },
];

const recommendations = [
    {
        id: 1,
        name: "Kopi Senja",
        category: "Cafe",
        description: "WiFi cepat • Banyak colokan • Buka sampai 23.00",
    },
    {
        id: 2,
        name: "Ruang Temu",
        category: "Coffee Shop",
        description: "Tempat nyaman • Cocok meeting • Hidden gem",
    },
];

export default function AiPreview() {
    return (
        <section className="w-full pt-20 lg:pt-30">
            <div
                className="
                    relative overflow-hidden rounded-2xl
                    border border-white/10
                    bg-[radial-gradient(circle_at_92%_8%,rgba(250,204,21,0.25)_0%,rgba(250,204,21,0.12)_18%,rgba(250,204,21,0.05)_30%,transparent_45%),linear-gradient(135deg,#090909_0%,#171717_55%,#2b2415_100%)]
                    px-6 py-12
                    shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_0_40px_rgba(0,0,0,0.6)]
                    sm:px-10 sm:py-16
                    lg:px-16
                "
            >
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm text-yellow-300 w-fit">
                            <Sparkles className="size-4" />
                            Karaventure AI Assistant
                        </div>
                        <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Kenalan sama{" "}
                            <span className="text-yellow-300">
                                Karaventure.
                            </span>
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                            Karaventure siap membantu menemukan tempat terbaik di
                            Karawang. Cukup ceritakan suasana yang kamu
                            inginkan, lalu biarkan AI memberikan rekomendasi
                            yang paling sesuai.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {suggestions.map((item) => (
                                <span
                                    key={item}
                                    className="
                                        rounded-full
                                        border border-white/10
                                        bg-white/5
                                        px-4 py-2
                                        text-sm cursor-default
                                        text-zinc-200
                                    "
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div
                        className="
                            rounded-3xl
                            border border-white/10
                            bg-black/40
                            p-6
                            backdrop-blur
                        "
                    >
                        <div className="space-y-5">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${
                                        message.role === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`
                                            flex max-w-[85%] gap-3 rounded-2xl px-4 py-3
                                            ${message.role === "user"
                                                ? "bg-yellow-300 text-black"
                                                : "border border-white/10 bg-white/5 text-white"
                                            }
                                        `}
                                    >
                                        {message.role === "ai" && (
                                            <BotMessageSquare className="mt-0.5 size-5 text-yellow-300" />
                                        )}
                                        {message.role === "user" && (
                                            <User className="mt-0.5 size-5" />
                                        )}
                                        <p className="text-sm leading-6">
                                            {message.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div className="space-y-3 pt-3">
                                {recommendations.map((place) => (
                                    <div
                                        key={place.id}
                                        className="
                                            flex items-center justify-between
                                            rounded-2xl
                                            border border-white/10
                                            bg-white/5
                                            p-4
                                            transition-all
                                            hover:border-yellow-300/40
                                        "
                                    >
                                        <div>
                                            <p className="font-semibold text-white">
                                                {place.name}
                                            </p>
                                            <p className="text-sm text-yellow-300">
                                                {place.category}
                                            </p>
                                            <p className="mt-1 text-sm text-zinc-400">
                                                {place.description}
                                            </p>
                                        </div>
                                        <ArrowRight className="size-5 text-yellow-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}