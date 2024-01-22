import Image from "next/image";
import Logo from "../../public/munshi-enterprise.png";
export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-800 p-12 text-neutral-400">
        <div className="mb-8 flex items-center justify-around">
          <Image
            src={Logo}
            alt="Munshi Enterprise Logo"
            width={250}
            height={250}
            className="bg-white"
          />
          <div>
            <h1>Contact Info</h1>
            <ul>
              <li>Dhanmondi, Dhaka-1209</li>
              <li>+880 1712345880</li>
              <li>abc@gmail.com</li>
              <li>www.munshient.com</li>
            </ul>
          </div>
          <div>
            <h1>Company</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Our</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-around">
          <p className="text-2xl">
            &copy; 2024, Munshi Enterprise Ltd. All rights reserved
          </p>
          <div className="flex">
            <p>logo</p>
            <p>logo</p>
          </div>
        </div>
      </footer>
    </>
  );
}
