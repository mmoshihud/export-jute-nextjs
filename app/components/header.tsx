"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/munshi-enterprise.png";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/", dropDownMenu: false },
    {
      name: "About Us",
      href: "/about",
      dropDownMenu: true,
      dropDrown: [
        { name: "Our History", href: "/" },
        { name: "Our Team", href: "/" },
        { name: "Our Goal", href: "/" },
        { name: "Membership", href: "/" },
      ],
    },
    { name: "Our Products", href: "/products", dropDownMenu: false },
    { name: "Gallery", href: "/gallery", dropDownMenu: false },
    { name: "Contact Us", href: "/contact", dropDownMenu: false },
  ];
  const pathname = usePathname();

  return (
    <>
      <header className="container mx-auto flex flex-row items-center justify-between bg-white">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Munshi Enterprise Logo"
            width={250}
            height={250}
          />
        </Link>
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`relative cursor-pointer px-2 text-base font-bold ${
                link.href === "/"
                  ? pathname === "/"
                    ? "border-b-2 border-green-900 text-green-900"
                    : "text-gray-700 hover:border-green-900 hover:text-green-900"
                  : pathname.startsWith(link.href)
                    ? "border-b-2 border-green-900 text-green-900"
                    : "text-gray-700 hover:border-green-900 hover:text-green-900"
              }`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <button className="rounded-lg bg-green-900 p-2 font-bold text-white">
            Download Profile
          </button>
        </div>
      </header>
    </>
  );
}
