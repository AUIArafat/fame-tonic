"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between items-start">
                <Image
                    aria-hidden
                    src="/logo.png"
                    alt="Fame Tonic Logo"
                    width={174}
                    height={174}
                    className="h-auto w-[108px] sm:w-[174px] object-contain transform translate-x-full sm:transform-none sm:translate-x-0"
                />
                <div className="hidden sm:flex gap-10 text-lg  font-semibold text-[#ABABAB]">
                    <Link
                        href="#"
                        passHref
                        data-testid="desktop-about"
                    >About us
                    </Link>
                    <Link
                        href="#"
                        passHref
                    >Contact
                    </Link>
                </div>
                <button
                    className="sm:hidden flex items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <Image
                        src="/hamburger-icon.png"
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
            {
                menuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
                        <button
                            className="absolute top-5 right-5 text-white text-2xl"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                        <Link
                            href="#"
                            passHref
                            className="text-white text-xl font-semibold mb-4"
                            onClick={() => setMenuOpen(false)}
                            data-testid="mobile-about"
                        >
                            About us
                        </Link>
                        <Link
                            href="#"
                            passHref
                            className="text-white text-xl font-semibold"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default Navbar;