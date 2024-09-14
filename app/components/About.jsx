'use client'

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-col-2 px-4 md:px-10 lg:px-20 gap-20 mb-5">
        <div className="">
          <h1 className="font-bold sm:text-[24px] lg:text-[32px] mb-5">About Our Hackathon</h1>

          <p className={`font-normal text-[16px]`}>{`Join us for the RAIN Hackathon 2024 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa's most pressign challenges join us for the RAIN Hackathon 2024 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa's most pressign challenges`}</p>
        </div>

        <div className="">
          <Image
            src="/about_section.webp"
            alt="image for the about section"
            width={1577} height={454}
          />
        </div>
      </section>
    </>
  )
}