export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-xl text-center bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Thank You! 🎉</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your order has been received successfully. Our team will reach out to you
          shortly via SMS or phone call to confirm your delivery.
        </p>
        <p className="text-md text-gray-500 mb-8">
          Delivery usually takes 1–2 days depending on your location. Please keep your
          phone line active.
        </p>
        <a
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
