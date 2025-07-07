import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Star,
  Flame,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Phone,
  MessageCircle,
  Zap,
  Wind,
  Users,
  Award,
  MapPin,
  Package,
  ArrowRight,
  Timer,
  ShoppingCart,
  // Play,
  ChevronLeft,
  ChevronRight
} from "lucide-react";


export default function CampGasLandingPage() {
  const navigate = useNavigate(); // ✅

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 45,
    seconds: 30,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("regular");
  const [stockProgress] = useState(86);
  const [showStickyOrder, setShowStickyOrder] = useState(false);
  const [orderForm, setOrderForm] = useState({
    fullName: "",
    phone: "",
    whatsappPhone: "",
    address: "",
    city: "",
    state: "",
    package: "regular"
  });

  // Product data
  const packages = [
    {
      id: "regular",
      name: "REGULAR",
      subtitle: "1 Camping Gas + 1 Cylinder",
      price: "38,500",
      originalPrice: "46,500",
      savings: "8,000",
      popular: false,
      features: ["1 Portable Camp Gas Stove", "1 Gas Cylinder", "Free Delivery", "Easy Return Policy", "1 Year Warranty"]
    },
    {
      id: "silver",
      name: "SILVER",
      subtitle: "1 Camping Gas + 2 Cylinders",
      price: "45,000",
      originalPrice: "58,500",
      savings: "13,500",
      popular: true,
      features: ["1 Professional Camp Gas Stove", "2 Gas Cylinders", "Free Delivery", "Easy Return Policy", "1 Year Warranty", "Extra Cylinder Bonus"]
    },
    {
      id: "family",
      name: "FAMILY CAMPING",
      subtitle: "1 Camping Gas + 3 Cylinders",
      price: "53,500",
      originalPrice: "76,500",
      savings: "23,000",
      popular: false,
      features: ["1 Professional Camp Gas Stove", "3 Gas Cylinders", "Free Delivery", "Easy Return Policy", "1 Year Warranty", "Storage Bag Included", "Best Value for Families"]
    }
  ];

  const testimonials = [
    {
      name: "James David",
      location: "Lagos",
      rating: 5,
      text: "The fire power is good and the price is good. It is easy to carry and cheap, so it is recommended if you find something that has good performance. Simple to use.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Grace Adebayo",
      location: "Abuja",
      rating: 5,
      text: "Abeg, this camp gas dey work like magic! I used it for my outdoor cooking and it was like a breeze! No more stress, no more hassle. The flame is steady, the heat is strong, and its so easy to use.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Mr Larance",
      location: "Port Harcourt",
      rating: 5,
      text: "This camp gas cylinder na God sent o! I use am for my BBQ gatherings and its a game changer. The gas lasts long, the burner is strong, and its so portable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Powerful Performance",
      description: "High-quality burner for efficient cooking with consistent flame control"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Safety First",
      description: "Built-in safety features and quality materials for secure outdoor cooking"
    },
    {
      icon: <Wind className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Wind Resistant",
      description: "Advanced design that works perfectly even in windy outdoor conditions"
    },
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Ultra Portable",
      description: "Lightweight and compact design perfect for camping, hiking, and outdoor adventures"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quick Setup",
      description: "Easy to set up and start cooking in seconds with simple ignition system"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Premium Quality",
      description: "Made with high-quality materials and undergoes rigorous testing for durability"
    }
  ];

  const productImages = [
    "https://ext.same-assets.com/766014306/3315234400.jpeg",
    "https://ext.same-assets.com/766014306/3744395389.jpeg",
    "https://ext.same-assets.com/766014306/2224721905.jpeg",
    "https://ext.same-assets.com/766014306/3829765178.jpeg"
  ];

  // Video URLs (you can replace with actual product videos)
  const productVideos = [
    "https://ext.same-assets.com/766014306/2132041780.mp4",
    "https://ext.same-assets.com/766014306/2049059161.mp4"
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  // Auto-slide product images
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentProductImage(prev => (prev + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [productImages.length]);

  // Sticky order button scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.8; // Show after 80% of viewport height
      setShowStickyOrder(scrollPosition > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/2348114580792?text=Hi,%20I%20want%20to%20buy%20CAMPING%20GAS%20-%20${packages.find(p => p.id === selectedPackage)?.name}%20Package`;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store form data in localStorage for thank you page
    localStorage.setItem('orderData', JSON.stringify({
      ...orderForm,
      package: packages.find(p => p.id === orderForm.package),
      timestamp: new Date().toISOString()
    }));

    // Redirect to thank you page instead of WhatsApp
    navigate('/thank-you');
  };

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gradient-to-b from-orange-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-green-600 to-yellow-400

">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <div className="bg-yellow-400 text-black hover:bg-yellow-500 px-3 py-2 text-xs sm:text-sm font-bold animate-pulse rounded-full">
                  🔥 LIMITED TIME OFFER
                </div>
                <div className="bg-green-500 text-white hover:bg-green-600 px-3 py-2 text-xs sm:text-sm font-bold rounded-full">
                  ✅ FREE DELIVERY
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Professional
                  <span className="block text-yellow-300 drop-shadow-lg">Camp Gas Stove</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-medium">
                  Cook Anywhere, Anytime as a Camper, Hiker & Adventure Lover
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0">
                Experience the ultimate outdoor cooking with our premium portable gas stove.
                Perfect for camping, hiking, BBQ gatherings and all outdoor adventures.
              </p>

              {/* Pricing */}
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">₦38,500</div>
                    <div className="text-sm sm:text-lg text-gray-300 line-through">₦46,500</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-2xl text-green-300 font-bold">Save ₦8,000!</div>
                    <div className="text-xs sm:text-sm text-gray-300">Starting from</div>
                  </div>
                </div>

                {/* Stock Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm text-gray-200">
                    <span>Stock Alert: Only 14 left!</span>
                    <span>{stockProgress}/100 sold</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${stockProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 sm:p-6 max-w-md mx-auto lg:mx-0 shadow-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                  <p className="text-xs sm:text-sm font-semibold text-yellow-300">OFFER EXPIRES IN:</p>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Mins", value: timeLeft.minutes },
                    { label: "Secs", value: timeLeft.seconds }
                  ].map((item) => (
                    <div key={item.label} className="bg-white/20 rounded-lg p-2 sm:p-3">
                      <div className="text-lg sm:text-2xl font-bold text-white">{item.value.toString().padStart(2, '0')}</div>
                      <div className="text-[10px] sm:text-xs text-gray-200">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  onClick={scrollToPackages}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
                >
                  <ShoppingCart className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold shadow-lg transition" />
                  ORDER NOW - FREE DELIVERY
                </button>
                <button
                  onClick={() => window.open('tel:08114580792')}
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
                  Call: 08114580792
                </button>
              </div>
            </div>

            {/* Right Content - Auto-sliding Product Gallery */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentProductImage * 100}%)` }}
                  >
                    {productImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div className="aspect-square relative">
                          <img
                            src={image}
                            alt={`Professional Camp Gas Stove ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manual navigation */}
                <button
                  onClick={() => setCurrentProductImage((prev) => (prev - 1 + productImages.length) % productImages.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentProductImage((prev) => (prev + 1) % productImages.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Floating badges */}
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 z-10">
                  <div className="bg-green-500 text-white px-2 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold animate-bounce shadow-lg">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 inline" />
                    Best Seller
                  </div>
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 z-10">
                  <div className="bg-red-500 text-white px-2 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold animate-pulse shadow-lg">
                    <Truck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 inline" />
                    Free Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Product Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              See CAMPING GAS™ In Action
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Watch How Easy It Is To Use
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              See why thousands of outdoor enthusiasts choose our professional camp gas stove for their adventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {productVideos.map((video, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900">
                  <video
                    className="w-full h-64 sm:h-80 object-cover"
                    poster={productImages[index]}
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      LIVE DEMO
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Images Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              Product Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every Detail Matters
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {productImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square">
                  <img
                    src={image}
                    alt={`Camp Gas Stove Detail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              Why Choose Our Camping Gas Stove
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              You Can't Be Disappointed On Your Outdoor Trip!
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our gas cylinders are designed to provide consistent flow of gas, ensuring you have enough power for all your needs.
              Made with high-quality materials and undergo rigorous testing to ensure your safety.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 shadow-lg bg-white rounded-2xl overflow-hidden"
              >
                <div className="p-6 sm:p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-orange-500 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



{/* Trust Indicators */}
      <section className="py-6 sm:py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="space-y-1 sm:space-y-2 transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">86+</div>
              <div className="text-xs sm:text-sm text-gray-300">Happy Customers This Week</div>
            </div>
            <div className="space-y-1 sm:space-y-2 transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">100</div>
              <div className="text-xs sm:text-sm text-gray-300">Units Imported</div>
            </div>
            <div className="space-y-1 sm:space-y-2 transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">24hrs</div>
              <div className="text-xs sm:text-sm text-gray-300">Fast Delivery</div>
            </div>
            <div className="space-y-1 sm:space-y-2 transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-red-400">14</div>
              <div className="text-xs sm:text-sm text-gray-300">Units Left</div>
            </div>
          </div>
        </div>
      </section>




      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Happy Customers Reviews
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join thousands of satisfied customers across Nigeria who trust our products
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
                      <div className="p-6 sm:p-8 lg:p-12 text-center">
                        <div className="flex justify-center mb-4 sm:mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-orange-200"
                          />
                          <div className="text-left">
                            <h4 className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</h4>
                            <p className="text-sm sm:text-base text-gray-600 flex items-center">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section id="packages" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-red-200 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              Choose Your Package
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Select Your Perfect Package
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              All packages include free delivery nationwide and easy return policy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, ) => (
              <div
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-500 transform hover:scale-105 rounded-2xl shadow-lg ${
                  pkg.popular
                    ? 'ring-4 ring-orange-500 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50'
                    : 'hover:shadow-xl bg-white'
                } ${selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full font-bold shadow-lg text-xs sm:text-sm">
                      🎯 MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center pt-6 sm:pt-8 px-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">{pkg.subtitle}</p>

                  <div className="py-4 sm:py-6">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2">₦{pkg.price}</div>
                    <div className="text-base sm:text-lg text-gray-500 line-through mb-2">₦{pkg.originalPrice}</div>
                    <div className="bg-green-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full inline-block">
                      Save ₦{pkg.savings}
                    </div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-6 sm:pb-8">
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm sm:text-base text-gray-700">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 shadow-lg'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    onClick={() => {
                      setOrderForm({...orderForm, package: pkg.id});
                      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Choose This Package
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline" />
                  </button>

                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                    ORDER BEFORE 11:59pm AND Get Free DELIVERY
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="max-w-2xl mx-auto border-red-200 bg-red-50 rounded-lg p-4 border">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-red-800 font-medium text-sm sm:text-base">
                  <strong>ATTENTION:</strong>
                </span>
              </div>
              <p className="text-red-800 text-sm sm:text-base">
                If you CANNOT receive your order within 1-4 working days, DO NOT place an order.
                We will contact you immediately and start processing your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form - sabimarket style */}
      <section id="order-form" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 sm:p-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">PLACE ORDER YOUR BELOW...</h2>
                <p className="text-base sm:text-lg opacity-90">Fill the form below to complete your order</p>
              </div>

              <div className="p-6 sm:p-8">
                <form onSubmit={handleOrderSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.fullName}
                        onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        YOUR PHONE NUMBER(S) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="080XXXXXXXX"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        IF YOU HAVE MORE THAN 1 NUMBER THEN SEPERATE WITH COMMA(,).
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      ALTERNATIVE/WHATSAPP PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={orderForm.whatsappPhone}
                      onChange={(e) => setOrderForm({...orderForm, whatsappPhone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="NUMBER WE CAN REACH ON WHATSAPP"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      NUMBER WE CAN REACH ON WHATSAPP. THIS CAN BE YOUR WIFE'S, HUSBAND OR ANYBODY CLOSE TO YOU.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      FULL DELIVERY ADDRESS *
                    </label>
                    <input
                      type="text"
                      required
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Please indicate any popular landmark"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        CITY *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.city}
                        onChange={(e) => setOrderForm({...orderForm, city: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        STATE *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderForm.state}
                        onChange={(e) => setOrderForm({...orderForm, state: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="Your state"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      KINDLY SELECT YOUR DESIRED PACKAGE *
                    </label>
                    <div className="space-y-3">
                      {packages.map((pkg) => (
                        <label key={pkg.id} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="package"
                            value={pkg.id}
                            checked={orderForm.package === pkg.id}
                            onChange={(e) => setOrderForm({...orderForm, package: e.target.value})}
                            className="mr-3 text-red-500 focus:ring-red-500"
                          />
                          <span className="text-gray-700">
                            1 Camping Gas, {pkg.id === 'regular' ? '1' : pkg.id === 'silver' ? '2' : '3'} Cylinder = ₦{pkg.price}
                            {pkg.popular && ' (Popular Choice)'}
                            {pkg.id === 'family' && ' (Highly Recommended Family)'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      ARE YOU AVAILABLE TO RECEIVE YOUR ORDER WITHIN 24-48HRS? *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="availability"
                          value="yes"
                          className="mr-3 text-red-500 focus:ring-red-500"
                          required
                        />
                        <span className="text-gray-700">YES</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="availability"
                          value="no"
                          className="mr-3 text-red-500 focus:ring-red-500"
                          required
                        />
                        <span className="text-gray-700">NO</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm sm:text-base">
                          <span>{packages.find(p => p.id === orderForm.package)?.name} Package</span>
                          <span className="font-bold">₦{packages.find(p => p.id === orderForm.package)?.price}</span>
                        </div>
                        <div className="flex justify-between text-green-600 text-sm sm:text-base">
                          <span>Delivery</span>
                          <span className="font-bold">FREE</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>₦{packages.find(p => p.id === orderForm.package)?.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 uppercase"
                    >
                      Click Here To Order
                    </button>

                    <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                      By clicking the button above, you'll be redirected to our thank you page
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-bold text-sm sm:text-base">86 Smart Nigerians</span>
            </div>
            <span className="text-sm sm:text-base">already bought this within one week</span>
          </div>
          <p className="text-base sm:text-lg opacity-90">
            Most sales came through recommendations. Join the satisfied customers today!
          </p>
        </div>
      </section>

      {/* Footer - sabimarket style */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Need Help?</h3>
            <div className="space-y-2">
              <p className="text-base sm:text-lg">CALL OUR CUSTOMER CARE LINE</p>
              <a href="tel:08114580792" className="text-2xl sm:text-3xl font-bold text-green-400 hover:text-green-300 transition-colors">
                08114580792
              </a>
            </div>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Chat Us On WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm mb-8">
              <div>
                <h4 className="font-bold mb-2">Product Features</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>✓ Wind Resistant Design</li>
                  <li>✓ Portable & Lightweight</li>
                  <li>✓ High Quality Materials</li>
                  <li>✓ Easy Setup & Use</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Delivery Info</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>✓ Free Nationwide Delivery</li>
                  <li>✓ 1-4 Working Days</li>
                  <li>✓ Easy Return Policy</li>
                  <li>✓ Secure Payment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Contact</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>📞 08114580792</li>
                  <li>💬 WhatsApp Available</li>
                  <li>🚚 Nigeria Wide Delivery</li>
                  <li>⭐ 100% Customer Satisfaction</li>
                </ul>
              </div>
            </div>

            {/* Legal Links */}
            <div className="text-center space-y-4 border-t border-gray-700 pt-6">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <span className="text-gray-600">|</span>
                <a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
              </div>

              {/* Facebook Disclaimer */}
              <div className="bg-gray-800 p-4 rounded-lg text-xs text-gray-400 max-w-4xl mx-auto">
                <p className="mb-2">
                  <strong>Facebook Disclaimer:</strong> This website is not part of the Facebook website or Facebook Inc.
                  Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                </p>
                <p>
                  Results shown are not typical and individual results may vary. This site is not affiliated with Facebook or any other social media platform.
                </p>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm">
                &copy; 2025 MyOreva Camp Gas. All rights reserved. | Make Camping More Fun And Easier!
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky ORDER NOW Button */}
      {showStickyOrder && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-2xl border-t">
          <div className="container mx-auto">
            <button
              onClick={scrollToPackages}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              ORDER NOW - FREE DELIVERY
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Widget - positioned to not interfere with sticky button */}
      <div className={`fixed right-4 sm:right-6 z-40 transition-all duration-300 ${showStickyOrder ? 'bottom-24' : 'bottom-4 sm:bottom-6'}`}>
        <div className="relative group">
          <div className="absolute bottom-full right-0 mb-2 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg whitespace-nowrap shadow-lg">
              <p className="font-semibold">Need Help?</p>
              <p>Chat with us on WhatsApp</p>
              <div className="absolute top-full right-4 sm:right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
