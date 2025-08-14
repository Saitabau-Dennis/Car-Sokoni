import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const CarCard = ({ car, showAddToCart = true, viewMode = 'grid' }) => {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(car));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="flex">
          {/* Image */}
          <div className="relative w-80 h-48 bg-gray-100 flex-shrink-0">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            {imageError ? (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            ) : (
              <img
                src={car.thumbnail}
                alt={`${car.brand} ${car.model}`}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            )}
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                {car.category}
              </span>
            </div>

            {/* Stock Status */}
            <div className="absolute bottom-4 left-4">
              <div className={`flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 ${car.inStock ? 'text-green-600' : 'text-red-600'}`}>
                <div className={`w-2 h-2 rounded-full ${car.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-xs font-medium">
                  {car.inStock ? 'Available' : 'Sold Out'}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-black mb-2 group-hover:text-gray-700 transition-colors duration-200">
                  {car.brand} {car.model}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{car.year}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{car.rating}</span>
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-medium text-black mb-1">
                  {formatPrice(car.price)}
                </div>
                <div className="text-sm text-gray-600">or KES 45k/month</div>
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{car.specifications.engine}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{car.specifications.fuelType}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span>{car.specifications.mileage}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <Link 
                to={`/cars/${car.id}`}
                className="flex-1 bg-black hover:bg-gray-800 text-white text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:shadow-lg"
              >
                View Details
              </Link>
              {showAddToCart && (
                <button
                  onClick={handleAddToCart}
                  className="bg-white border-2 border-black hover:bg-black hover:text-white text-black py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:shadow-lg"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-[580px] flex flex-col">
      <Link to={`/cars/${car.id}`} className="block flex flex-col h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden h-56 bg-gray-100">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {imageError ? (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-400">Image not available</p>
              </div>
            </div>
          ) : (
            <img
              src={car.thumbnail}
              alt={`${car.brand} ${car.model}`}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          
          {/* Overlay with quick actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-black px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Quick View
              </button>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
              {car.category}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-700">{car.rating}</span>
          </div>

          {/* Stock Status */}
          <div className="absolute bottom-4 left-4">
            <div className={`flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 ${car.inStock ? 'text-green-600' : 'text-red-600'}`}>
              <div className={`w-2 h-2 rounded-full ${car.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-xs font-medium">
                {car.inStock ? 'Available' : 'Sold Out'}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title and Year */}
          <div className="mb-4">
            <h3 className="text-xl font-medium text-black mb-2 group-hover:text-gray-700 transition-colors duration-200">
              {car.brand} {car.model}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{car.year}</span>
              </span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{car.rating}</span>
              </span>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {car.features.slice(0, 2).map((feature, index) => (
                <span 
                  key={index}
                  className="bg-gray-50 text-gray-700 px-2 py-1 rounded-md text-xs font-medium border border-gray-200"
                >
                  {feature}
                </span>
              ))}
              {car.features.length > 2 && (
                <span className="text-gray-500 text-xs px-2 py-1 font-medium">
                  +{car.features.length - 2} more
                </span>
              )}
            </div>
          </div>

          {/* Specifications Preview */}
          <div className="grid grid-cols-1 gap-2 mb-4 text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="truncate">{car.specifications.engine}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 716.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <span>{car.specifications.mileage}</span>
            </div>
          </div>

          {/* Spacer to push price and buttons to bottom */}
          <div className="flex-1"></div>

          {/* Price */}
          <div className="mb-4">
            <div className="text-xl font-medium text-black mb-1">
              {formatPrice(car.price)}
            </div>
            <div className="text-sm text-gray-600">or from KES 45,000/month</div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Link 
              to={`/cars/${car.id}`}
              className="block w-full bg-black hover:bg-gray-800 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg text-sm"
            >
              View Details
            </Link>
            {showAddToCart && (
              <button
                onClick={handleAddToCart}
                className="w-full bg-white border-2 border-black hover:bg-black hover:text-white text-black py-2.5 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg text-sm"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;

