import Image from "next/image";
import logo from "@/app/assets/register-logo.png"

export default function FormHeader() {
  return (
    <section >
      <main >
        <div>
          <Image
            src={logo}
            alt="RAIN-IN logo"
          />
        </div>
        <div>
          <h1>Welcome, Innovators!</h1>
          <p>{`Please complete the form below to register and submit your team's proposal`}</p>
        </div>
      </main>
    </section>
  )
}