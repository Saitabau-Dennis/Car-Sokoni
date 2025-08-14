import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="text-9xl font-medium text-black mb-4">404</div>
        <h1 className="text-4xl font-medium text-black mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary text-lg px-8 py-3">
            Go Home
          </Link>
          <Link to="/cars" className="btn-secondary text-lg px-8 py-3">
            Browse Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

