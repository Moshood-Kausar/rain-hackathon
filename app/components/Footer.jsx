import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";




export default function Footer() {
  return (
    <footer className="footer w-full bg-primary flex items-center justify-center py-8">
      <div className="flex flex-col gap-4 w-[95vw] md:w-[70vw] lg:w-[60vw]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[587px] mx-auto">
          <p className="font-medium text-[12px] md:text-sm lg:text-lg">Join RAIN-INNetwork today!</p>

          <Link className="flex items-center gap-2" href={`https://rain-innetwork.com`} target="_blank">
            <Image src="/website-link.svg" alt="Link-icon" width={14} height={14}/>
            <p className="font-medium text-[12px] md:text-sm lg:text-lg">rain-innetwork.com</p>
          </Link>
        </div>

        <div className="bg-white w-[90%] md:w-full max-w-[578px] md:max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg p-4 md:px-2 gap-2 md:gap-3">
          <p className="font-medium text-[10px] md:text-[15px] lg:text-[20px] whitespace-nowrap">Follow Us!</p>

          <div className="flex flex-col lg:flex-row justify-between gap-2 md:gap-6">
            <div className="flex items-center gap-1.5">
              <Link href={`https://x.com/rain_innetwork`}>
                <FaXTwitter className="text-lg md:text-xl"/>
              </Link>

              <Link href={`https://instagram.com/rain_innetwork`}>
                <AiFillInstagram className="text-lg md:text-xl"/>
              </Link>
              
              <p className="font-medium text-[10px] md:text-sm lg:text-[16px]">@rain_innetwork</p>
            </div>

            <Link className="flex items-center gap-1.5" href={`https://www.linkedin.com/company/robotics-and-artificial-intelligence-innovators-network/`}>
              <FaLinkedin className="text-lg md:text-xl min-w-5"/>
              <p className="text-[10px] md:text-sm lg:text-[16px]">Robotics and Artificial INtelligence - INnovators Network</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}