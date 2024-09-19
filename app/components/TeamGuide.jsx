import Image from "next/image";

export default function TeamGuide() {

  const guideline = [
    {
      id: 1,
      title: "Team Size",
      label: "Maximum of 3 members per team"
    },
    {
      id: 2,
      title: "Eligibility",
      label: "Open to students, professionals and tech enthusiasts with a passion for solving real-world problem"
    }
  ]

  return (
    <section className="px-4 md:px-10 lg:px-20 py-3 my-7 flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="flex flex-col gap-5">
        <h1 className="font-medium text-[32px]">Team guideline</h1>

        <ul className="flex flex-col gap-3 w-[90%]">
          {guideline.map((item, index) => {
            return (
              <li key={index} className="flex items-start">
                <span className="text-4xl text-black mr-2">•</span> {/* Custom big dot */}

                <div>
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-[16px] font-normal">{item.label}</p>
                </div>
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
        className="my-5"
      />
    </section>
  )
}