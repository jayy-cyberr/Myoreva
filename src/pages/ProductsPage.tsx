import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X, Leaf } from 'lucide-react';
import { products, type Product } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically determine min and max product prices
  const [minProductPrice, maxProductPrice] = useMemo(() => {
    const prices = products.map(p => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, []);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isInitialized, setIsInitialized] = useState(false);

  const categories = ['health', 'beauty', 'household'];

  useEffect(() => {
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    const search = searchParams.get('search');

    if (category) setSelectedCategory(category);
    if (sort) setSortBy(sort);
    if (search) setSearchQuery(search);

    // Initialize price range dynamically based on products
    setPriceRange([minProductPrice, maxProductPrice]);
    setIsInitialized(true);
  }, [minProductPrice, maxProductPrice, searchParams]);

  useEffect(() => {
    if (!isInitialized) return;

    let result = [...products];

    // Category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Price range filter
    result = result.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch(sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);

    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (sortBy !== 'featured') params.set('sort', sortBy);
    if (searchQuery) params.set('search', searchQuery);
    setSearchParams(params);
  }, [selectedCategory, priceRange, sortBy, searchQuery, isInitialized, setSearchParams]);

  const handleClearFilters = () => {
    setSelectedCategory('');
    setPriceRange([minProductPrice, maxProductPrice]);
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Blobs - Myoreva Style */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000" />

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section - Myoreva Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="text-green-600 text-sm font-medium bg-green-50 px-4 py-2 rounded-full border border-green-200 shadow-sm flex items-center space-x-2">
                <Leaf size={16} />
                <span>MYOREVA WELLNESS</span>
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent"
            >
              Our Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
               Check out our collection of  products
            </motion.p>
          </motion.div>

          {/* Search and Sort Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-between mb-8 gap-4"
          >
            <form onSubmit={handleSearchSubmit} className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search wellness products..."
                className="w-full px-4 py-3 pl-12 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400" size={18} />
            </form>

            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/70 backdrop-blur-sm shadow-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name</option>
              </select>

              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden bg-white/70 backdrop-blur-sm border border-green-200 rounded-xl px-4 py-3 flex items-center hover:bg-green-50 transition-colors shadow-sm"
              >
                <Filter size={18} className="mr-2 text-green-600" />
                <span className="text-green-600 font-medium">Filters</span>
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden md:block w-64 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm h-fit border border-green-100"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-4 text-gray-900">Categories</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={category}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-3 text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor={category} className="capitalize text-gray-700 font-medium">
                        {category}
                      </label>
                    </div>
                  ))}
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all-categories"
                      name="category"
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="mr-3 text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="all-categories" className="text-gray-700 font-medium">All Categories</label>
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-4 text-gray-900">Price Range</h4>
                <div className="mb-3 flex justify-between text-sm text-gray-600">
                  <span>₦{priceRange[0].toLocaleString()}</span>
                  <span>₦{priceRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  className="w-full accent-green-600"
                />
              </div>
            </motion.div>

            {/* Mobile Filter Modal */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                  className="fixed inset-0 bg-white z-50 md:hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-lg text-gray-900">Filters</h3>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Mobile Categories */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-4 text-gray-900">Categories</h4>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center">
                            <input
                              type="radio"
                              id={`mobile-${category}`}
                              name="mobile-category"
                              checked={selectedCategory === category}
                              onChange={() => {
                                setSelectedCategory(category);
                                setIsFilterOpen(false);
                              }}
                              className="mr-3 text-green-600 focus:ring-green-500"
                            />
                            <label htmlFor={`mobile-${category}`} className="capitalize text-gray-700 font-medium">
                              {category}
                            </label>
                          </div>
                        ))}
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="mobile-all-categories"
                            name="mobile-category"
                            checked={selectedCategory === ''}
                            onChange={() => {
                              setSelectedCategory('');
                              setIsFilterOpen(false);
                            }}
                            className="mr-3 text-green-600 focus:ring-green-500"
                          />
                          <label htmlFor="mobile-all-categories" className="text-gray-700 font-medium">All Categories</label>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Price Range */}
                    <div className="mb-8">
                      <h4 className="font-medium mb-4 text-gray-900">Price Range</h4>
                      <div className="mb-3 flex justify-between text-sm text-gray-600">
                        <span>₦{priceRange[0].toLocaleString()}</span>
                        <span>₦{priceRange[1].toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="1000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        className="w-full accent-green-600"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={handleClearFilters}
                        className="border border-green-300 rounded-xl px-6 py-3 w-1/2 hover:bg-green-50 transition-colors text-green-600 font-medium"
                      >
                        Clear All
                      </button>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="bg-green-600 text-white rounded-xl px-6 py-3 w-1/2 hover:bg-green-700 transition-colors font-medium"
                      >
                        Apply Filters
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Active filters */}
              {(selectedCategory || searchQuery) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2 mb-6 flex-wrap"
                >
                  <span className="text-sm text-gray-600 font-medium">Active filters:</span>

                  {selectedCategory && (
                    <span className="bg-green-50 border border-green-200 px-3 py-1 rounded-full text-sm flex items-center text-green-700 font-medium">
                      Category: <span className="capitalize ml-1">{selectedCategory}</span>
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="ml-2 text-green-500 hover:text-green-700"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  {searchQuery && (
                    <span className="bg-green-50 border border-green-200 px-3 py-1 rounded-full text-sm flex items-center text-green-700 font-medium">
                      Search: <span className="ml-1">{searchQuery}</span>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-green-500 hover:text-green-700"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  )}

                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline ml-auto"
                  >
                    Clear all
                  </button>
                </motion.div>
              )}

              {filteredProducts.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-green-100 shadow-sm">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">No products found</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      We couldn't find any products matching your filters.
                    </p>
                    <button
                      onClick={handleClearFilters}
                      className="bg-green-600 text-white rounded-xl px-8 py-3 hover:bg-green-700 transition-colors font-medium shadow-md hover:shadow-lg"
                    >
                      Clear Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;