import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";




export default function Footer() {
  return (
    <footer className="footer bg-primary flex items-center justify-center py-8">
      <div className="flex flex-col gap-4 w-[50vw] gap-4">
        <div className="flex items-center justify-between">
          <p>Join RAIN-INNetwork today!</p>

          <Link className="flex" href={`https://rain-innetwork.com`}>
            <Image src="/website-link.svg" alt="Link-icon" width={14} height={14}/>
            <p>rain-innetwork.com</p>
          </Link>
        </div>

        <div className="bg-white flex items-center justify-between rounded-lg py-4 px-2 gap-5">
          <p className="text-primary">Follow Us!</p>

          <div className="flex items-center gap-1.5">
            <Link href={`https://x.com`}>
              <FaXTwitter />
            </Link>

            <Link href={`https://instagram.com`}>
              <AiFillInstagram />
            </Link>
            
            <p>@rain_innetwork</p>
          </div>

          <Link className="flex items-center gap-1.5" href={`https://www.linkedin.com`}>
            <FaLinkedin />
            <p>Robotics and Artificial intelligence</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}