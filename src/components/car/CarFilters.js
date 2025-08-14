import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setSortBy, applyFilters, resetFilters } from '../../store/slices/carsSlice';
import { getBrands, getCategories, getPriceRange } from '../../data/cars';

const CarFilters = () => {
  const dispatch = useDispatch();
  const { filters, sortBy } = useSelector((state) => state.cars);
  
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);

  const brands = getBrands();
  const categories = getCategories();
  const [minPrice, maxPrice] = getPriceRange();

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handlePriceRangeChange = (type, value) => {
    const newPriceRange = [...localFilters.priceRange];
    if (type === 'min') {
      newPriceRange[0] = parseInt(value);
    } else {
      newPriceRange[1] = parseInt(value);
    }
    setLocalFilters({ ...localFilters, priceRange: newPriceRange });
  };

  const handleBrandChange = (brand) => {
    const newBrands = localFilters.brands.includes(brand)
      ? localFilters.brands.filter(b => b !== brand)
      : [...localFilters.brands, brand];
    setLocalFilters({ ...localFilters, brands: newBrands });
  };

  const handleCategoryChange = (category) => {
    const newCategories = localFilters.categories.includes(category)
      ? localFilters.categories.filter(c => c !== category)
      : [...localFilters.categories, category];
    setLocalFilters({ ...localFilters, categories: newCategories });
  };

  const handleYearRangeChange = (type, value) => {
    const newYearRange = [...localFilters.yearRange];
    if (type === 'min') {
      newYearRange[0] = parseInt(value);
    } else {
      newYearRange[1] = parseInt(value);
    }
    setLocalFilters({ ...localFilters, yearRange: newYearRange });
  };

  const applyLocalFilters = () => {
    dispatch(setFilters(localFilters));
    dispatch(applyFilters());
    setIsFiltersOpen(false);
  };

  const handleReset = () => {
    dispatch(resetFilters());
    setLocalFilters({
      priceRange: [minPrice, maxPrice],
      brands: [],
      categories: [],
      searchTerm: '',
      yearRange: [2010, 2024],
    });
  };

  const handleSortChange = (newSortBy) => {
    dispatch(setSortBy(newSortBy));
    dispatch(applyFilters());
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <h3 className="text-lg font-medium">Filters & Sort</h3>
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="btn-secondary"
        >
          {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
          {/* Sort */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="input-field"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="brand">Brand A-Z</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={localFilters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                className="w-full"
              />
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={localFilters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>{formatPrice(localFilters.priceRange[0])}</span>
                <span>{formatPrice(localFilters.priceRange[1])}</span>
              </div>
            </div>
          </div>

          {/* Year Range */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year Range
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="2010"
                max="2024"
                value={localFilters.yearRange[0]}
                onChange={(e) => handleYearRangeChange('min', e.target.value)}
                className="w-full"
              />
              <input
                type="range"
                min="2010"
                max="2024"
                value={localFilters.yearRange[1]}
                onChange={(e) => handleYearRangeChange('max', e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-600">
                <span>{localFilters.yearRange[0]}</span>
                <span>{localFilters.yearRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brands
            </label>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={localFilters.brands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-gray-700">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories
            </label>
            <div className="space-y-1">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={localFilters.categories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-1 flex flex-col space-y-2">
            <button
              onClick={applyLocalFilters}
              className="btn-primary w-full"
            >
              Apply Filters
            </button>
            <button
              onClick={handleReset}
              className="btn-secondary w-full"
            >
              Reset All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;

