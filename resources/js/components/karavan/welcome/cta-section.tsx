import { explore } from "@/routes";

export default function CtaSection() {
    return (
        <section className="relative w-full pt-20 lg:pt-30 flex justify-center items-center">
            <div className="relative w-full px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 text-center rounded-2xl lg:rounded-[30px] overflow-hidden
                bg-[radial-gradient(circle_at_92%_8%,rgba(250,204,21,0.25)_0%,rgba(250,204,21,0.12)_18%,rgba(250,204,21,0.05)_30%,transparent_45%),linear-gradient(135deg,#090909_0%,#171717_55%,#2b2415_100%)]
                shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_0_40px_rgba(0,0,0,0.6)]"
            >
                <h2 className="text-white font-medium leading-tight mb-6
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px]">
                    Siap Berpetualang Lebih Jauh Bersama{" "}
                    <span className="text-yellow-300">Karaventure?</span>
                </h2>
                <p className="text-[#bdbdbd] text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-10 leading-6 sm:leading-7">
                    Yuk mulai jelajahi Karawang dari yang paling dekat sama rumahmu.
                </p>
                <a
                    href={explore().url}
                    className="
                        inline-flex w-full items-center justify-center
                        rounded-full border border-yellow-300
                        bg-yellow-300
                        px-6 py-3
                        text-sm font-semibold
                        text-black
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:bg-amber-300/10 hover:text-white
                        hover:shadow-[0_10px_30px_rgba(250,204,21,0.35)]
                        sm:px-10 sm:py-4 sm:text-base
                        md:w-fit md:px-32 md:text-lg
                    "
                >
                    MULAI
                </a>
            </div>
        </section>
    );
}