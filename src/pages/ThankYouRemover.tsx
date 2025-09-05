import hbestyy from "../assets/products/Hbestyy.jpg";

export default function ThankYouPage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-xl text-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-green-700 mb-6"> Order Successfully Placed!
        </h1>

        {/* Product Image */}
        <div className="mb-6">
          <img
            src={hbestyy}
            alt="Camping Gas Stove"
            className="w-48 h-48 object-contain mx-auto rounded-lg shadow-lg border border-gray-200"
          />
        </div>

        <p className="text-lg text-gray-700 mb-4">
          Your order has been received successfully. One of our Customer Representatives will put a call across to you to confirm the order, after which the product shall be delivered to you.
        </p>
        <p className="text-md text-gray-500 mb-8">
          Delivery usually takes 1–2 days depending on your location. Please keep your phone line active.
        </p>

        <a
          href="/products"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
        >
          Back to Products
        </a>
      </div>
    </div>
  );
}
