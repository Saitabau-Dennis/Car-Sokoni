import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../components/car/CarCard';
import CarFilters from '../components/car/CarFilters';
import SearchBar from '../components/common/SearchBar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const CarsPage = () => {
  const { filteredItems: cars, loading, error } = useSelector((state) => state.cars);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('featured');
  const carsPerPage = 12;

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'year-new', label: 'Year: Newest' },
    { value: 'year-old', label: 'Year: Oldest' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <LoadingSpinner size="large" text="Loading cars..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center bg-white rounded-2xl shadow-xl p-12 max-w-md border border-gray-200">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Error Loading Cars</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative bg-white text-black py-24 border-b border-gray-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-black mb-6">
            Premium Car Collection
            </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover exceptional vehicles from trusted brands. Quality assured, 
            transparently priced, and ready for your next adventure.
            </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <SearchBar placeholder="Search by brand, model, or features..." />
          </div>
        </div>
      </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Section */}
        <div className="mb-8">
        <CarFilters />
        </div>

        {/* Results Header with Enhanced Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Results Count */}
            <div className="flex-1">
              <h2 className="text-lg font-medium text-black mb-2">
                {cars.length} vehicles found
              </h2>
            <p className="text-gray-600">
                Showing {indexOfFirstCar + 1} to {Math.min(indexOfLastCar, cars.length)} of {cars.length} results
              </p>
            </div>

            {/* Sort and View Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-black">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-black focus:ring-2 focus:ring-black focus:border-black"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
          </div>

          {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'grid'
                      ? 'bg-black text-white shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  title="Grid View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                viewMode === 'list'
                      ? 'bg-black text-white shadow-sm'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  title="List View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cars Grid/List */}
        {currentCars.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.007-5.824-2.562M15 6.306A7.962 7.962 0 0112 5c-2.34 0-4.29 1.007-5.824 2.562M12 19a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </div>
              <h3 className="text-2xl font-medium text-black mb-4">No cars found</h3>
              <p className="text-gray-600 mb-8">
                We couldn't find any vehicles matching your criteria. Try adjusting your filters or search terms.
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
              : 'space-y-6'
          }`}>
            {currentCars.map((car, index) => (
              <div 
                key={car.id} 
                className={`transform transition-all duration-500 hover:-translate-y-1 ${
                  viewMode === 'list' ? 'bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CarCard car={car} viewMode={viewMode} />
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-16">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2">
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
              </button>
              
                {[...Array(Math.min(totalPages, 7))].map((_, index) => {
                  let pageNumber;
                  if (totalPages <= 7) {
                    pageNumber = index + 1;
                  } else if (currentPage <= 4) {
                    pageNumber = index + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNumber = totalPages - 6 + index;
                  } else {
                    pageNumber = currentPage - 3 + index;
                  }
                  
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === pageNumber
                          ? 'bg-black text-white shadow-sm'
                          : 'text-gray-500 hover:text-black hover:bg-gray-100'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </button>
            </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;
