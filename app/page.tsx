import Image from "next/image";
import Hero from "../public/hero-bg.jpg";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src={Hero}
            alt="Munshi Enterprise Logo"
            width={1920}
            height={728}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <article className="text-7xl text-green-950">
              Welcome to Munshi Enterprise
            </article>
            <p className="text-3xl text-white">
              A <span className="italic">beau</span> approach to diversification
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center py-8">
        <h1 className="mb-8 text-3xl">How it works</h1>
        <p className="text-2xl italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae libero,
          atque autem consectetur reprehenderit quia quo tenetur. Ea minima
          possimus quasi alias error, ex molestias quod cupiditate libero vitae
          beatae minus obcaecati neque! Amet maiores hic omnis tenetur
          accusantium quaerat nulla porro veniam quae? Quisquam laboriosam
          labore doloremque vero, aperiam pariatur voluptates, placeat ab sunt
          mollitia iusto. Debitis est excepturi maiores nulla, dolorem aut velit
          odit nam repellendus ab aliquid porro maxime neque ipsum optio quis
          rerum soluta dicta corporis, amet voluptatem non dolore quaerat. Quos
          velit delectus voluptates cum praesentium quaerat ullam quas dolorum
          fuga, aliquam dignissimos natus optio.
        </p>
      </div>
    </>
  );
}
