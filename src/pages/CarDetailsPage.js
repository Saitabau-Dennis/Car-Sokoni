import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { getCarById } from '../data/cars';
import LoadingSpinner from '../components/common/LoadingSpinner';

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const carData = getCarById(id);
      setCar(carData);
      setLoading(false);
    };

    fetchCar();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(car));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <LoadingSpinner size="large" text="Loading car details..." />
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center bg-white rounded-3xl shadow-xl p-12 max-w-md border border-gray-200">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.562M15 6.306A7.962 7.962 0 0112 5c-2.34 0-4.29 1.007-5.824 2.562M12 19a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </div>
          <h1 className="text-2xl font-medium text-black mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-8">The car you're looking for doesn't exist or has been removed.</p>
          <Link to="/cars" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-200">
            Browse All Cars
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'financing', label: 'Financing' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-black transition-colors duration-200">Home</Link>
            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            <Link to="/cars" className="text-gray-500 hover:text-black transition-colors duration-200">Cars</Link>
            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            <span className="text-black font-medium">{car.brand} {car.model}</span>
        </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div 
                className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => setIsImageModalOpen(true)}
              >
              <img
                src={car.images[selectedImageIndex]}
                alt={`${car.brand} ${car.model}`}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
              <button 
                onClick={() => setIsImageModalOpen(true)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {car.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-w-16 aspect-h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index 
                      ? 'border-black ring-2 ring-gray-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Car Details */}
          <div className="space-y-8">
          <div>
              <h1 className="text-4xl font-light text-black mb-2">
                {car.brand} {car.model}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{car.year}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(car.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg text-gray-600">({car.rating}) • 24 reviews</span>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-light text-black">
                  {formatPrice(car.price)}
                </span>
                  <span className="text-gray-500">or from KES 45,000/month</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Transparent pricing • No hidden fees • Finance options available
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-black hover:bg-gray-800 text-white font-medium py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Add to Cart
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white border-2 border-gray-200 hover:border-black text-black font-medium py-3 rounded-xl transition-all duration-200">
                  Schedule Test Drive
                </button>
                  <button className="bg-white border-2 border-gray-200 hover:border-black text-black font-medium py-3 rounded-xl transition-all duration-200">
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Engine</div>
                  <div className="font-medium text-black">{car.specifications?.engine || 'V6 3.5L'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Transmission</div>
                  <div className="font-medium text-black">{car.specifications?.transmission || 'Automatic'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Fuel Type</div>
                  <div className="font-medium text-black">{car.specifications?.fuelType || 'Gasoline'}</div>
                    </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Mileage</div>
                  <div className="font-medium text-black">{car.specifications?.mileage || '25,000 km'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs Section */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-6 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium text-black mb-4">Vehicle Overview</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {car.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-black mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-medium text-black mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(car.specifications).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-xl p-6">
                      <dt className="text-sm font-medium text-gray-500 mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </dt>
                      <dd className="text-xl font-medium text-black">{value}</dd>
              </div>
            ))}
          </div>
        </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-2xl font-medium text-black mb-6">Features & Equipment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-black mb-4">Safety Features</h4>
                    <ul className="space-y-3">
                      {['ABS Brakes', 'Airbags (Front & Side)', 'Electronic Stability Control', 'Backup Camera', 'Blind Spot Monitoring'].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-black mb-4">Comfort Features</h4>
                    <ul className="space-y-3">
                      {['Climate Control', 'Heated Seats', 'Premium Sound System', 'Navigation System', 'Wireless Charging'].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'financing' && (
              <div>
                <h3 className="text-2xl font-medium text-black mb-6">Financing Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-medium text-black mb-4">Bank Financing</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-medium">From 12% APR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Loan Term:</span>
                        <span className="font-medium">Up to 7 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Down Payment:</span>
                        <span className="font-medium">From 20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="text-lg font-medium text-black mb-4">Lease Options</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Payment:</span>
                        <span className="font-medium">From KES 45,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lease Term:</span>
                        <span className="font-medium">24-48 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mileage Limit:</span>
                        <span className="font-medium">15,000 km/year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={car.images[selectedImageIndex]}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailsPage;
