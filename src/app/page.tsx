"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const features = [
    {
      icon: "/star.png",
      alt: "Check icon",
      text: "Start growing your influence right away—no waiting required!",
    },
    {
      icon: "/star.png",
      alt: "Check icon",
      text: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    },
    {
      icon: "/star.png",
      alt: "Check icon",
      text: "Use a Personal AI Worker to boost your content",
    },
    {
      icon: "/star.png",
      alt: "Check icon",
      text: "Learn from expert-led courses designed for aspiring influencers",
    },
  ];
  return (
    <div>
      <main className="flex flex-col gap-4 sm:gap-8 row-start-2 items-center sm:items-start mb-40 sm:mb-0">
        <div className="bg-gradient-to-r from-[#FC004E] via-[#A350B2] to-[#10CBE0] w-full lg:h-[46px] h-auto text-center sm:text-[22px] text-[16px] font-extrabold flex flex-wrap items-center justify-center py-5 lg:py-0 text-white leading-tight">
          <span className="ml-1 text-[#00e7f9] ">🚀 FRESH BEGINNINGS SALE:</span>
          <span className="ml-1">Extra 25% OFF,</span>
          <span className="block sm:hidden w-full text-center">
            Limited Spots - start your journey today!
          </span>
          <span className="hidden sm:inline ml-1">
            Limited Spots - start your journey today!
          </span>
        </div>
        <div className="max-w-6xl mx-5 sm:mx-auto sm:px-6">
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
          {menuOpen && (
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
          )}
          <div className="flex flex-col-reverse items-center sm:flex-row relative">
            <div className="flex flex-col items-center sm:items-start sm:max-w-[48%] relative z-10 sm-pr-8">
              <h1 className="text-[25px] sm:text-[35px] font-bold text-center sm:text-left ">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h1 className="text-[25px] sm:text-[35px] text-center sm:text-left font-bold text-[#00E7F9] [text-shadow:0_4px_4px_rgba(252,0,78,1)] ">
                Discover your way to success with Fametonic:
              </h1>
              <ul className="text-[16px] text-left  gap-2 mt-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 py-1.5">
                    <Image
                      aria-hidden
                      src={feature.icon}
                      alt={feature.alt}
                      width={22}
                      height={22}
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <div className="sm:flex hidden flex-col gap-[10px] sm:w-[313px] w-full items-center mt-6">
                <Link
                  className="bg-[#FC004E] w-full text-white font-bold py-2 px-4 rounded-[10px] text-center text-[20px]  hover:bg-[#FC004E]/80 shadow-[2px_2px_10px_rgba(0,231,249,1)] flex justify-center items-center gap-2"
                  href="#"
                  passHref
                >
                  GET STARTED <Image src="/right-arrow.png" alt="Right arrow" width={11} height={6} />
                </Link>
                <p className=" text-xs font-normal">1-minute quiz for personalized Insights</p>
              </div>

              <div className="sm:hidden flex flex-col gap-[10px] sm:w-[313px] w-full items-center fixed bottom-0 bg-black py-10 px-5">
                <Link
                  className="bg-[#FC004E] w-full text-white font-bold py-2 px-4 rounded-[10px] text-center text-[20px]  hover:bg-[#FC004E]/80 shadow-[2px_2px_10px_rgba(0,231,249,1)] flex justify-center items-center gap-2"
                  href="#"
                  passHref
                >
                  GET STARTED <Image src="/right-arrow.png" alt="Right arrow" width={11} height={6} />
                </Link>
                <p className=" text-xs font-normal">1-minute quiz for personalized Insights</p>
              </div>

              <div className="mt-5 sm:mt-10 flex flex-col gap-3 items-center sm:items-start text-center sm:text-left  font-medium text-[#ABABAB]">
                <h2 className="text-xs">
                  By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                </h2>
                <p className="text-[10px]">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="relative sm:-ml-20 z-0 w-full sm:w-auto">
              <Image
                aria-hidden
                src="/mobile_mockup.png"
                alt="Hero Image"
                width={666}
                height={679}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
