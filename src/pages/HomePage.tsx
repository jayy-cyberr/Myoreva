import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Star, Leaf } from 'lucide-react';
import { getFeaturedProducts, getBestSellingProducts } from '../data/products';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/products/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestSellers = getBestSellingProducts().slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Wellness <span className="text-secondary">Redefined</span> for Nigerian Lifestyles
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Premium health, beauty, and household products crafted with natural ingredients and African wellness traditions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn btn-primary">
                  Shop Now
                </Link>
                <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5938233/pexels-photo-5938233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MYOREVA natural wellness products"
                className="rounded-xl shadow-lg w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-800 font-medium text-sm">
                    Trusted by 10,000+ customers
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4">
              <ShieldCheck className="text-secondary mr-4" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">100% Natural</h3>
                <p className="text-gray-600 text-sm">All products made with premium natural ingredients</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Truck className="text-secondary mr-4" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Free shipping in Ibadan, nationwide delivery available</p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <Leaf className="text-secondary mr-4" size={32} />
              <div>
                <h3 className="font-semibold text-gray-800">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm">Sustainable practices and recyclable packaging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of products designed to enhance your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products?category=health" className="group">
              <div className="rounded-xl overflow-hidden relative h-80 shadow-md transition-transform duration-300 group-hover:shadow-lg">
                <img
                  src="https://images.pexels.com/photos/4077164/pexels-photo-4077164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Health Products"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">Health Products</h3>
                    <p className="text-gray-200 text-sm mb-4">Natural supplements and remedies to support your health</p>
                    <span className="text-secondary flex items-center font-medium">
                      Explore Now <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/products?category=beauty" className="group">
              <div className="rounded-xl overflow-hidden relative h-80 shadow-md transition-transform duration-300 group-hover:shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Beauty Products"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">Beauty & Skincare</h3>
                    <p className="text-gray-200 text-sm mb-4">Natural beauty products for radiant skin and hair</p>
                    <span className="text-secondary flex items-center font-medium">
                      Explore Now <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/products?category=household" className="group">
              <div className="rounded-xl overflow-hidden relative h-80 shadow-md transition-transform duration-300 group-hover:shadow-lg">
                <img
                  src="https://images.pexels.com/photos/5503415/pexels-photo-5503415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Household Products"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">Household Items</h3>
                    <p className="text-gray-200 text-sm mb-4">Eco-friendly household products for a healthy home</p>
                    <span className="text-secondary flex items-center font-medium">
                      Explore Now <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <p className="text-gray-600 mt-2">Discover our carefully selected premium offerings</p>
            </div>
            <Link to="/products" className="btn btn-outline hidden md:inline-flex">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular products loved by customers across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.reviews.length} reviews
                      </span>
                    </div>
                    <span className="font-semibold text-lg">₦{product.price.toLocaleString()}</span>
                  </div>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary w-full mt-4"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md"
              >
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
                <p className="mt-4 text-gray-200 italic">"{testimonial.comment}"</p>
                <div className="flex items-center mt-6">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to receive updates on new products, special offers, and wellness tips.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="input-field flex-grow"
                    required
                  />
                  <button type="submit" className="btn btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/6621310/pexels-photo-6621310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Natural wellness products"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;