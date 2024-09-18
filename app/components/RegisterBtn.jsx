import Link from "next/link"
import Image from "next/image"

const RegisterButton = ({ text = "Register now", icon = "/Register-icon.svg", href = "/register" }) => {
  return (
    <Link href={href} className="flex items-center gap-4 px-4 py-2 bg-primary rounded-md transition">
      {/* Render the Text */}
      <span className="text-[20px]">{text}</span>

      {/* Render the Icon */}
      <Image src={icon} alt={`${text} icon`} width={24} height={24} className="mr-2" />
    </Link>
  );
};

export default RegisterButton;