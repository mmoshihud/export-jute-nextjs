import Image from "next/image";
import Logo from "../../public/munshi-enterprise.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between p-4">
        <Image
          src={Logo}
          alt="Munshi Enterprise Logo"
          width={200}
          height={200}
        />
        <ul className="flex">
          <li className="cursor-pointer border-b-4 border-green-950 p-3 text-base font-bold text-green-900">
            Home
          </li>
          <li className="cursor-pointer p-3 text-base font-bold">Listing</li>
          <li className="cursor-pointer p-3 text-base font-bold">Company</li>
          <li className="cursor-pointer p-3 text-base font-bold">About US</li>
          <li className="cursor-pointer p-3 text-base font-bold">Contact US</li>
        </ul>

        <div>
          <button className="rounded-lg bg-green-950 p-2 font-bold text-white">
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}
