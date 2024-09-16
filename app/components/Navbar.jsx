import Link from "next/link";
import logo from '@/app/assets/rain-logo.png'
import Image from "next/image";

export default function Navbar () {
    return (
        <nav className="container mx-auto h-16 px-4 md:px-10 lg:px-20">
            <Link href={'/'} className="flex pt-6">
                <Image src={logo} width={399} height={118} alt="Rain Logo" className="h-10 w-auto" />
            </Link>
        </nav>
    )
}