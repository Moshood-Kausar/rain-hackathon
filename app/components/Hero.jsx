import Image from "next/image";
import Countdown from "./Countdown";
import rocket from "@/app/assets/rocket.png";
import planet1 from "@/app/assets/planet-1.png";
import planet2 from "@/app/assets/planet-2.png";

export default function Hero() {
  return (
    <section className="container mx-auto pt-[72px] pb-4 md:pb-[105px] px-4 md:px-10 lg:px-20 relative">
      <div>
        <h1 className="text-sm md:text-base text-center mx-auto w-fit h-fit rounded-lg px-4 md:px-[33px] py-[10px] leading-normal text-dark border border-[#4C4E1C] mb-[18px] md:mb-10">
            Oct 1st - Jan 31st 2025
        </h1>
        {/* <h1 className="text-center mx-auto w-fit h-fit rounded-lg bg-gradient-to-r from-[#95772B] via-[#4C4E1C] to-[#666828] p-px mb-10">
          <span className="flex bg-[#FEF9ED] bg-hero rounded-md px-[33px] pt-[9px] pb-[11px] text-dark">
            Oct 1st - Jan 31st 2025
          </span>
        </h1> */}
        <h2 className="text-2xl leading-normal md:text-[64px] text-dark max-w-[26ch] mx-auto text-center">
          Join the <span className="text-hero">RAIN</span> Hackathon 2024:
          Innovate the Future
        </h2>
        <p className="text-xs md:text-base text-center mx-auto max-w-[80ch] z-20 relative mt-3">
          Join us for the RAIN Hackathon 20244 where the brightest minds in
          Robotics and Artificial intelligence will converge to tackle
          Africa&apos;s most pressing challenges
        </p>
        <div className="flex w-[60%] md:w-[55%] mt-[11px] mb-[54px]">
          <div className="flex relative w-full max-w-[490px] ml-auto">
            <div className="absolute -bottom-16 md:-bottom-[134px] flex flex-col justify-center items-center text-center hero-stat rounded-full text-[10px] md:text-base text-[#EEE] w-fit h-fit min-w-[60px] md:min-w-[90px] aspect-square">
              1million+
              <span className="text-[10px] md:text-sm font-light">prizes</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center hero-stat rounded-full text-[10px] md:text-base text-[#EEE] w-fit h-fit min-w-[60px] md:min-w-[90px] -mr-[45px] ml-auto mt-8 aspect-square">
              10
              <span className="text-[10px] md:text-sm font-light">days</span>
            </div>
            <div className="flex flex-col justify-center items-center text-center hero-stat rounded-full text-[10px] md:text-base text-[#EEE] w-fit h-fit min-w-[60px] md:min-w-[90px] ml-auto aspect-square">
              40+
              <span className="text-[10px] md:text-sm font-light">schools</span>
            </div>
          </div>
        </div>
        <Countdown targetDate="2024-10-15T00:00:00" />
      </div>
      <Image
        src={planet1}
        width={127}
        height={123}
        alt=""
        className="absolute top-4 md:top-[57px] animate-bounce-slowTop w-[45px] md:w-[125px]"
      />
      <Image
        src={rocket}
        width={111}
        height={104}
        alt=""
        className="absolute top-[60%] md:top-[63%] lg:top-1/2 left-4 md:left-10 animate-bounce-slow w-[50px] md:w-[110px]"
      />
      <Image
        src={planet2}
        width={111}
        height={104}
        alt=""
        className="absolute top-10 right-4 animate-bounce-slow w-[45px] md:w-[110px]"
      />
      <Image
        src={planet1}
        width={111}
        height={104}
        alt=""
        className="absolute top-2/3 right-12 animate-bounce-slowTop w-[45px] md:w-[110px] md:scale-90"
      />
      <div></div>
    </section>
  );
}
