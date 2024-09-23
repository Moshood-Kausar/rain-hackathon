import Link from "next/link"
import Image from "next/image"

const RegisterButton = ({ text = "Register now", icon = "/Register-icon.svg", href = "/Register" }) => {
  return (
    <Link href={href} className="flex items-center justify-center gap-3 px-4 py-2 bg-primary rounded-md transition">
      {/* Render the Text */}
      <span className="text-[12px] md:text-sm lg:text-md">{text}</span>

      {/* Render the Icon */}
      <Image src={icon} alt={`${text} icon`} width={24} height={24} className="" />
    </Link>
  );
};

export default RegisterButton;