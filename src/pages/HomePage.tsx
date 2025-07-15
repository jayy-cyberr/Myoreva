import type React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Star, Leaf, ChevronLeft, ChevronRight, Play, ZoomIn, Heart, Package, Award, Shield, Users } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import Hbesty from '../assets/products/IMG 2.jpg';
import Hbest from '../assets/products/IMG 1.jpeg';
import campGas from'../assets/products/IMG 3.jpg';
import campGa from'../assets/products/IMG 3.jpg';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  buttonText: string;
  buttonLink: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "MYOREVA WELLNESS",
    description: "A Friend To Your Wellness",
    background: "https://images.pexels.com/photos/5938233/pexels-photo-5938233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "SHOP HERE",
    buttonLink: "/products"
    
  },
  {
    id: 2,
    title: "Natural",
    subtitle: "HIGHLY EFFECTIVE",
    description: "Simply made for you, shop with confidence",
    background: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "ORDER NOW",
    buttonLink: "/products"
  },
  {
    id: 3,
    title: "Premium",
    subtitle: "WART REMOVER",
    description: "Say goodbye to warts, moles, and skin tags",
    background: "https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "BUY NOW",
    buttonLink: "/products"
  },
  {
    id: 4,
    title: "Transform Your Lifestyle",
    subtitle: "WELLNESS JOURNEY",
    description: "Start a healthy journey with trusted solutions",
    background: "https://cdn.pixabay.com/photo/2022/06/01/08/57/watermelon-7235140_1280.jpg",
    buttonText: "ORDER NOW",
    buttonLink: "/products"
  },
  {
    id: 5,
    title: "Nature's Best",
    subtitle: "DELIVERED TO YOU",
    description: "Buy our products made with your wellbeing in mind ",
    background: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "SHOP HERE",
    buttonLink: "/products"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Wart-Remover",
    category: "Now Selling",
    description: "Permanent Solution to all kinds of warts, skin tags and moles without spending a huge amount of money on surgeries.",
    price: 13500,
    image: Hbesty,
    rating: 0,
    // reviews: [],
    redirectUrl: "/wart-remover"
  },
  {
    id: 2,
    name: "Camping Gas Stove",
    category: "TRENDING",
    description: "Portable Windproof Camping Stove for Outdoor Adventures.",
    price: 38500,
    image: campGas,
    rating: 0,
    // reviews: [],
    redirectUrl: "/camp-gas/"
  },
  {
    id: 3,
    name: "Wart-Remover",
    category: "Now Selling",
    description: "Permanent Solution to all kinds of warts, skin tags and moles without spending a huge amount of money on surgeries.",
    price: 13500,
    image: Hbest,
    rating: 0,
    reviews: [],
    redirectUrl: "/wart-remover/"
  },
  {
    id: 4,
    name: "Camping Gas Stove",
    category: "TRENDING",
    description: "Portable Windproof Camping Stove for Outdoor Adventures.",
    price: 38500,
    image: campGa,
    rating: 0,
    reviews: [],
    redirectUrl: "/camp-gas/"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Anonymous",
    location: "Lagos, Nigeria",
    comment: "Bro! Thank you so much, the product really works. My warts has cleared pata pata. I mean it's all gone!",
    rating: 5,
    image: "https://media.istockphoto.com/id/1289729022/photo/silhouette-af-man-without-face-in-hood-on-red-background-anonymous-crime-concept.jpg?s=1024x1024&w=is&k=20&c=EbCW6zkQ_3dvMUSh5NsKQQ-SBRyp14A7WCGWBU_cm_0="
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Abuja, Nigeria",
    comment: "Amazing quality and fast delivery. These products are now part of my daily wellness routine.",
    rating: 5,
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100%22"
  },
  {
    id: 3,
    name: "Fatima Hassan",
    location: "Kano, Nigeria",
    comment: "Now I believe you truly sells the original. And I must say I Love the eco-friendly approach. Finally found products that align with my values!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Auto-play for testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(testimonialInterval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Enhanced */}
      <section className="relative h-screen overflow-hidden">

          <div className="absolute inset-0">
  {carouselSlides.map((slide, index) => (
    <motion.div
      key={index}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
      style={{ backgroundImage: `url(${slide.background})` }}
      animate={{ opacity: index === currentSlide ? 1 : 0 }}
      initial={false}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />
  ))}
  <div className="absolute inset-0 bg-black/40" />
</div>

        {/* </AnimatePresence> */}

        <div className="relative z-10 min-h-screen">
          {/* Hero Content */}
          <div className="container mx-auto px-4 lg:px-8 pt-20 pb-16">
            <div className="grid lg:grid-cols-3 gap-8 min-h-[80vh]">
              {/* Left Content */}
              <div className="lg:col-span-2 flex items-center">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-white space-y-6"
                >
                 <div className="space-y-2">
  {/* h3 slides from left */}
  <motion.h3
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="text-2xl md:text-3xl font-light text-green-200"
  >
    {carouselSlides[currentSlide].title}
  </motion.h3>

  {/* h1 slides from left */}
  <motion.h1
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
  >
    {carouselSlides[currentSlide].subtitle}
  </motion.h1>
</div>


{/* p tag comes in from bottom AFTER all the above */}
<motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.9 }}
  className="text-base md:text-xl font-light text-gray-200 max-w-2xl mt-4"
>
  {carouselSlides[currentSlide].description}
</motion.p>


{/* button also slides in from left */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="pt-6"
>
  <Link
    to={carouselSlides[currentSlide].buttonLink}
    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
  >
    <motion.span
      key={`bounce-${currentSlide}`}
      initial={{ scale: 1, y: 0 }}
      animate={{ scale: [1, 1.05, 1], y: [0, -4, 0] }}
      transition={{
        duration: 2.1,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }}
      className="inline-block"
    >
      {carouselSlides[currentSlide].buttonText}
    </motion.span>
    <ArrowRight className="ml-2" size={12} />
  </Link>
</motion.div>

                </motion.div>
              </div>

              {/* Right Side Trust Indicators */}
              <div className="lg:col-span-1 flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full space-y-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <Shield className="text-green-300" size={24} />
                      <div>
                        <h4 className="text-white font-semibold">Secure</h4>
                        <p className="text-green-200 text-sm">Payment on Delivery</p>
                      </div>
                    </div>
                  </div>
{/* 
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <Truck className="text-green-300" size={24} />
                      <div>
                        <h4 className="text-white font-semibold">Delivery</h4>
                        <p className="text-green-200 text-sm">Local & INTL.</p>
                      </div>
                    </div>
                  </div> */}

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <Users className="text-green-300" size={24} />
                      <div>
                        <h4 className="text-white font-semibold">Satisfaction</h4>
                        <p className="text-green-200 text-sm">1000+ Happy Customers</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <Award className="text-green-300" size={24} />
                      <div>
                        <h4 className="text-white font-semibold">100%</h4>
                        <p className="text-green-200 text-sm">Guaranteed!</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-3">
              {carouselSlides.map((slide, index) => (
                <button
                  key={`dot-${slide.id}`}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Arrow Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Products Section - and Background Styling*/}
      <section className="py-16 bg-white  relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
<div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10"></div>


          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="text-green-600 text-sm font-medium bg-green-50 px-4 py-2 rounded-full border border-green-200 shadow-sm">
                Best selling
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent"
            >
              Popular Demand
            </motion.h2>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
            >
              Check out our most loved products that customers can't stop talking about
            </motion.p>
          </div>

          {/* Products Grid - 2 columns on mobile */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
  {featuredProducts.map((product, index) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <h3 className="font-semibold text-sm md:text-base mb-2 text-gray-900 line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
    {product.description}
  </p>

        {/* Removed star ratings and reviews count */}

        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-lg text-gray-900">
            ₦{product.price.toLocaleString()}
          </span>
        </div>

        <a
          href={product.redirectUrl}
          rel="noopener noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300 text-center text-sm"
        >
          Order Now
        </a>
      </div>
    </motion.div>
  ))}
</div>


{/* View All Products Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <MagneticButton
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2" size={20} />
            </MagneticButton>
          </motion.div>


        </div>
      </section>



      {/* Testimonials - */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100 relative overflow-hidden">

        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm md:text-base font-semibold text-gray-600 tracking-wider uppercase mb-4 flex items-center justify-center space-x-2"
            >

              WHAT PEOPLE ARE SAYING
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 "
            >
              The Experience
            </motion.h2>
          </div>

          {/* Single Sliding Testimonial */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={`testimonial-star-${i}`} size={20} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].comment}"
                  </blockquote>

                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-100"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>


            {/* Navigation Dots */}
            <div className="flex justify-center items-center space-x-8 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={`testimonial-nav-${index}`}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-green-600 scale-125'
                      : 'bg-gray-300 hover:bg-green-600'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-white">Join Our Wellness Community</h2>
                <p className="text-green-100 mb-6">
                  Subscribe to receive updates on new products, special offers, and wellness tips.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Subscribe Now
                  </button>
                </form>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden md:block"
              >
                <img
                  src="https://images.pexels.com/photos/6621310/pexels-photo-6621310.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Natural wellness products"
                  className="rounded-lg w-full h-64 object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;