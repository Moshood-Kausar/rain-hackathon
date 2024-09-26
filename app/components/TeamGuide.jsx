import Image from "next/image";

export default function TeamGuide() {

  const guideline = [
    {
      id: 1,
      title: "Team Size",
      label: "Maximum of 3 members in a team"
    },
    {
      id: 2,
      title: "Eligibility",
      label: "Open to students, professionals, and tech enthusiasts with a passion for solving real-world problems in Africa."
    }
  ]

  return (
    <section className="px-4 md:px-10 lg:px-20 py-3 my-5 md:my-32 flex flex-col md:flex-row items-start md:items-center justify-between mx-5">
      <div className="flex flex-col gap-5">
        <h1 className="font-medium text-lg md:text-[32px]">Team guideline</h1>

        <ul className="flex flex-col gap-3 w-[90%]">
          {guideline.map((item, index) => {
            return (
              <li key={index} className="">
                <div className="flex items-center">
                  <span className="text-2xl text-black mr-2">•</span> {/* Custom big dot */}

                  <h2 className="text-[14px] md:text-lg font-medium">{item.title}</h2>
                </div>
                
                <p className="text-xs md:text-[16px] text-dark">{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <Image
        src="/Team-guide.png"
        alt="Team guide"
        width={200}
        height={300}
        className="hidden md:block my-5"
      />
    </section>
  )
}