import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import { products, Product } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['health', 'beauty', 'household'];
  
  useEffect(() => {
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
      case 'featured':
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
    
  }, [selectedCategory, priceRange, sortBy, searchQuery, setSearchParams]);
  
  useEffect(() => {
    // Initialize filters from URL params
    const category = searchParams.get('category');
    const sort = searchParams.get('sort');
    const search = searchParams.get('search');
    
    if (category) setSelectedCategory(category);
    if (sort) setSortBy(sort);
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const handleClearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 5000]);
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="bg-background py-8 md:py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Products</h1>
          <p className="text-gray-600">
            Discover our collection of premium wellness products
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              className="input-field pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </form>
          
          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
            
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden btn btn-outline flex items-center"
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button
                onClick={handleClearFilters}
                className="text-sm text-secondary hover:underline"
              >
                Clear all
              </button>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="mr-2"
                    />
                    <label htmlFor={category} className="capitalize">
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
                    className="mr-2"
                  />
                  <label htmlFor="all-categories">All Categories</label>
                </div>
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="mb-2 flex justify-between text-sm">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>

          {/* Filters - Mobile */}
          <div
            className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
              isFilterOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
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
                        className="mr-2"
                      />
                      <label htmlFor={`mobile-${category}`} className="capitalize">
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
                      className="mr-2"
                    />
                    <label htmlFor="mobile-all-categories">All Categories</label>
                  </div>
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="mb-2 flex justify-between text-sm">
                  <span>₦{priceRange[0].toLocaleString()}</span>
                  <span>₦{priceRange[1].toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={handleClearFilters}
                  className="btn btn-outline w-1/2"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="btn btn-primary w-1/2"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Active filters */}
            {(selectedCategory || searchQuery) && (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-sm text-gray-600">Active filters:</span>
                
                {selectedCategory && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                    Category: <span className="font-medium capitalize ml-1">{selectedCategory}</span>
                    <button
                      onClick={() => setSelectedCategory('')}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {searchQuery && (
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                    Search: <span className="font-medium ml-1">{searchQuery}</span>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-secondary hover:underline ml-auto"
                >
                  Clear all
                </button>
              </div>
            )}
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any products matching your filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;