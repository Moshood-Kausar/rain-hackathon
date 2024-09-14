import Image from 'next/image';

export default function About() {
  return (
    <section className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 gap-10 lg:gap-20 mb-10">
      <div className="w-full lg:w-1/2">
        <h1 className="font-bold text-[24px] lg:text-[32px] mb-5">About Our Hackathon</h1>

        <p className={`font-normal text-[16px]`}>{`Join us for the RAIN Hackathon 2024 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa's most pressign challenges join us for the RAIN Hackathon 2024 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa's most pressign challenges`}</p>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          src="/about_section.webp"
          alt="image for the about section"
          layout="responsive"
        width={1577}
        height={454}
        className="w-full h-auto object-contain"
        />
      </div>
    </section>
  )
}