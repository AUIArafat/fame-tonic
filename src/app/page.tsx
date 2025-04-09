import SaleBanner from "./components/SaleBanner";
import FeatureList from "./components/FeatureList";
import CTAButton from "./components/CTAButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";

export default function Home() {
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
        <SaleBanner />
        <div className="max-w-6xl mx-5 sm:mx-auto sm:px-6">
          <Navbar />
          <div className="flex flex-col-reverse items-center sm:flex-row relative">
            <div className="flex flex-col items-center sm:items-start sm:max-w-[48%] relative z-10 sm-pr-8">
              <h1 className="text-[25px] sm:text-[35px] font-bold text-center sm:text-left ">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h1 className="text-[25px] sm:text-[35px] text-center sm:text-left font-bold text-[#00E7F9] [text-shadow:0_4px_4px_rgba(252,0,78,1)] ">
                Discover your way to success with Fametonic:
              </h1>
              <FeatureList features={features} />
              <div className="sm:flex hidden flex-col gap-[10px] sm:w-[313px] w-full items-center mt-6">
                <CTAButton />
              </div>

              <div className="sm:hidden flex flex-col gap-[10px] sm:w-[313px] w-full items-center fixed bottom-0 bg-black py-10 px-5">
                <CTAButton />
              </div>

              <Footer />
            </div>
            <HeroImage />
          </div>
        </div>
      </main>
    </div>
  );
}
