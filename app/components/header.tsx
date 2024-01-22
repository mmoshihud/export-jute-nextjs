"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/munshi-enterprise.png";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      dropDrown: ["Our History", "Our Team", "Our Goal", "Membership"],
    },
    { name: "Our Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
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
        <ul className="group flex">
          {navLinks.map((link, index) => {
            const isActive: boolean =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            let dropdownContent = null;

            if (link.dropDrown) {
              dropdownContent = (
                <ul className="absolute left-0 top-9 z-10 mt-2 hidden w-56 origin-top-right divide-y-2 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hover:block focus:outline-none group-hover:block">
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-950">
                    {link.dropDrown[0]}
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-950">
                    {link.dropDrown[1]}
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-950">
                    {link.dropDrown[2]}
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-950">
                    {link.dropDrown[3]}
                  </li>
                </ul>
              );
            }
            return (
              <li
                key={index}
                className={
                  isActive
                    ? "relative cursor-pointer border-b-4 border-green-900 p-2 text-base font-bold uppercase text-green-900  hover:text-green-900"
                    : "relative cursor-pointer p-2 text-base font-bold uppercase text-gray-700 hover:border-green-900 hover:text-green-900"
                }
              >
                <Link href={link.href}>{link.name}</Link>
                {dropdownContent}
              </li>
            );
          })}
        </ul>
        <div>
          <button className="rounded-lg bg-green-900 p-2 font-bold uppercase text-white">
            Download Profile
          </button>
        </div>
      </header>
    </>
  );
}
