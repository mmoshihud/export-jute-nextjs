"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement, useState } from "react";
import Close from "../../public/close.svg";
import Menu from "../../public/menu.svg";
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
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-white px-4 lg:container lg:mx-auto lg:flex">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Munshi Enterprise Logo"
            width={250}
            height={250}
          />
        </Link>
        <ul className="hidden lg:flex">
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
        <button className="hidden rounded-lg bg-green-900 p-2 font-bold text-white lg:block">
          Download Profile
        </button>
        <div className="items-center justify-end lg:hidden">
          <Image
            src={toggle ? Close : Menu}
            alt="Navbar Button"
            className="h-8 w-8 rounded-md bg-green-950 object-contain p-1"
            onClick={() => setToggle((prevState) => !prevState)}
          />
        </div>
      </div>
      <ul
        className={`w-full bg-white p-4 md:hidden ${toggle ? "block" : "hidden"}`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`cursor-pointer p-2 text-base font-bold ${
              link.href === "/"
                ? pathname === "/"
                  ? "text-green-900"
                  : "text-gray-700 hover:border-green-900 hover:text-green-900"
                : pathname.startsWith(link.href)
                  ? "text-green-900"
                  : "text-gray-700 hover:border-green-900 hover:text-green-900"
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
            {link.dropDownMenu && (
              <ul className="mt-2 w-56 focus:outline-none">
                {link.dropDrown?.map(
                  (subMenu: any, index: number): ReactElement => (
                    <li
                      key={index}
                      className="block p-2 text-base text-gray-700 hover:text-green-900"
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
    </>
  );
}
