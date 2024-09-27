import Link from "next/link";
import logo from "@/app/assets/rain_logo2.png";
import mobileLogo from "@/app/assets/rain_logo2.png"
import Image from "next/image";
import RegisterButton from "./RegisterBtn";

const links = [
  { label: "About", href: "/#about" },
  { label: "How to register", href: "/#how-to-register" },
  { label: "Timeline", href: "/#timeline" },
  { label: "FAQs", href: "/#faqs" },
];

export default function Navbar() {
  return (
    <nav className="container mx-auto h-16 px-4 md:px-10 lg:px-20 flex justify-between items-center pt-6">
      <Link href={"/"} className="flex">
        <Image
          src={logo}
          width={399}
          height={118}
          alt="Rain Logo"
          className="h-10 w-auto hidden md:block"
        />

        <Image
          src={mobileLogo}
          alt="RAIN-IN logo"
          width={44} height={44}
          className="md:hidden"
        />
      </Link>
      <ul className="hidden md:flex justify-between gap-8 lg:gap-[71px]">
        {links.map((link, idx)=> (
            <li key={idx} className="text-dark">
          <Link href={link.href}>{link.label}</Link>
        </li>
        ))}
      </ul>
      
      <RegisterButton />
    </nav>
  );
}
