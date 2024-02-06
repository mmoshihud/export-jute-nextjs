import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const JuteProducts = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb-4 text-3xl font-bold">Jute Diversified Products</h1>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Bags</h2>
        <ul className="list-disc pl-6">
          <li>Shopping bags</li>
          <li>Tote bags</li>
          <li>Grocery bags</li>
          <li>Promotional bags</li>
          <li>Wine bags</li>
          <li>Beach bags</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Packaging Materials</h2>
        <ul className="list-disc pl-6">
          <li>Jute sacks</li>
          <li>Jute pouches</li>
          <li>Jute bottle bags</li>
          <li>Jute gift packaging</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Textiles</h2>
        <ul className="list-disc pl-6">
          <li>Jute fabrics</li>
          <li>Jute yarn</li>
          <li>Jute twine</li>
          <li>Jute tape</li>
          <li>Jute Sliver</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Home Decor</h2>
        <ul className="list-disc pl-6">
          <li>Jute rugs</li>
          <li>Jute carpets</li>
          <li>Jute curtains</li>
          <li>Jute table runners</li>
          <li>Jute wall hangings</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Stationery</h2>
        <ul className="list-disc pl-6">
          <li>Jute notebooks</li>
          <li>Jute folders</li>
          <li>Jute pens and pen holders</li>
          <li>Jute desk organizers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Fashion Accessories</h2>
        <ul className="list-disc pl-6">
          <li>Jute hats</li>
          <li>Jute belts</li>
          <li>Jute jewelry</li>
          <li>Jute slippers</li>
          <li>Espadrilles</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Jute Handicrafts</h2>
        <ul className="list-disc pl-6">
          <li>Jute baskets</li>
          <li>Jute lampshades</li>
          <li>Pet basket</li>
          <li>Bird Nest</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          Jute Promotional Products
        </h2>
        <ul className="list-disc pl-6">
          <li>Jute conference bags</li>
          <li>Jute promotional banners</li>
          <li>Jute corporate gifts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          Jute Agricultural Products
        </h2>
        <ul className="list-disc pl-6">
          <li>Jute soil saver</li>
          <li>Jute nursery sheets</li>
          <li>Jute erosion control mats</li>
        </ul>
      </section>
    </div>
  );
};

export default JuteProducts;
