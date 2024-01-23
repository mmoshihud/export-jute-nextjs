"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
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
              className={`group relative cursor-pointer px-2 text-base font-bold ${
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
              {link.dropDownMenu && (
                <ul className="absolute left-0 top-4 z-10 mt-2 hidden w-56 origin-top-right divide-y-2 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hover:block focus:outline-none group-hover:block">
                  {link.dropDrown?.map(
                    (subMenu: any, index: number): ReactElement => (
                      <li
                        key={index}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-950"
                      >
                        {subMenu.name}
                      </li>
                    ),
                  )}
                </ul>
              )}
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
