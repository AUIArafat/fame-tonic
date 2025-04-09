export const SaleBanner = () => {
    return (
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
    )
}
export default SaleBanner;