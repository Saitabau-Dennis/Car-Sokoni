export const carsData = [
  {
    id: "car_001",
    brand: "Honda",
    model: "Fit",
    year: 2023,
    price: 1450000, // in KES
    category: "Hatchback",
    images: [
      "/Images/Honda Fit 1.jpg",
      "/Images/Honda Fit 2.jpg",
      "/Images/Honda Fit 3.jpg"
    ],
    thumbnail: "/Images/Honda Fit 1.jpg",
    specifications: {
      engine: "1.3L i-VTEC",
      transmission: "CVT",
      fuelType: "Petrol",
      mileage: "20 km/l",
      seatingCapacity: 5,
      color: "Blue"
    },
    features: ["Honda SENSING", "Magic Seats", "Multi-Angle Rearview Camera", "Push Button Start", "Smart Entry System", "LED Headlights"],
    description: "The Honda Fit is a versatile and fuel-efficient subcompact car that maximizes interior space through innovative design. Known for its reliability and practicality, the Fit features Honda's signature Magic Seats that can be configured in multiple ways to accommodate various cargo needs. With excellent fuel economy and a reputation for durability, this vehicle is perfect for city driving and daily commuting. The spacious interior defies its compact exterior dimensions, making it an ideal choice for urban dwellers who need efficiency without sacrificing functionality.",
    inStock: true,
    rating: 4.6
  },
  {
    id: "car_002",
    brand: "Mazda",
    model: "CX-3",
    year: 2023,
    price: 2150000,
    category: "SUV",
    images: [
      "/Images/Mazda Cx3 1.jpeg",
      "/Images/Mazda Cx3 2.jpeg",
      "/Images/Mazda Cx3 3.jpeg"
    ],
    thumbnail: "/Images/Mazda Cx3 1.jpeg",
    specifications: {
      engine: "2.0L SKYACTIV-G",
      transmission: "6-Speed SKYACTIV-Drive",
      fuelType: "Petrol",
      mileage: "16 km/l",
      seatingCapacity: 5,
      color: "Red"
    },
    features: ["SKYACTIV Technology", "i-ACTIVSENSE Safety", "Mazda Connect Infotainment", "LED Signature Lighting", "18-inch Alloy Wheels", "Bose Premium Audio"],
    description: "The Mazda CX-3 combines the elevated driving position and confidence of an SUV with the fuel efficiency and agility of a smaller car. Built with Mazda's innovative SKYACTIV technology, it delivers exceptional fuel economy without compromising performance. The CX-3 features a premium interior with high-quality materials and intuitive technology. Its responsive handling and engaging driving dynamics make every journey enjoyable, while advanced safety features provide peace of mind. This compact SUV is perfect for those who want style, efficiency, and the versatility of an SUV in a manageable size.",
    inStock: true,
    rating: 4.7
  },
  {
    id: "car_003",
    brand: "Nissan",
    model: "Note Nismo S",
    year: 2024,
    price: 1850000,
    category: "Hatchback",
    images: [
      "/Images/Nissan Note Nismo S 1.jpg",
      "/Images/Nissan Note Nismo S 2.jpg",
      "/Images/Nissan Note Nismo S 3.jpg"
    ],
    thumbnail: "/Images/Nissan Note Nismo S 1.jpg",
    specifications: {
      engine: "1.6L Supercharged",
      transmission: "CVT with Sport Mode",
      fuelType: "Petrol",
      mileage: "18 km/l",
      seatingCapacity: 5,
      color: "White"
    },
    features: ["NISMO Performance Tuning", "Sport-Tuned Suspension", "NISMO Aerodynamic Kit", "Sport Seats", "Intelligent Key", "Around View Monitor"],
    description: "The Nissan Note Nismo S is a high-performance variant of the popular Note hatchback, enhanced by Nissan's motorsport division NISMO. This sporty compact car features a supercharged engine that delivers thrilling performance while maintaining excellent fuel efficiency. The NISMO treatment includes sport-tuned suspension, aerodynamic enhancements, and distinctive styling cues that set it apart from the standard Note. Inside, you'll find sport seats and NISMO-branded details that emphasize its performance pedigree. Perfect for enthusiasts who want a practical daily driver with genuine performance credentials.",
    inStock: true,
    rating: 4.5
  },
  {
    id: "car_004",
    brand: "Subaru",
    model: "Impreza WRX STI",
    year: 2023,
    price: 4500000,
    category: "Performance",
    images: [
      "/Images/Subaru Impreza WRX STI.jpeg"
    ],
    thumbnail: "/Images/Subaru Impreza WRX STI.jpeg",
    specifications: {
      engine: "2.5L Turbocharged Boxer",
      transmission: "6-Speed Manual",
      fuelType: "Petrol",
      mileage: "10 km/l",
      seatingCapacity: 5,
      color: "Blue"
    },
    features: ["Symmetrical All-Wheel Drive", "DCCD Center Differential", "Brembo Brakes", "STI-Tuned Suspension", "Recaro Sport Seats", "Multi-Mode SI-Drive"],
    description: "The Subaru Impreza WRX STI represents the pinnacle of Subaru's rally-bred performance engineering. This high-performance sedan features a turbocharged boxer engine paired with Subaru's legendary Symmetrical All-Wheel Drive system, delivering exceptional grip and control in all conditions. The STI variant includes track-focused enhancements like Brembo brakes, sport-tuned suspension, and a driver-controlled center differential. With its motorsport heritage and daily usability, the WRX STI offers an uncompromising driving experience for performance enthusiasts who refuse to settle for ordinary.",
    inStock: true,
    rating: 4.9
  },
  {
    id: "car_005",
    brand: "Subaru",
    model: "Outback",
    year: 2024,
    price: 3200000,
    category: "SUV",
    images: [
      "/Images/Subaru Outback 1.jpg",
      "/Images/Subaru Outback 2.jpg",
      "/Images/Subaru Outback 3.jpg"
    ],
    thumbnail: "/Images/Subaru Outback 1.jpg",
    specifications: {
      engine: "2.5L Boxer",
      transmission: "CVT",
      fuelType: "Petrol",
      mileage: "13 km/l",
      seatingCapacity: 5,
      color: "Green"
    },
    features: ["Standard All-Wheel Drive", "EyeSight Driver Assist", "X-Mode with Hill Descent Control", "Roof Rails", "Large Cargo Area", "Ground Clearance 8.7 inches"],
    description: "The Subaru Outback is the perfect blend of wagon practicality and SUV capability. Built for adventure, it features standard Symmetrical All-Wheel Drive and impressive ground clearance that enables confident handling on various terrains. The Outback's spacious interior and large cargo area make it ideal for families and outdoor enthusiasts. Advanced safety features like EyeSight Driver Assist Technology come standard, providing peace of mind on every journey. Whether navigating city streets or exploring off-road trails, the Outback delivers reliability, versatility, and the go-anywhere confidence that Subaru is known for.",
    inStock: true,
    rating: 4.8
  },
  {
    id: "car_006",
    brand: "Suzuki",
    model: "Baleno",
    year: 2023,
    price: 1650000,
    category: "Hatchback",
    images: [
      "/Images/Suzuki Baleno 1.jpeg",
      "/Images/Suzuki Baleno 2.jpeg",
      "/Images/Suzuki Baleno 3.jpeg"
    ],
    thumbnail: "/Images/Suzuki Baleno 1.jpeg",
    specifications: {
      engine: "1.4L K-Series",
      transmission: "5-Speed Manual",
      fuelType: "Petrol",
      mileage: "21 km/l",
      seatingCapacity: 5,
      color: "Silver"
    },
    features: ["SmartPlay Infotainment", "Auto Climate Control", "Keyless Entry", "Push Button Start", "Rear Parking Sensors", "LED Projector Headlamps"],
    description: "The Suzuki Baleno is a premium hatchback that combines elegant design with advanced technology and exceptional fuel efficiency. Its spacious cabin offers comfort for five passengers while the large boot provides ample storage space. The Baleno features Suzuki's reliable K-Series engine known for its smooth performance and excellent fuel economy. With modern amenities like SmartPlay infotainment system and automatic climate control, it delivers a premium driving experience. The Baleno's contemporary styling and practical features make it an excellent choice for urban professionals seeking style, efficiency, and reliability.",
    inStock: true,
    rating: 4.4
  },
  {
    id: "car_007",
    brand: "Suzuki",
    model: "Swift Sport",
    year: 2024,
    price: 2250000,
    category: "Performance",
    images: [
      "/Images/Suzuki Swift Sport 1.jpeg",
      "/Images/Suzuki Swift Sport 2.jpeg",
      "/Images/Suzuki Swift Sport 3.jpeg"
    ],
    thumbnail: "/Images/Suzuki Swift Sport 1.jpeg",
    specifications: {
      engine: "1.4L BoosterJet Turbo",
      transmission: "6-Speed Manual",
      fuelType: "Petrol",
      mileage: "17 km/l",
      seatingCapacity: 5,
      color: "Yellow"
    },
    features: ["BoosterJet Turbo Engine", "Sport-Tuned Suspension", "6-Speed Manual Transmission", "Sport Seats", "Paddle Shifters", "Sport Exhaust System"],
    description: "The Suzuki Swift Sport is a pocket rocket that delivers genuine performance thrills in a compact, affordable package. Powered by Suzuki's innovative BoosterJet turbo engine, it offers impressive power-to-weight ratio and engaging driving dynamics. The sport-tuned suspension and precise steering provide exceptional handling, while the lightweight construction ensures agility and responsiveness. With its distinctive styling, sport seats, and driver-focused interior, the Swift Sport appeals to driving enthusiasts who want excitement without the high running costs of larger performance cars. It's proof that fun doesn't have to be expensive.",
    inStock: true,
    rating: 4.6
  },
  {
    id: "car_008",
    brand: "Toyota",
    model: "Prado TXL",
    year: 2024,
    price: 6500000,
    category: "SUV",
    images: [
      "/Images/Toyota Prado TXL 1.jpeg",
      "/Images/Toyota Prado TXL 2.jpeg",
      "/Images/Toyota Prado TXL 3.jpeg"
    ],
    thumbnail: "/Images/Toyota Prado TXL 1.jpeg",
    specifications: {
      engine: "4.0L V6",
      transmission: "6-Speed Automatic",
      fuelType: "Petrol",
      mileage: "8 km/l",
      seatingCapacity: 7,
      color: "White"
    },
    features: ["Full-Time 4WD", "Kinetic Dynamic Suspension", "Multi-Terrain Select", "Crawl Control", "Leather Interior", "Sunroof", "Premium Sound System"],
    description: "The Toyota Land Cruiser Prado TXL represents the pinnacle of Toyota's SUV engineering, combining legendary off-road capability with luxury and comfort. Built on Toyota's robust platform, it features advanced 4WD systems including Multi-Terrain Select and Crawl Control for tackling the most challenging terrain. The spacious seven-seat interior is appointed with premium materials and advanced technology. Known for its exceptional reliability and resale value, the Prado TXL is equally at home on safari adventures or city boulevards. This is the SUV of choice for those who demand uncompromising capability without sacrificing luxury.",
    inStock: true,
    rating: 4.9
  },
  {
    id: "car_009",
    brand: "Volkswagen",
    model: "Amarok",
    year: 2023,
    price: 4200000,
    category: "Pickup",
    images: [
      "/Images/Volkswagen Amarok 1.jpeg",
      "/Images/Volkswagen Amarok 2.jpeg",
      "/Images/Volkswagen Amarok 3.jpeg"
    ],
    thumbnail: "/Images/Volkswagen Amarok 1.jpeg",
    specifications: {
      engine: "3.0L V6 TDI",
      transmission: "8-Speed Automatic",
      fuelType: "Diesel",
      mileage: "12 km/l",
      seatingCapacity: 5,
      color: "Gray"
    },
    features: ["4MOTION All-Wheel Drive", "Rear Differential Lock", "Hill Descent Control", "Load Area Protection", "Trailer Assist", "Premium Interior"],
    description: "The Volkswagen Amarok sets new standards in the pickup truck segment with its combination of rugged capability and refined sophistication. Powered by a robust V6 TDI engine and equipped with 4MOTION all-wheel drive, it delivers impressive towing capacity and off-road performance. The Amarok's car-like interior features premium materials and advanced technology typically found in luxury SUVs. Its sophisticated suspension system provides excellent ride quality both on and off-road. Whether you're hauling cargo for work or heading off on weekend adventures, the Amarok delivers the versatility and reliability you need.",
    inStock: true,
    rating: 4.7
  },
  {
    id: "car_010",
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2024,
    price: 3800000,
    category: "SUV",
    images: [
      "/Images/Volkswagen Tiguan 1.jpg",
      "/Images/Volkswagen Tiguan 2.jpg",
      "/Images/Volkswagen Tiguan 3.jpg"
    ],
    thumbnail: "/Images/Volkswagen Tiguan 1.jpg",
    specifications: {
      engine: "2.0L TSI Turbo",
      transmission: "8-Speed Automatic",
      fuelType: "Petrol",
      mileage: "11 km/l",
      seatingCapacity: 7,
      color: "Black"
    },
    features: ["4MOTION All-Wheel Drive", "Digital Cockpit", "App-Connect", "Adaptive Cruise Control", "Emergency Assist", "Panoramic Sunroof"],
    description: "The Volkswagen Tiguan represents German engineering excellence in the compact SUV segment. With its turbocharged TSI engine and available 4MOTION all-wheel drive, it delivers confident performance in all conditions. The Tiguan's sophisticated interior features Volkswagen's Digital Cockpit and intuitive infotainment system. Available in both 5 and 7-seat configurations, it offers flexibility for growing families. Advanced safety technologies and driver assistance systems provide peace of mind, while the refined ride quality and responsive handling make every journey enjoyable. The Tiguan perfectly balances practicality, technology, and driving pleasure.",
    inStock: true,
    rating: 4.8
  }
];

export const getCarById = (id) => {
  return carsData.find(car => car.id === id);
};

export const getCarsByCategory = (category) => {
  return carsData.filter(car => car.category === category);
};

export const getBrands = () => {
  return [...new Set(carsData.map(car => car.brand))].sort();
};

export const getCategories = () => {
  return [...new Set(carsData.map(car => car.category))].sort();
};

export const getPriceRange = () => {
  const prices = carsData.map(car => car.price);
  return [Math.min(...prices), Math.max(...prices)];
};