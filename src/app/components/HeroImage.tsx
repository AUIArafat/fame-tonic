import Image from "next/image"


export const HeroImage = () => {
    return (
        <div className="relative sm:-ml-20 z-0 w-full sm:w-auto">
            <Image
                src="/mobile-mockup.png"
                alt="Hero Image"
                width={666}
                height={679}
            />
        </div>
    )
}

export default HeroImage;