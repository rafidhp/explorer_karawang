import { Link } from "@inertiajs/react";
import { MapPin, Search, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { home } from "@/routes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menus = [
        {
            name: "Beranda", href: home().url,
        },
        {
            name: "Eksplorasi", href: home().url,
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            if (
                isOpen && 
                dropdownRef.current && 
                !dropdownRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener(
            'click',
            handleClickOutside
        );

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="fixed w-full left-1/2 top-2 z-12 -translate-x-1/2">
            <nav
                className={`
                    px-6 md:px-13.5 py-5
                    rounded-full box-border
                    bg-transparent
                    transition-transform duration-500
                    ease-[cubic-bezier(.22,1,.36,1)]

                    ${scrolled
                        ? `
                            py-6
                            md:px-8.5
                            translate-y-[15px] scale-[0.92]
                            bg-[rgba(30,27,38,0.75)]
                            backdrop-blur-[14px]
                            border border-white/[0.2]
                            shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                        `
                        : "translate-y-0 scale-100"
                    }
                `}
            >
                <div className="flex justify-between items-center">
                    <Link
                        href={home().url}
                        className="relative flex flex-row justify-center items-center gap-2 group transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(252,211,77,0.25)]"
                    >
                        <MapPin
                            className="
                                pt-0.9 md:pt-0.7 w-6 md:w-7 h-6 md:h-7
                                transition-all duration-500
                                ease-out
                                group-hover:text-amber-300
                                group-hover:scale-125
                                group-hover:-rotate-12
                                group-hover:-translate-y-0.5
                            "
                        />
                        <span className="font-medium text-xl md:text-2xl transition-all duration-500 ease-out group-hover:tracking-wide group-hover:-translate-y-[1px]">
                            Explore <span className="text-amber-300 transition-all duration-500 group-hover:text-amber-200 group-hover:drop-shadow-[0_0_12px_rgba(252,211,77,0.8)]">Karawang</span>
                        </span>
                        <span
                            className="
                                absolute -bottom-1 left-0
                                h-[2px] w-0
                                bg-amber-300

                                transition-all duration-500
                                group-hover:w-full
                            "
                        />
                    </Link>

                    {/* desktop menus */}
                    <div className="hidden md:flex justify-center items-center pt-1">
                        <ul className="flex flex-row items-center gap-8">
                            {menus.map((menu) => (
                                <li key={menu.name}>
                                    <Link
                                        href={menu.href}
                                        className="
                                            relative overflow-hidden
                                            group block
                                            transition-colors duration-300
                                            hover:text-amber-300
                                        "
                                    >
                                        {menu.name}
                                        <span
                                            className="
                                                block absolute bottom-0 left-0
                                                h-[2px] w-0 bg-amber-300
                                                transition-[width] duration-300
                                                group-hover:w-full
                                            "
                                        />
                                    </Link>
                                </li>
                            ))}
                            <li className="
                                    group
                                    hover:cursor-pointer
                                    flex items-center gap-2
                                    border border-white/20
                                    rounded-full
                                    ps-4
                                    bg-white/[0.03]
                                    backdrop-blur-[14px]
                                    transition-all duration-300
                                    hover:border-amber-300/60
                                    hover:bg-amber-300/10
                                    hover:shadow-[0_0_25px_rgba(252,211,77,0.15)]
                                "
                            >
                                <span
                                    className="
                                        text-sm
                                        transition-all duration-300
                                        group-hover:text-amber-300
                                    "
                                >
                                    Search
                                </span>
                                <Search
                                    className="
                                        h-9 w-9
                                        rounded-full
                                        p-1.5

                                        border border-white/20
                                        bg-white/8
                                        backdrop-blur-[14px]

                                        transition-all duration-300

                                        group-hover:text-amber-300
                                        group-hover:border-amber-300/60
                                        group-hover:bg-amber-300/15
                                        group-hover:rotate-75
                                    "
                                />
                            </li>
                        </ul>
                    </div>

                    {/* mobile hamburger */}
                    <button
                        onClick={(e) => {
                            setIsOpen(!isOpen);
                            e.stopPropagation();
                        }}
                        className="md:hidden flex items-center justify-center hover:cursor-pointer transition-transform"
                    >
                        {isOpen ? (
                            <X className="w-7 h-7" />
                        ) : (
                            <Menu className="w-7 h-7" />
                        )}
                    </button>
                </div>
            </nav>
            {/* mobile menus */}
            <div
                className={`
                    md:hidden
                    overflow-hidden
                    transition-all duration-100
                    px-6 md:px-13.5
                    ${isOpen
                        ? "max-h-96 opacity-100 mt-5 pointer-events-auto"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }
                `}
            >
                <div
                    className="
                        w-full rounded-3xl
                        bg-black/20 backdrop-blur-xl
                        border border-white/10
                        p-3
                    "
                >
                    <ul className="flex flex-col">
                        {menus.map((menu) => (
                            <li key={menu.name}>
                                <Link
                                    href={menu.href}
                                    className="
                                        w-full block
                                        px-5 py-4
                                        rounded-2xl
                                        hover:bg-white/10
                                        transition-colors
                                    "
                                    onClick={() => setIsOpen(false)}
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button
                                className="
                                    w-full flex items-center gap-3
                                    px-5 py-4 rounded-2xl
                                    hover:cursor-pointer
                                    hover:bg-white/10
                                    transition-colors
                                "
                            >
                                <Search className="w-5 h-5" />
                                Search
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}