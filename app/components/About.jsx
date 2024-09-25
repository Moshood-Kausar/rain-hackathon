import Image from 'next/image';

export default function About() {
  return (
    <section id='about' className="flex flex-col lg:flex-row items-center px-4 md:px-10 lg:px-20 gap-10 lg:gap-20 mb-10 pt-5 md:pt-20">
      <div className="w-full lg:w-1/2">
        <h1 className="font-medium text-center md:text-start text-[18px] lg:text-[28px] mb-1">About Our Hackathon</h1>

        <p className={` text-xs font-thin text-dark md:text-[16px] text-center`}>{`Join the RAIN Hackathon 2024, where innovators and trailblazers in Robotics and Artificial Intelligence will come together to solve Africa’s most urgent challenges. This event is a melting pot for the brightest minds, offering a platform to create impactful solutions that shape the future of technology on the continent.`}</p>
      </div>

      <div className=" lg:w-1/2">
        <Image
          src="/about_section.webp"
          alt="image for the about section"
          layout="intrinsic"
          width={170}
          height={170}
          className="w-full h-auto object-contain"
          />
      </div>
    </section>
  )
}