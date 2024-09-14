import Image from "next/image"

export default function WhyParticipate() {

  const participateList = [
    {
      id: 1,
      image: '/benefit_1.png',
      title: "Collaborate and innovate",
      label: "Work with diverse group of talented individuals, all passionate about making a difference"
    },
    {
      id: 2,
      image: '/benefit_2.png',
      title: "Showcase your skills",
      label: "This is your opportunity to showcase your skills in AI, Robotics and innovation"
    },
    {
      id: 3,
      image: '/benefit_3.png',
      title: "Network with expert",
      label: "This is your opportunity to showcase your skills in AI, Robotics and innovation"
    },
    {

      id: 4,
      image: '/benefit_4.png',
      title: "Win Big",
      label: "Compete for a chance to win big, 1st place goes with a whooping sum of 1 million Naira, 2nd place 750 thousand Naira and 3rd place 500 thousand Naira"
    }
  ]

  return (
    <section className="flex flex-col items-center px-4 md:px-10 lg:px-20 gap-10 mb-10">
      <div>
        <h2 className={`font-bold text-[24px] lg:text-[32px]`}>Why Participate?</h2>
      </div>

      <main className="flex flex-col-reverse lg:flex-row gap-10">
        <div>
          <Image
            src="/participate.png"
            alt="image for the why participate section"
            layout="responsive"
            width={2}
            height={2}
            // className="w-full h-auto object-contain"
          />
        </div>
        

        <div>
          <div>
            {participateList.map((item, index) => (
              <div key={index} className="flex">
                <Image
                  src={item.image}
                  alt="benefit icons"
                  layout="responsive"
                  width={20} height={20}
                  // className="w-full h-auto object-contain"
                />

                <div>
                  <h3 className="font-bold text-[20px]">{item.title}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <button>Register</button>
        </div>
      </main>
    </section>
  )
}