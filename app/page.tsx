import Image from "next/image";
import Hero from "../public/hero-bg.jpg";

export default function Home() {
  return (
    <>
      <main className="bg-gray-100">
        <div className="flex items-center justify-center">
          <div className="relative">
            <Image
              src={Hero}
              alt="Munshi Enterprise Logo"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <article className="text-2xl text-green-950 lg:text-7xl">
                Welcome to Munshi Enterprise
              </article>
              <p className="text-xl text-blue-950 lg:text-4xl">
                A <span className="italic">beau</span> approach to
                diversification
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center px-8 py-8 lg:px-32">
          <h1 className="mb-8 text-3xl text-gray-700 lg:text-4xl">
            How it works
          </h1>
          <p className="text-center text-2xl italic text-gray-700 lg:text-justify lg:text-3xl">
            In the serene twilight, a solitary figure traversed the ancient
            forest, where whispered secrets lingered in the rustling leaves.
            Moonlight spilled through the dense canopy, illuminating a path
            paved with moss-covered stones. The air was infused with the
            intoxicating fragrance of blooming wildflowers, as the night
            symphony echoed with the symphony of nocturnal creatures. Lost in
            contemplation, the travelers thoughts meandered through the realms
            of forgotten tales and uncharted dreams. Shadows danced on the
            fringes of reality, casting a surreal ambiance upon the journey.
            Each step resonated with the heartbeat of the forest, creating an
            ethereal connection between the wanderer and the mystical landscape.
          </p>
        </div>
      </main>
    </>
  );
}
