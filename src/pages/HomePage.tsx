import type React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Star, Leaf, ChevronLeft, ChevronRight, Play, ZoomIn } from 'lucide-react';
import Hbesty from '../assets/products/Hbesty.jpg';
import Hbest from '../assets/products/Hbesty2.png';
import campGas from'../assets/products/campgas.jpg';
import campGa from'../assets/products/campgas2.jpg';


interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  background: string;
  buttonText: string;
  buttonLink: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "MyOreva Wellness",
    subtitle: "Where every product tells a story of natural healing and every choice leaves a healthier you",
    background: "https://images.pexels.com/photos/5938233/pexels-photo-5938233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Discover Products",
    buttonLink: "/products"
  },
  {
    id: 2,
    title: "Natural. Pure. Effective.",
    subtitle: "Premium health and beauty products crafted with African wellness traditions and modern science",
    background: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Shop Now",
    buttonLink: "/products"
  },
  {
    id: 3,
    title: "Wart Remover",
    subtitle: "Experience the power of nature with our curated selection of wellness essentials",
    background: "https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Learn More",
    buttonLink: "/about"
  },
  {
    id: 4,
    title: "Transform Your Lifestyle",
    subtitle: "Join thousands who have discovered the MYOREVA difference in natural wellness",
    background: "https://cdn.pixabay.com/photo/2022/06/01/08/57/watermelon-7235140_1280.jpg",
    buttonText: "Get Started",
    buttonLink: "/products"
  },
  {
    id: 5,
    title: "Nature's Best, Delivered",
    subtitle: "Sustainable, eco-friendly products that care for you and the planet",
    background: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonText: "Explore Range",
    buttonLink: "/products"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Wart-Remover",
    description: "Permanent Solution to all kinds of warts, skin tags and moles without spending a huge amount of money on surgeries.",
    price: 13500,
    image: Hbesty,
    reviews: [1, 2, 3, 4, 5],
    redirectUrl: "https://sabimarket.com.ng/wart-remover/"
  },
  {
    id: 2,
    name: "Camping Gas Stove",
    description: "Portable Windproof Camping Stove - Stainless Steel, Foldable Design with Adjustable Legs for Outdoor Adventures, Hiking, and Picnics, Camping Accessorie.",
    price: 38500,
    image: campGas,
    reviews: [1, 2, 3, 4, 5],
    redirectUrl: "https://sabimarket.com.ng/camp-gas/"
  },
  {
    id: 3,
    name: "Wart-Removal",
    description: "Permanent Solution to all kinds of warts, skin tags and moles without spending a huge amount of money on surgeries.",
    price: 13500,
    image: Hbest,
    reviews: [1, 2, 3, 4, 5],
    redirectUrl: "https://sabimarket.com.ng/wart-remover/"
  },
  {
    id: 4,
    name: "Camping Gas Stove",
    description: "Portable Windproof Camping Stove - Stainless Steel, Foldable Design with Adjustable Legs for Outdoor Adventures, Hiking, and Picnics, Camping Accessorie.",
    price: 38500,
    image: campGa,
    reviews: [1, 2, 3, 4],
    redirectUrl: "https://sabimarket.com.ng/camp-gas/"
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
  

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume auto-play after 10s
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
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0,}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${carouselSlides[currentSlide].background})`
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white space-y-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white "  >
                  
                  {carouselSlides[currentSlide].title}
                </h1>

                {/* <motion.h1
  initial={{ opacity: 0, y: -60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="text-4xl md:text-6xl font-bold leading-tight text-white"
>
  {carouselSlides[currentSlide].title}
</motion.h1> */}


{/* 
                <p className="text-xl lg:text-xl text-gray-200 leading-relaxed max-w-lg">
                  {carouselSlides[currentSlide].subtitle}
                </p> */}

                <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl"
>
  {carouselSlides[currentSlide].subtitle}
</motion.p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
  to={carouselSlides[currentSlide].buttonLink}
  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition">
  {/* Buttontext movement */}
  <motion.span
  key={`bounce-${currentSlide}`}
  initial={{ scale: 1, y: 0 }}
  animate={{
    scale: [1, 1.05, 1],
    y: [0, -4, 0]
  }}
  transition={{
    duration: 2.1,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'easeInOut'
  }}
  className="inline-block text-shadow-glow"
>
  {carouselSlides[currentSlide].buttonText}
</motion.span>

  <ArrowRight className="ml-2" size={18} />
</Link>

                  <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
                    <Play className="mr-2" size={20} />
                    Watch Story
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {carouselSlides.map((slide, index) => (
              <button
                key={`dot-${slide.id}`}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
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
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Trust Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center p-6 bg-gray-50 rounded-xl"
            >
              <ShieldCheck className="text-green-600 mr-4 flex-shrink-0" size={40} />
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">100% Natural</h3>
                <p className="text-gray-600">All products made with premium natural ingredients</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center p-6 bg-gray-50 rounded-xl"
            >
              <Truck className="text-green-600 mr-4 flex-shrink-0" size={40} />
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Fast Delivery</h3>
                <p className="text-gray-600">Free Delivery + Nationwide Coverage</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center p-6 bg-gray-50 rounded-xl"
            >
              <Leaf className="text-green-600 mr-4 flex-shrink-0" size={40} />
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">Eco-Friendly</h3>
                <p className="text-gray-600">Sustainable practices and recyclable packaging</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Popular Demands
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Our most popular products loved by customers across Nigeria
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Now Selling
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={`product-${product.id}-star-${i}`} size={16} fill="#F59E0B" stroke="#F59E0B" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.reviews.length} Reviews
                      </span>
                    </div>
                    <span className="font-semibold text-lg text-gray-900">₦{product.price.toLocaleString()}</span>
                  </div>
              <a
  href={product.redirectUrl}
  // target="_blank"
  rel="noopener noreferrer"
  className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
>
  Order Now
</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Don't just take our word for it - hear from our satisfied customers across Nigeria
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`testimonial-${testimonial.id}-star-${i}`} size={16} fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
                <p className="text-gray-200 italic mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
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
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  Subscribe to receive updates on new products, special offers, and wellness tips delivered straight to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 w-full overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-green-300 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
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
