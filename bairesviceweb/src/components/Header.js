import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full text-white">
      <nav className="container mx-auto flex justify-center items-center px-5 ">
        {/* Logo */}
        <div className="text-2xl font-bold px-3">
          <Link href="/">
            <Image
            className=""
            src="/logardo.png"
            alt="Characters"
            width={140}
            height={150}
            priority
            />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="space-x-6 font-roboto">
          <Link href="/" className="hover:text-gray-400">
            Jugar
          </Link>
          <Link href="/tienda" className="hover:text-gray-400">
            Tienda
          </Link>
          <Link href="/normativa" className="hover:text-gray-400">
            Normativa
          </Link>
          <Link href="/staff" className="hover:text-gray-400">
            Staff
          </Link>
        </div>
      </nav>
    </header>
  );
}

