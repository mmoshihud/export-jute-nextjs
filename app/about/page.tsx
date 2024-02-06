import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center px-8">
        <h1 className="my-4 text-4xl text-gray-700">About US</h1>
        <p className="text-lg text-gray-800">
          Welcome to Munshi Enterprise, a distinguished name in the realm of
          jute goods and diversified products. Based in the heart of Bangladesh,
          we take pride in being a premier exporter committed to delivering
          sustainable and high-quality jute solutions to clients
          worldwide.Munshi Enterprise is a Proprietorship company, founded in
          2024
        </p>
        <h1 className="my-4 text-4xl text-gray-700">Our expertise</h1>
        <p className="text-lg text-gray-800">
          With a rich heritage in the jute and agro industries, Munshi
          Enterprise stands as a beacon of excellence in crafting top-tier jute
          goods and diversified products. Our expertise lies in creating
          innovative and eco-friendly solutions that meet the demands of a
          global market.
        </p>
        <h1 className="my-4 text-4xl text-gray-700">What are we offering</h1>
        <p className="mb-24 text-lg text-gray-800">
          Munshi Enterprise offers a comprehensive range of jute goods that
          showcase the versatility and elegance of this natural fiber. From
          intricately woven jute bags to finely crafted diversified products,
          our portfolio caters to diverse industries. Our products are designed
          to seamlessly blend functionality with aesthetics, providing clients
          with sustainable solutions that make a lasting impression.
        </p>
      </div>
    </>
  );
}
