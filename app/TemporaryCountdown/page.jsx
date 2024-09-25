"use client";

import TemporaryCountdown from "../components/TemporaryCountdown";
// import Navbar from "../components/Navbar";
import Image from "next/image";
import rocket from "@/app/assets/rocket.png";
import planet1 from "@/app/assets/planet-1.png";
import planet2 from "@/app/assets/planet-2.png";
import logo from "@/app/assets/rain-logo.png";
import Link from "next/link";


export default function UseCountdown() {
  return (
    <section className="bg-hero h-screen">
      <main className="container mx-auto pt-[72px] pb-4 md:pb-[105px] px-4 md:px-10 lg:px-20 bg-[url('/hero-stars.png')] h-screen w-screen relative top-0 left-0">
        {/* <Navbar /> */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          
          < Image
            src={logo}
            className="w-[100px] mb-20" />

          <h1 className="text-sm md:text-base text-center mx-auto w-fit h-fit rounded-lg px-4 md:px-[33px] py-[10px] leading-normal text-dark border border-[#4C4E1C] mb-[18px] md:mb-10">
              Oct 1st - Jan 31st 2025
          </h1>
          <p className="mb-5 -mt-3">The registeration countdown is on....</p>
          
          
          <TemporaryCountdown targetDate="2024-10-01T00:00:00" />

          <Link href='/' className="bg-dark text-sm text-white py-3 px-6 rounded-lg mt-8">Go to Home</Link>
        </div>
        
        <Image
          src={planet1}
          width={127}
          height={123}
          alt=""
          className="absolute top-10 md:top-[60px] left-4 md:left-10 animate-bounce-slowTop w-[45px] md:w-[125px]"
        />
        <Image
          src={rocket}
          width={111}
          height={104}
          alt=""
          className="absolute top-[80%] md:top-[63%] lg:top-1/2 left-4 md:left-10 animate-bounce-slow w-[50px] md:w-[110px]"
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
      </main>
    </section>
  );
}