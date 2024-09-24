import Image from "next/image";
import RegisterBtn from "./RegisterBtn"

export default function WhyParticipate() {

  const participateList = [
    {
      id: 1,
      image: '/participate-1.svg',
      title: "Collaborate and innovate",
      label: "Work with diverse group of talented individuals, all passionate about making a difference"
    },
    {
      id: 2,
      image: '/participate-2.svg',
      title: "Showcase your skills",
      label: "This is your opportunity to showcase your skills in AI, Robotics and innovation"
    },
    {
      id: 3,
      image: '/participate-3.svg',
      title: "Network with expert",
      label: "This is your opportunity to showcase your skills in AI, Robotics and innovation"
    },
    {

      id: 4,
      image: '/participate-4.svg',
      title: "Win Big",
      label: "Compete for a chance to win big, 1st place goes with a whooping sum of 1 mi"
    }
  ]

  return (
    <section className="flex flex-col items-center px-4 md:px-10 lg:px-20 gap-6 my-8 md:my-32">
      <div>
        <h2 className={`font-medium text-[18px] lg:text-[32px]`}>Why Participate?</h2>
      </div>

      <main className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="w-[100%] lg:w-1/2">
          <Image
            src="/participate.png"
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
              <div key={index} className="flex justify-start items-start gap-5">
                <div className="bg-primary p-2 rounded-full">
                  <Image
                    src={item.image}
                    alt="benefit icons"
                    layout="intrinsic"
                    width={15} height={15}
                    className=""
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