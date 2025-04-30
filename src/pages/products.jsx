import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Star, ChevronDown, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Mock data - in a real app, this would come from an API
    const mockProducts = [
      {
        id: 1,
        name: "Leather Armchair",
        category: "Living Room",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 599,
        rating: 4.8,
        description: "Elegant leather armchair with wooden legs, perfect for any living room."
      },
      {
        id: 2,
        name: "Wooden Coffee Table",
        category: "Living Room",
        image: "https://mysleepyhead.com/media/catalog/product/s/l/sleepyhead_product_ls_309_new.jpg",
        price: 349,
        rating: 4.5,
        description: "Rustic coffee table made from reclaimed wood with metal accents."
      },
      {
        id: 3,
        name: "Modern Sofa",
        category: "Living Room",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        price: 1299,
        rating: 4.9,
        description: "Contemporary three-seater sofa with premium fabric upholstery."
      },
      {
        id: 4,
        name: "Minimalist Bookshelf",
        category: "Living Room",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        price: 249,
        rating: 4.7,
        description: "Open shelving unit with clean lines and durable construction."
      },
      {
        id: 5,
        name: "Oak Dining Table",
        category: "Dining",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-L0hD-hEibItYV5m6Yvp-skLO-j59j0qGw&s",
        price: 899,
        rating: 4.6,
        description: "Solid oak dining table that comfortably seats six people."
      },
      {
        id: 6,
        name: "Upholstered Dining Chair",
        category: "Dining",
        image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 129,
        rating: 4.4,
        description: "Comfortable dining chair with fabric upholstery and wooden frame."
      },
      {
        id: 7,
        name: "King Size Bed Frame",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 899,
        rating: 4.8,
        description: "Elegant king size bed frame with upholstered headboard."
      },
      {
        id: 8,
        name: "Bedside Table",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1551516594-56cb78394645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 149,
        rating: 4.5,
        description: "Compact nightstand with drawer and shelf for storage."
      },
      {
        id: 9,
        name: "Wardrobe",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 799,
        rating: 4.7,
        description: "Spacious wardrobe with hanging space and drawers."
      },
      {
        id: 10,
        name: "Office Desk",
        category: "Office",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 399,
        rating: 4.6,
        description: "Sleek desk with drawer storage and cable management."
      },
      {
        id: 11,
        name: "Ergonomic Office Chair",
        category: "Office",
        image: "https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 299,
        rating: 4.9,
        description: "Adjustable chair designed for comfort during long work sessions."
      },
      {
        id: 12,
        name: "Outdoor Dining Set",
        category: "Outdoor",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: 1299,
        rating: 4.7,
        description: "Weather-resistant table and chairs perfect for garden entertaining."
      }
    ];

    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(mockProducts.map(p => p.category))];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    // Filter products based on search, category, and price range
    let result = [...products];
    
    // Search filter
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Price range filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    // 'featured' sorting would typically be handled by the backend
    
    setFilteredProducts(result);
  }, [products, searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Our Products</h1>
          <p className="text-gray-800 mt-2">Discover our collection of premium furniture pieces</p>
        </div>
        
        {/* Search and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-800 whitespace-nowrap">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="sm:hidden flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 shadow-sm"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2 accent-indigo-600"
                      />
                      <span className="text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-700">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-indigo-600"
                  />
                  <div className="pt-2">
                    <button 
                      onClick={() => setPriceRange([0, 5000])}
                      className="text-sm text-indigo-600 hover:text-indigo-700"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden w-full mb-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="mr-2 accent-indigo-600"
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-700">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-indigo-600"
                    />
                    <div className="pt-2">
                      <button 
                        onClick={() => setPriceRange([0, 5000])}
                        className="text-sm text-indigo-600 hover:text-indigo-700"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Product Grid */}
          <div className="flex-grow">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium text-gray-700">No products found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <button className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transform translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        </div>
                        <p className="text-lg font-semibold text-indigo-600">${product.price}</p>
                      </div>
                      <div className="flex items-center space-x-1 mt-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;