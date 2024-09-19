import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";




export default function Footer() {
  return (
    <footer className="footer bg-primary flex items-center justify-center py-8">
      <div className="flex flex-col gap-4 w-[95vw] md:w-[70vw] lg:w-[60vw]">
        <div className="flex items-center justify-between">
          <p className="font-medium text-[12px] md:text-sm lg:text-lg">Join RAIN-INNetwork today!</p>

          <Link className="flex items-center gap-2" href={`https://rain-innetwork.com`}>
            <Image src="/website-link.svg" alt="Link-icon" width={14} height={14}/>
            <p className="font-medium text-[12px] md:text-sm lg:text-lg">rain-innetwork.com</p>
          </Link>
        </div>

        <div className="bg-white flex items-center justify-between rounded-lg py-4 px-2 gap-5">
          <p className="font-medium text-[10px] md:text-[15px] lg:text-[20px] whitespace-nowrap">Follow Us!</p>

          <div className="flex items-center gap-1.5">
            <Link href={`https://x.com`}>
              <FaXTwitter className="text-xl"/>
            </Link>

            <Link href={`https://instagram.com`}>
              <AiFillInstagram className="text-xl"/>
            </Link>
            
            <p className="font-medium text-[10px] md:text-sm lg:text-[16px]">@rain_innetwork</p>
          </div>

          <Link className="flex items-center gap-1.5" href={`https://www.linkedin.com`}>
            <FaLinkedin className="text-3xl"/>
            <p className="text-[10px] md:text-sm lg:text-[16px]">Robotics and Artificial intelligence</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}