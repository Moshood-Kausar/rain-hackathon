import Image from "next/image";

export default function HowToRegister() {

  const registeringSteps = [
    {
      id: 1,
      image: "/step_1.png",
      title: "Create a team",
      label: "Gather your friends, colleauges or enthustiast, choose a team leader who will serve as point of contact, choose a team number.Make sure your team has necessary skills to cover various aspect of the challenge"
    },
    {
      id: 2,
      image: "/step_2.png",
      title: "Select a topic",
      label: "Review the list of the hackaton themes of focus area provided, choose a topic that fit the team expertise or interest. Ensure that your chosen topic aligns with the hackaton’s goal and challenge"
    },
    {
      id: 3,
      image: "/step_3.png",
      title: "Register",
      label: "Click on the button below and follow the steps to register,make sure ou upload proposal docunment .double check that all  information is correct, click Submit to complete registration"
    },
  ]

  return (
    <section className="px-4 md:px-10 lg:px-20 gap-10 lg:gap-20 mb-10">
      <main>
        <h2 className={`font-bold text-[24px] lg:text-[32px] mb-5`}>How to register</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {registeringSteps.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt="steps to register"
                // layout="responsive"
                width={200} height={200}
                // className="w-full h-auto object-contain"
              />

              {/* <div> */}
                <h3 className="font-bold text-[20px] mt-5">{item.title}</h3>
                <p>{item.label}</p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}