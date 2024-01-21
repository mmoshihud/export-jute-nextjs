import Image from "next/image";
import Hero from "../public/hero-bg.jpg";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute">
          <Image
            src={Hero}
            alt="Munshi Enterprise Logo"
            width={1920}
            height={728}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative top-52 flex flex-col items-center justify-center gap-4">
          <article className="text-7xl text-green-950">
            Welcome to Munshi Enterprise
          </article>
          <p className="text-3xl text-blue-950">
            A <span className="italic">beau</span> approach to diversification
          </p>
        </div>
      </div>
    </>
  );
}
