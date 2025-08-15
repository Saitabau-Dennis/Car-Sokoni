import { createSlice } from '@reduxjs/toolkit';
import { loadCarsFromStorage, saveCarsToStorage } from '../../utils/localStorage';

// Load initial state from localStorage
const persistedCars = loadCarsFromStorage();

const initialState = {
  items: persistedCars?.items || [],
  loading: false,
  error: null,
  filters: persistedCars?.filters || {
    priceRange: [0, 10000000],
    brands: [],
    categories: [],
    searchTerm: '',
    yearRange: [2010, 2024],
  },
  sortBy: persistedCars?.sortBy || 'newest',
  filteredItems: persistedCars?.filteredItems || [],
};

// Helper function to save state to localStorage
const saveCarsState = (state) => {
  saveCarsToStorage({
    items: state.items,
    filters: state.filters,
    sortBy: state.sortBy,
    filteredItems: state.filteredItems
  });
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    fetchCarsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCarsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.filteredItems = action.payload;
      saveCarsState(state);
    },
    fetchCarsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      saveCarsState(state);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      saveCarsState(state);
    },
    setSearchTerm: (state, action) => {
      state.filters.searchTerm = action.payload;
      saveCarsState(state);
    },
    applyFilters: (state) => {
      let filtered = [...state.items];
      
      // Apply search filter
      if (state.filters.searchTerm) {
        const searchTerm = state.filters.searchTerm.toLowerCase();
        filtered = filtered.filter(car => 
          car.brand.toLowerCase().includes(searchTerm) ||
          car.model.toLowerCase().includes(searchTerm) ||
          car.category.toLowerCase().includes(searchTerm) ||
          car.specifications.fuelType.toLowerCase().includes(searchTerm) ||
          car.specifications.transmission.toLowerCase().includes(searchTerm) ||
          car.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
          `${car.brand} ${car.model}`.toLowerCase().includes(searchTerm)
        );
      }
      
      // Apply price range filter
      filtered = filtered.filter(car => 
        car.price >= state.filters.priceRange[0] && 
        car.price <= state.filters.priceRange[1]
      );
      
      // Apply brand filter
      if (state.filters.brands.length > 0) {
        filtered = filtered.filter(car => 
          state.filters.brands.includes(car.brand)
        );
      }
      
      // Apply category filter
      if (state.filters.categories.length > 0) {
        filtered = filtered.filter(car => 
          state.filters.categories.includes(car.category)
        );
      }
      
      // Apply year range filter
      filtered = filtered.filter(car => 
        car.year >= state.filters.yearRange[0] && 
        car.year <= state.filters.yearRange[1]
      );
      
      // Apply sorting
      switch (state.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => b.year - a.year);
          break;
        case 'oldest':
          filtered.sort((a, b) => a.year - b.year);
          break;
        case 'brand':
          filtered.sort((a, b) => a.brand.localeCompare(b.brand));
          break;
        default:
          break;
      }
      
      state.filteredItems = filtered;
      saveCarsState(state);
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.sortBy = 'newest';
      state.filteredItems = state.items;
      saveCarsState(state);
    },
  },
});

export const {
  fetchCarsStart,
  fetchCarsSuccess,
  fetchCarsFailure,
  setFilters,
  setSortBy,
  setSearchTerm,
  applyFilters,
  resetFilters,
} = carsSlice.actions;

export default carsSlice.reducer;

