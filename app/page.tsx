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
              <article className="text-2xl text-green-900 lg:text-7xl">
                Welcome to Munshi Enterprise
              </article>
              <p className="text-xl text-blue-900 lg:text-4xl">
                A <span className="italic">beau</span> approach to
                diversification
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="my-20 flex flex-col items-center justify-around px-8 lg:flex-row">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://wpdemo.redq.io/sites/glimpse/business/images/fingerprint-icon.png"
                alt="Logo"
                width={40}
                height={40}
                className=" mb-4 rounded-md bg-red-400 p-2"
              ></Image>
              <h1 className="text-2xl font-normal text-gray-700">
                Export Excellence
              </h1>
              <p className="text- my-4 text-center">
                On the other hand, we denounce great deal come indignation and
                dislike
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://wpdemo.redq.io/sites/glimpse/business/images/shield-icon.png"
                alt="Logo"
                width={40}
                height={40}
                className=" mb-4 rounded-md bg-green-400 p-2"
              ></Image>
              <h1 className="text-2xl font-normal text-gray-700">
                Versatility
              </h1>
              <p className="text- my-4 text-center">
                On the other hand, we denounce great deal come indignation and
                dislike
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://wpdemo.redq.io/sites/glimpse/business/images/location-pin.png"
                alt="Logo"
                width={40}
                height={40}
                className=" mb-4 rounded-md bg-blue-400 p-2"
              ></Image>
              <h1 className="text-2xl font-normal text-gray-700">
                Customization
              </h1>
              <p className="text- my-4 text-center">
                On the other hand, we denounce great deal come indignation and
                dislike
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="https://wpdemo.redq.io/sites/glimpse/business/images/fingerprint-icon.png"
                alt="Logo"
                width={40}
                height={40}
                className=" mb-4 rounded-md bg-purple-400 p-2"
              ></Image>
              <h1 className="text-2xl font-normal text-gray-700">
                Sustainable Development
              </h1>
              <p className="text- my-4 text-center">
                On the other hand, we denounce great deal come indignation and
                dislike
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center px-8 py-8">
            <h1 className="mb-8 text-4xl text-gray-700">What you need?</h1>
            <p className="text-2xl text-gray-700">
              As a responsible exporter, we prioritize sustainable development
              in every facet of our operations. Our commitment to environmental
              stewardship is evident in our sourcing practices, manufacturing
              processes, and the recyclability of our products. By choosing
              Munshi Enterprise, clients are assured of not only premium quality
              but also a dedication to sustainable business practices. With a
              strategic location in Bangladesh, the hub of global jute
              production, [Your Company Name] is well-positioned to meet the
              export needs of clients worldwide. Our robust supply chain,
              stringent quality control measures, and commitment to timely
              deliveries make us the preferred choice for businesses seeking
              reliable and efficient jute solutions.
            </p>
          </div>
          <div className="flex flex-col items-center px-8 py-8 text-start">
            <h1 className="mb-8 text-4xl text-gray-700">
              Why Partner with Munshi Enterprise?
            </h1>
            <div className="text-2xl text-gray-700">
              <p className="mb-4">
                <span className="font-bold text-black">Reliability:</span>
                &nbsp;Our commitment to quality and timely deliveries ensures a
                hassle-free experience for our international clients.
              </p>
              <p className="mb-4">
                <span className="font-bold text-black">Innovation:</span>
                &nbsp;We stay ahead of industry trends, consistently introducing
                new and creative jute solutions to meet evolving market demands.
              </p>
              <p className="mb-4">
                <span className="font-bold text-black">
                  Customer-Centric Approach:
                </span>
                &nbsp;Our customer-centric approach ensures that we understand
                and address the unique needs of each client, fostering long-term
                partnerships.
              </p>
              <p className="mb-4">
                Choose Munshi Enterprise as your trusted partner for premium
                jute goods, diversified products, and sustainable solutions.
                Experience the essence of Bangladeshi craftsmanship and
                reliability on a global scale.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center px-8 py-8">
            <h1 className="mb-8 text-4xl text-gray-700">Our Expertise</h1>
            <p className="mb-24 text-2xl text-gray-700">
              With a rich heritage in the jute and agro industries, Munshi
              Enterprise stands as a beacon of excellence in crafting top-tier
              jute goods and diversified products. Our expertise lies in
              creating innovative and eco-friendly solutions that meet the
              demands of a global market.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
