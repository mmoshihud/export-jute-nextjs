import Image from "next/image";
import Logo from "../../public/munshi-enterprise.png";

export default function Header() {
  return (
    <>
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Image
          src={Logo}
          alt="Munshi Enterprise Logo"
          width={250}
          height={250}
        />
        <ul className="flex">
          <li className="cursor-pointer border-b-4 border-green-900 p-2 text-base font-bold uppercase text-green-900">
            Home
          </li>
          <li className="cursor-pointer p-2 text-base font-bold uppercase">
            About Us
          </li>
          <li className="cursor-pointer p-2 text-base font-bold uppercase">
            Our Products
          </li>
          <li className="cursor-pointer p-2 text-base font-bold uppercase">
            Gallery
          </li>
          <li className="cursor-pointer p-2 text-base font-bold uppercase">
            Contact Us
          </li>
        </ul>
        <div>
          <button className="rounded-lg bg-green-900 p-2 font-bold uppercase text-white">
            Download Profile
          </button>
        </div>
      </div>
    </>
  );
}
