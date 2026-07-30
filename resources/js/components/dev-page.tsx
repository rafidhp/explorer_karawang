import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    Code2,
    Hammer,
    Cpu,
    CheckCircle2,
    Circle,
    LoaderCircle,
    ArrowLeft,
    ChevronRight,
} from "lucide-react";
import { home } from "@/routes";

const steps = [
    {
        title: "UI Design",
        done: true,
    },
    {
        title: "Backend API",
        done: true,
    },
    {
        title: "Integration",
        loading: true,
    },
    {
        title: "Testing",
    },
    {
        title: "Deployment",
    },
];

export default function DevPage() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [.3, .6, .3],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                }}
            />

            {/* floating icons */}
            <motion.div
                className="absolute left-24 top-32"
                animate={{
                    y: [-15, 15, -15],
                    rotate: [-8, 8, -8],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                }}
            >
                <Code2 className="size-12 text-yellow-300/30" />
            </motion.div>
            <motion.div
                className="absolute right-24 bottom-32"
                animate={{
                    y: [20, -20, 20],
                    rotate: [8, -8, 8],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                }}
            >
                <Cpu className="size-12 text-yellow-300/30" />
            </motion.div>

            {/* card */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 40,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: .8,
                }}
                className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/10 bg-black/50 p-10 backdrop-blur-xl"
            >
                <div className="mb-6 flex items-center gap-3">
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "linear",
                        }}
                    >
                        <Hammer className="size-8 text-yellow-300" />
                    </motion.div>
                    <span className="font-mono text-yellow-300">
                        FEATURE STATUS
                    </span>
                </div>
                <h1 className="text-5xl font-bold">
                    Under <span className="text-yellow-300">Development</span>
                </h1>
                <p className="mt-5 text-lg leading-8 text-zinc-400">
                    We're crafting something awesome.
                    This page is still being built and will be available soon.
                </p>

                <Link href={home()}>
                    <motion.button
                        whileHover="hover"
                        whileTap={{ scale: 0.97 }}
                        initial="rest"
                        animate="rest"
                        variants={{
                            rest: {},
                            hover: {},
                        }}
                        className="
                            group relative mt-8 flex w-full items-center gap-3 overflow-hidden
                            rounded-2xl border border-yellow-300/20
                            bg-zinc-950 px-6 py-4
                            text-left cursor-pointer
                            shadow-lg shadow-yellow-300/5
                            transition-colors
                        "
                    >
                        {/* Glow */}
                        <motion.div
                            variants={{
                                rest: {
                                    x: "-420%",
                                },
                                hover: {
                                    x: "420%",
                                },
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="
                                absolute inset-y-0 w-20
                                -skew-x-12
                                bg-gradient-to-r
                                from-transparent
                                via-yellow-300/25
                                to-transparent
                            "
                        />

                        <motion.div
                            variants={{
                                rest: {
                                    rotate: 0,
                                    x: 0,
                                },
                                hover: {
                                    rotate: -15,
                                    x: -4,
                                },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                            }}
                        >
                            <ArrowLeft className="size-5 text-yellow-300" />
                        </motion.div>

                        <div className="flex flex-col w-full">
                            <span className="font-mono text-xs text-zinc-500">
                                $ cd ..
                            </span>

                            <span className="font-medium text-white">
                                Back to Home
                            </span>
                        </div>

                        <motion.div
                            variants={{
                                rest: {
                                    x: 0,
                                    opacity: 0.5,
                                },
                                hover: {
                                    x: 4,
                                    opacity: 1,
                                },
                            }}
                        >
                            <ChevronRight className="size-4 text-zinc-500 group-hover:text-yellow-300" />
                        </motion.div>
                    </motion.button>
                </Link>

                {/* progress */}
                <div className="mt-8">
                    <div className="mb-3 flex justify-between text-sm text-zinc-400">
                        <span>Overall Progress</span>
                        <span>67%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            className="h-full rounded-full bg-yellow-300"
                            animate={{
                                width: [
                                    "0%",
                                    "45%",
                                    "67%",
                                    "62%",
                                    "67%",
                                ],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 8,
                            }}
                        />
                    </div>
                </div>

                {/* checklist */}
                <div className="mt-10 space-y-4">
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className="flex items-center gap-3"
                        >
                            {step.done && (
                                <CheckCircle2 className="size-5 text-green-400" />
                            )}
                            {step.loading && (
                                <LoaderCircle className="size-5 animate-spin text-yellow-300" />
                            )}
                            {!step.done && !step.loading && (
                                <Circle className="size-5 text-zinc-600" />
                            )}
                            <span className="text-zinc-300">
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}