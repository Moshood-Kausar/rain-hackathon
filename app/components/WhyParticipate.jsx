import Image from "next/image";
import RegisterBtn from "./RegisterBtn"

export default function WhyParticipate() {

  const participateList = [
    {
      id: 1,
      image: '/participate-1.svg',
      title: "Collaborate and innovate",
      label: "Join forces with a diverse group of talented individuals who share your passion for driving change and solving real-world problems."
    },
    {
      id: 2,
      image: '/participate-2.svg',
      title: "Showcase your skills",
      label: "This is your moment to shine! Demonstrate your expertise in AI, Robotics, and cutting-edge innovations on a competitive stage"
    },
    {
      id: 3,
      image: '/participate-3.svg',
      title: "Network with expert",
      label: "Connect with industry leaders and experts, gaining insights and mentorship to help you grow both personally and professionally."
    },
    {

      id: 4,
      image: '/participate-4.svg',
      title: "Win Big",
      label: "Compete for top prizes! 1st place takes home 1 million Naira, 2nd place wins 750,000 Naira, and 3rd place secures 500,000 Naira."
    }
  ]

  return (
    <section className="flex flex-col items-center px-4 md:px-10 lg:px-20 gap-6 my-8 md:my-32">
      <div>
        <h2 className={`font-medium text-lg md:text-[32px]`}>Why Participate?</h2>
      </div>

      <main className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-[100%] lg:w-1/2">
          <Image
            src="/lab.png"
            alt="image for the why participate section"
            layout="responsive"
            width={2}
            height={2}
            className="px-5"
          />
        </div>
        

        <div className="w-[100%] lg:w-1/2 flex flex-col items-start justify-between px-5">
          <div className="flex flex-col gap-5">
            {participateList.map((item, index) => (
              <div key={index} className="flex justify-start items-start gap-2">
                <div className="bg-primary flex justify-center items-center p-2 rounded-full mt-1">
                  <Image
                    src={item.image}
                    alt="benefit icons"
                    layout="intrinsic"
                    width={20} height={20}
                    className="min-w-4"
                  />
                </div>
                

                <div className="">
                  <h3 className="font-medium text-[16px] md:text-[20px]">{item.title}</h3>
                  <p className="text-xs text-dark">{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-5 lg:mt-0">
            <RegisterBtn />
          </div> */}
        </div>
      </main>
    </section>
  )
}
