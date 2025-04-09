import Image from "next/image";
import Link from "next/link";

export const CTAButton = () => (
    <>
        <Link
            data-testid="cta-button"
            className="bg-[#FC004E] w-full text-white font-bold py-2 px-4 rounded-[10px] text-center text-[20px]  hover:bg-[#FC004E]/80 shadow-[2px_2px_10px_rgba(0,231,249,1)] flex justify-center items-center gap-2"
            href="#"
            passHref
        >
            GET STARTED <Image src="/right-arrow.png" alt="Right arrow" width={11} height={6} />
        </Link>
        <p className=" text-xs font-normal">1-minute quiz for personalized Insights</p>
    </>
)

export default CTAButton;