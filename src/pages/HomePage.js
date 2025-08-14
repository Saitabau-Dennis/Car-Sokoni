import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsSuccess, applyFilters } from '../store/slices/carsSlice';
import { carsData, getCategories } from '../data/cars';
import CarCard from '../components/car/CarCard';
import SearchBar from '../components/common/SearchBar';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items: cars } = useSelector((state) => state.cars);
  
  useEffect(() => {
    // Load cars data on component mount
    dispatch(fetchCarsSuccess(carsData));
    dispatch(applyFilters());
  }, [dispatch]);

  const featuredCars = cars.slice(0, 6);
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/Images/Toyota Prado TXL 1.jpeg"
            alt="Toyota Prado TXL - Premium SUV"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight text-white">
              Find Your
              <span className="block font-medium">
                Dream Vehicle
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Quality automobiles, competitive pricing, and outstanding customer care in East Africa. 
              Your path to automotive excellence begins today.
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="mb-12 max-w-2xl mx-auto relative z-50">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg overflow-visible">
                <SearchBar placeholder="Search premium vehicles, crossovers, sedans..." isHero={true} />
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/cars" 
                className="bg-black hover:bg-gray-800 text-white font-medium px-10 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse Inventory
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-medium px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-medium text-lg mb-4 block">PREMIUM SHOWCASE</span>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Meticulously Selected Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our expertly chosen range of exceptional automobiles, each vehicle representing 
              the ideal combination of innovation, comfort, and dependability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="group transform transition-all duration-500 hover:-translate-y-2">
                <CarCard car={car} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/cars" 
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300"
            >
              View Complete Inventory
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-black font-medium text-lg mb-4 block">VEHICLE CATEGORIES</span>
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
              Discover Your Match
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From executive comfort to athletic performance and everyday utility, 
              we offer the ideal vehicle category to complement your unique lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const categoryData = {
                'SUV': {
                  image: '/Images/Subaru Outback 1.jpg',
                  description: 'Commanding presence with family-friendly versatility'
                },
                'Hatchback': {
                  image: '/Images/Honda Fit 1.jpg',
                  description: 'Urban agility with intelligent space utilization'
                },
                'Performance': {
                  image: '/Images/Suzuki Swift Sport 1.jpeg',
                  description: 'Exhilarating speed meets precision engineering'
                },
                'Pickup': {
                  image: '/Images/Volkswagen Amarok 1.jpeg',
                  description: 'Professional capability with rugged dependability'
                }
              };
              
              const data = categoryData[category] || categoryData['SUV'];
              
              return (
                <Link
                  key={category}
                  to={`/cars?category=${category}`}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={data.image}
                      alt={category}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {category}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {data.description}
                    </p>
                    <div className="mt-4 flex items-center text-black group-hover:text-gray-700 transition-colors duration-300">
                      <span className="text-sm font-medium">Explore {category}</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>



      {/* Newsletter Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <h2 className="text-4xl md:text-5xl font-light text-black mb-6">
            Stay Connected
            </h2>
          <p className="text-xl mb-12 text-gray-600">
            Receive priority access to latest arrivals, exclusive deals, and premium automotive insights.
            </p>
            
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-black placeholder-gray-500 focus:ring-4 focus:ring-gray-300 focus:outline-none bg-gray-50 border border-gray-200"
              />
              <button
                type="submit"
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Premium content only. Cancel subscription at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
