import Image from "next/image";
import RegisterButton from "./RegisterBtn";

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
      label: "Click on the button below and follow the steps to register,make sure you upload proposal document, double check that all  information is correct. Click Submit to complete registration"
    },
  ]

  return (
    <section className="px-4 md:px-10 lg:px-20 gap-10 lg:gap-20 mx-5 mb-10" id="how-to-register">
      <main>
        <h2 className={`text-dark text-lg md:text-[32px] font-medium mb-5 md:mb-20`}>How to register</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {registeringSteps.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.image}
                alt="steps to register"
                // layout="responsive"
                width={120} height={120}
                // className="w-full h-auto object-contain"
              />

              {/* <div> */}
                <h3 className="font-medium text-[16px] md:text-xl mt-5">{item.title}</h3>
                <p className="text-dark text-xs md:text-[16px]">{item.label}</p>
              {/* </div> */}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6">
          <RegisterButton />
        </div>
      </main>
    </section>
  )
}