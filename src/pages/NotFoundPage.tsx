import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-background py-20">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn btn-primary flex items-center justify-center"
            >
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline flex items-center justify-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;