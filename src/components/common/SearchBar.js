import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchTerm, applyFilters } from '../../store/slices/carsSlice';

const SearchBar = ({ placeholder = "Search for cars, brands, models...", isHero = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchTerm } = useSelector((state) => state.cars.filters);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Get car data for suggestions
  const { items: cars } = useSelector((state) => state.cars);

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHero) {
        dispatch(setSearchTerm(localSearchTerm));
        dispatch(applyFilters());
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearchTerm, dispatch, isHero]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
    dispatch(applyFilters());
    
    // If in hero section, navigate to cars page
    if (isHero && localSearchTerm) {
      navigate('/cars');
    }
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setLocalSearchTerm('');
    dispatch(setSearchTerm(''));
    dispatch(applyFilters());
    setShowSuggestions(false);
  };

  // Handle input focus
  const handleFocus = () => {
    if (localSearchTerm) {
      setShowSuggestions(true);
    }
  };

  // Handle input blur with delay to allow clicking suggestions
  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  // Get search suggestions
  const getSuggestions = () => {
    if (!localSearchTerm || localSearchTerm.length < 2) return [];
    
    const suggestions = [];
    const searchLower = localSearchTerm.toLowerCase();
    
    // Add matching brands
    const brands = [...new Set(cars.map(car => car.brand))];
    brands.forEach(brand => {
      if (brand.toLowerCase().includes(searchLower)) {
        suggestions.push({ type: 'brand', value: brand, label: brand });
      }
    });
    
    // Add matching car models
    cars.forEach(car => {
      const carName = `${car.brand} ${car.model}`;
      if (carName.toLowerCase().includes(searchLower) && 
          !suggestions.some(s => s.value === carName)) {
        suggestions.push({ type: 'car', value: carName, label: `${car.brand} ${car.model}` });
      }
    });
    
    return suggestions.slice(0, 5); // Limit to 5 suggestions
  };

  const handleSuggestionClick = (suggestion) => {
    setLocalSearchTerm(suggestion.value);
    dispatch(setSearchTerm(suggestion.value));
    dispatch(applyFilters());
    if (isHero) {
      navigate('/cars');
    }
    setShowSuggestions(false);
  };

  const suggestions = getSuggestions();

  return (
    <div className="relative max-w-2xl mx-auto" style={{ zIndex: isHero ? 60 : 'auto' }}>
      <form onSubmit={handleSubmit} className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className={`h-5 w-5 ${isHero ? 'text-gray-400' : 'text-gray-400'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={localSearchTerm}
          onChange={(e) => {
            setLocalSearchTerm(e.target.value);
            setShowSuggestions(e.target.value.length >= 2);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 text-gray-900 placeholder-gray-500 ${
            isHero ? 'bg-white/90 backdrop-blur-sm' : 'bg-white'
          }`}
        />

        {/* Clear Button */}
        {localSearchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-16 flex items-center pr-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-black hover:bg-gray-800 rounded-r-lg transition-colors duration-200"
        >
          <span className="sr-only">Search</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-[70] max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex-shrink-0">
                {suggestion.type === 'brand' ? (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h2M7 16l3-3 3 3m6-6l-3 3-3-3" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{suggestion.label}</div>
                <div className="text-xs text-gray-500 capitalize">{suggestion.type}</div>
              </div>
            </button>
          ))}
          {localSearchTerm && (
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
              <div className="text-sm text-gray-600">
                Press Enter to search for "{localSearchTerm}"
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

