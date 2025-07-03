import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Your name, phone number, address, and other details provided when placing an order.</li>
        <li>Device information, browser type, and referral data automatically collected via tracking tools.</li>
        <li>Usage data through cookies, including tracking from third-party services like Facebook Pixel.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To process and deliver your orders efficiently.</li>
        <li>To improve our website, marketing efforts, and customer service.</li>
        <li>To show you relevant ads using Facebook Pixel and similar tools.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Facebook Pixel</h2>
      <p className="mb-4">
        We use Facebook Pixel to help understand user behavior and improve our advertising. This may collect data such as pages visited and actions taken.
        Facebook may use cookies and similar technologies to track your activity across websites.
      </p>

      <p className="mb-4">
        You can learn more and manage your preferences at{' '}
        <a
          href="https://www.aboutads.info/choices"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          www.aboutads.info/choices
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Protection</h2>
      <p className="mb-4">
        We take your privacy seriously and implement security measures to protect your data. Your information is never sold or shared with unauthorized third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Consent</h2>
      <p className="mb-4">
        By using our website, you consent to our Privacy Policy and the use of tracking tools like Facebook Pixel.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes</h2>
      <p className="mb-4">
        We may update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated: July 2, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
