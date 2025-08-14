# CarSokoni - React Frontend E-commerce

A comprehensive car e-commerce platform built with React, Redux, and Tailwind CSS. CarSokoni allows users to browse, search, filter, and purchase cars online with a modern and responsive interface.

## 🚀 Features

### Core Features
- **Homepage** with hero section, featured cars, categories, and newsletter signup
- **Car Listings Page** with advanced filtering, sorting, search, and pagination
- **Car Details Page** with image gallery, specifications, and related cars
- **Shopping Cart** with item management and checkout flow
- **User Authentication** (Login/Register with form validation)
- **User Profile** management
- **Responsive Design** across all devices (mobile, tablet, desktop)

### Technical Features
- React with functional components and hooks
- Redux Toolkit for state management
- React Router for navigation with protected routes
- Tailwind CSS for styling with custom components
- Local data store with 22 car entries
- Custom animations and transitions
- Loading states and error handling
- Form validation
- Search functionality with debouncing
- Advanced filtering (price range, brand, category, year)
- Sorting options
- Pagination

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom CSS
- **Icons**: Heroicons (via SVG)
- **Data**: Local JSON data store
- **Build Tool**: Create React App

## 📁 Project Structure

```
carsokoni/
├── public/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── SearchBar.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── ProtectedRoute.js
│   │   ├── car/             # Car-specific components
│   │   │   ├── CarCard.js
│   │   │   └── CarFilters.js
│   │   ├── cart/            # Cart components
│   │   └── user/            # User components
│   ├── pages/               # Page components
│   │   ├── HomePage.js
│   │   ├── CarsPage.js
│   │   ├── CarDetailsPage.js
│   │   ├── CartPage.js
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── ProfilePage.js
│   │   ├── AboutPage.js
│   │   ├── ContactPage.js
│   │   └── NotFoundPage.js
│   ├── store/               # Redux store
│   │   ├── index.js
│   │   └── slices/
│   │       ├── carsSlice.js
│   │       ├── cartSlice.js
│   │       └── userSlice.js
│   ├── data/                # Local data
│   │   └── cars.js
│   ├── utils/               # Utility functions
│   ├── styles/              # Additional styles
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd carsokoni
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Styling & Design

### Tailwind CSS Configuration
- Custom color palette with primary and secondary colors
- Responsive design utilities
- Custom component classes
- Animation keyframes

### Custom CSS Features
- Loading spinner animation
- Car card hover effects
- Price highlight animation
- Form validation states
- Mobile navigation transitions

### Responsive Breakpoints
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large screens**: 1440px+

## 🔧 Redux State Management

### Store Structure
```javascript
{
  cars: {
    items: [],           // All cars
    filteredItems: [],   // Filtered results
    loading: boolean,
    error: string,
    filters: {
      priceRange: [min, max],
      brands: [],
      categories: [],
      searchTerm: string,
      yearRange: [min, max]
    },
    sortBy: string
  },
  cart: {
    items: [],           // Cart items
    total: number,
    itemCount: number
  },
  user: {
    isAuthenticated: boolean,
    userInfo: object,
    loading: boolean,
    error: string
  }
}
```

### Available Actions
- **Cars**: `fetchCars`, `filterCars`, `sortCars`, `setSearchTerm`, `applyFilters`, `resetFilters`
- **Cart**: `addToCart`, `removeFromCart`, `updateCartQuantity`, `clearCart`
- **User**: `loginUser`, `logoutUser`, `updateUserInfo`

## 📱 Features Breakdown

### Homepage
- Hero section with search functionality
- Featured cars showcase (6 cars)
- Car categories navigation
- Newsletter subscription
- Statistics section
- Responsive navigation bar

### Car Listings
- Grid and list view modes
- Advanced filtering system
- Search with debouncing
- Sorting options
- Pagination
- Results counter

### Car Details
- Image gallery with thumbnails
- Complete specifications
- Add to cart functionality
- Star rating display
- Key features list
- Breadcrumb navigation

### Shopping Cart
- Item quantity management
- Remove items functionality
- Order summary with pricing
- Empty cart state
- Secure checkout indication

### User Authentication
- Login/Register forms
- Form validation
- Protected routes
- User session management
- Social login UI (mock)

## 🗃️ Sample Data

The application includes 22 sample cars with:
- Popular Kenyan car brands (Toyota, Honda, Nissan, Mazda, BMW, Mercedes-Benz, etc.)
- Realistic Kenyan pricing (in KES)
- Multiple categories (SUV, Sedan, Hatchback, Luxury)
- High-quality placeholder images from Unsplash
- Comprehensive specifications
- Feature lists and descriptions

## 🎯 Performance Optimizations

- Lazy loading for images
- Debounced search functionality
- Pagination for large datasets
- React.memo for component optimization
- Efficient Redux state updates
- Loading states for better UX

## 🔒 Security Features

- Protected routes for authenticated users
- Form validation on client side
- Mock authentication system
- Secure checkout indication

## 🚀 Deployment

### Recommended Platforms
- **Netlify**: `npm run build` → drag & drop build folder
- **Vercel**: Connect GitHub repository for automatic deployment
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

### Environment Variables
No environment variables are required for this demo version.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Car images from [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com)
- Fonts from [Google Fonts](https://fonts.google.com)

## 📞 Support

For support, email info@carsokoni.co.ke or create an issue in this repository.

---

**CarSokoni** - Find Your Perfect Car 🚗# Car-Sokoni
