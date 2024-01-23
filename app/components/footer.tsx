import Image from "next/image";
import Logo from "../../public/munshi-enterprise.png";
export default function Footer() {
  return (
    <>
      <footer className="text-neutral-300">
        <div className="flex flex-col items-start justify-center gap-y-8 bg-slate-900 p-8 lg:flex-row lg:items-center lg:justify-around">
          <Image
            src={Logo}
            alt="Munshi Enterprise Logo"
            width={250}
            height={250}
            className="bg-white"
          />
          <div>
            <h1 className="mb-4 text-2xl font-semibold">Contact Info</h1>
            <ul>
              <li className="text-lg">Dhanmondi, Dhaka-1209</li>
              <li className="text-lg">+880 1712345880</li>
              <li className="text-lg">abc@gmail.com</li>
              <li className="text-lg">www.munshient.com</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-2xl font-semibold">Company</h1>
            <ul>
              <li className="text-lg">Home</li>
              <li className="text-lg">About</li>
              <li className="text-lg">Our</li>
              <li className="text-lg">Gallery</li>
              <li className="text-lg">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around bg-slate-950 p-8 lg:flex-row">
          <p className="text-xs lg:text-lg">
            &copy; 2024, Munshi Enterprise. All rights reserved
          </p>
          <div className="flex gap-x-4">
            <p>logo</p>
            <p>logo</p>
          </div>
        </div>
      </footer>
    </>
  );
}
