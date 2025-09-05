import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";

import wartRemoverImg1 from '../assets/products/wat ad img/WART REMOVER FLYER 3.jpg'
import mygif from '../assets/products/wat ad img/My-gif-skin2.gif'
import remova from '../assets/products/wat ad img/Skin-Tag-Removal-.jpg'
import moles from '../assets/products/wat ad img/skin-tags-moles-warts-removall-before-and-after.jpg'
import beforeanda from '../assets/products/wat ad img/before and after.jpg'
import review from '../assets/products/wat ad img/photo_5782700159124224548_y-461x1024-1-review.jpg'
import result from '../assets/products/wat ad img/see results.png'
import flyer2 from '../assets/products/wat ad img/WART REMOVER FLYER 2.jpg'
import review3 from '../assets/products/wat ad img/lxkjZZg-1-review3.jpg'
import hbess from '../assets/products/wat ad img/hbes.gif'
import nomorewart from '../assets/products/wat ad img/IMG-FLYER NO MORE WART.png'


export default function WartRemoverLandingPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 58,
    seconds: 43,
  });

  const [orderForm, setOrderForm] = useState({
    fullName: '',
    phone: '',
    whatsappPhone: '',
    address: '',
    city: '',
    state: '',
    package: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const packages = [
    {
      id: "1 Wart-Remover",
      name: "Regular",
      subtitle: "1 Wart Remover",
      price: "13,500",
      originalPrice: "17,000",
      savings: "3,500",
      popular: false,
      features: ["Free Delivery", "Nationwide Delivery", "Instructions Included"]
    },
    {
      id: "2 Wart-Remover",
      name: "POPULAR CHOICE",
      subtitle: "2 Wart Remover ",
      price: "20,500",
      originalPrice: "34,000",
      savings: "14,000",
      popular: true,
      features: ["Free Delivery", "Nationwide Delivery", "Instructions Included", "Better Value"]
    },
    {
      id: "3 Wart-Remover",
      name: "(Highly Recommended) Perfect!",
      subtitle: "3 Wart Remover",
      price: "29,500",
      originalPrice: "51,000",
      savings: "31,500",
      popular: false,
      features: ["Free Delivery", "Nationwide Delivery", "Instructions Included", "Best Value"]
    }
  ];

  const benefits = [
    "REMOVES SKIN TAGS, WARTS & MOLES SAFELY",
    "SAFE FOR ALL SKIN TYPES",
    "RESULTS IN 7-10 DAYS",
    "DERMATOLOGIST RECOMMENDED"
  ];

  const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Lagos",
    rating: 5,
    text: "Amazing product! Removed my warts without any pain or scarring. I can't believe how effective it was!",
    image: "https://images.pexels.com/photos/28988329/pexels-photo-28988329.jpeg?auto=compress&cs=tinysrgb&h=500"
  },
  {
    name: "Michael Okafor",
    location: "Abuja",
    rating: 5,
    text: "This works great! Took just 2 applications to completely remove my skin tags. Very easy to use.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  },
  {
    name: "Anonymous",
    location: "Port Harcourt",
    rating: 5,
    text: "So far, the product has done a great job removing skin tags. Zero pain and very good results.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  }
];

const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);


 const handleOrderSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);       // clear previous error
  setLoading(true);     // show "processing"

  // ✅ instead of alert
  if (!orderForm.fullName || !orderForm.phone || !orderForm.address || 
      !orderForm.city || !orderForm.state || !orderForm.package) {
    setLoading(false);
    setError('⚠️ Please fill in all required fields');
    return;
  }

  const formData = new FormData(e.target as HTMLFormElement);
  const availability = formData.get('availability') as string;

  // if (!availability) {
  //   setLoading(false);
  //   setError('⚠️ Please select your availability');
  //   return;
  // }

  try {
    const selectedPackage = packages.find(pkg => pkg.id === orderForm.package);
    const price = selectedPackage ? parseInt(selectedPackage.price.replace(/,/g, '')) : 0;

    const formatNigerianPhone = (phone: string) => {
      let cleaned = phone.replace(/\D/g, '');
      if (cleaned.startsWith('234')) return `+${cleaned}`;
      if (cleaned.startsWith('0')) return `+234${cleaned.substring(1)}`;
      if (cleaned.length === 10) return `+234${cleaned}`;
      return phone;
    };

    const phoneNumbers = orderForm.phone
      .split(',')
      .map(phone => formatNigerianPhone(phone.trim()))
      .filter(phone => phone);

    const formattedWhatsAppPhone = orderForm.whatsappPhone 
      ? formatNigerianPhone(orderForm.whatsappPhone.trim()) 
      : "";

    const orderData = {
      fullName: orderForm.fullName.trim(),
      phone: phoneNumbers,
      whatsappPhone: formattedWhatsAppPhone,
      address: orderForm.address.trim(),
      city: orderForm.city.trim(),
      state: orderForm.state.trim(),
      package: orderForm.package,
      // availability,
      price
    };

    const response = await fetch('https://myoreva-backend-1.onrender.com/api/form/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      const result = await response.json();
      console.log("✅ Order submitted:", result);

      setOrderForm({
        fullName: '',
        phone: '',
        whatsappPhone: '',
        address: '',
        city: '',
        state: '',
        package: ''
      });
      (e.target as HTMLFormElement).reset();

      navigate('/thank-you');
    } else {
      const errorData = await response.json();
      setError(errorData.message || '❌ Failed to submit order. Please try again.');
    }

  } catch (err: any) {
    console.error("Network error:", err);
    setError('❌ Network error. Please check your connection.');
  } finally {
    setLoading(false);
  }
};


  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Top Notification Bar */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center font-bold shadow-lg"
      >
        <motion.span
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ⚠️ LIMITED TIME OFFER: FREE DELIVERY + MONEY BACK GUARANTEE!
        </motion.span>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear"
          }}
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, rgba(59,130,246,0.1) 0deg, transparent 120deg, rgba(239,68,68,0.1) 240deg, transparent 360deg)`
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              variants={fadeInUp}
            >
              Finally! Remove{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Skin Tags, Warts & Moles
              </span>{" "}
              Safely at Home
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              No more expensive surgeries or painful procedures. Get professional results 
              with dermatologist-recommended formula.

              <p>In Less Than 7-10 Days - Only Made For Those Who Care About Their Skin</p>
            </motion.p>

            {/* Countdown Timer */}
            <motion.div 
              className="flex justify-center items-center space-x-4 mb-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                  <div className="text-xs font-semibold uppercase">Hours</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                  <div className="text-xs font-semibold uppercase">Minutes</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-6 py-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                  <div className="text-xs font-semibold uppercase">Seconds</div>
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg"
              variants={fadeInUp}
            >
              ✓ Results in 7-10 Days • 100% Guaranteed • Dermatologist Approved
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToOrder}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ORDER NOW - FREE DELIVERY
            </motion.button>

            {/* Hero Image */}
            <motion.div 
              className="mt-12"
              variants={fadeInUp}
            >
              <img
                src={wartRemoverImg1}
                alt="HBESTY Wart Remover Product"
                className="mx-auto rounded-2xl shadow-2xl max-w-md w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Are You Tired of Failed Treatments?
            </h2>

            <div className="space-y-6 text-lg text-gray-700 mb-12">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Spending thousands on creams that don't work? Afraid of expensive surgery?
              </motion.p>
              
              <motion.div 
                className="bg-red-50 border border-red-200 rounded-xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-red-600 mb-4">Why Spend ₦200,000 on Surgery?</h3>
                <p className="text-xl text-red-700 font-semibold">
                  When you can get perfect results for less than ₦15,000!
                </p>
              </motion.div>

              <motion.div 
                className="bg-green-50 border border-green-200 rounded-xl p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-lg text-green-800">
                  Join over{" "}
                  <span className="font-bold text-green-600 text-2xl">10,709 Nigerians</span>{" "}
                  who have transformed their skin with our natural solution.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Wart Remover?
            </h2>
            <p className="text-xl text-gray-600">
              4 powerful benefits in one solution that works
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <p className="text-sm font-semibold text-center text-gray-800">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real People
            </h2>
            <p className="text-xl text-gray-600">
              See the incredible transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[result, remova, moles].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Before and after result ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">
                    Results in {7 + index} days
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-100 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
              <span className="ml-2 text-gray-600 font-semibold">4.9/5 from 1,247+ reviews</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                <div className="flex space-x-1 mt-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
          </motion.div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600">
              All packages come with free delivery and money-back guarantee
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`relative bg-white rounded-2xl p-8 shadow-xl ${
                  pkg.popular ? 'ring-4 ring-red-500 scale-105' : ''
                }`}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-red-600">₦{pkg.price}</span>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">₦{pkg.originalPrice}</span>
                      <span className="text-green-600 font-semibold ml-2">
                        Save ₦{pkg.savings}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setOrderForm({...orderForm, package: pkg.id});
                    scrollToOrder();
                  }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose This Package
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ORDER NOW - LIMITED TIME OFFER
            </h2>
            <p className="text-xl opacity-90">
              Fill the form below to secure your package with FREE delivery
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleOrderSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.fullName}
                    onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  value={orderForm.whatsappPhone}
                  onChange={(e) => setOrderForm({...orderForm, whatsappPhone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.city}
                    onChange={(e) => setOrderForm({...orderForm, city: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.state}
                    onChange={(e) => setOrderForm({...orderForm, state: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-4 uppercase">
                  Select Your Package *
                </label>
                <div className="space-y-3">
                  {packages.map((pkg) => (
                    <label 
                      key={pkg.id} 
                      className="flex items-center cursor-pointer p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={orderForm.package === pkg.id}
                        onChange={(e) => setOrderForm({...orderForm, package: e.target.value})}
                        className="mr-3 text-blue-500 focus:ring-blue-500 w-4 h-4"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 font-semibold">{pkg.name}</span>
                          <span className="text-blue-600 font-bold">₦{pkg.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                        {pkg.popular && (
                          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full mt-1">
                            MOST POPULAR
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>{packages.find(p => p.id === orderForm.package)?.name} Package</span>
                    <span className="font-bold">₦{packages.find(p => p.id === orderForm.package)?.price}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Delivery</span>
                    <span className="font-bold">FREE</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2">
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Total</span>
                      <span>₦{packages.find(p => p.id === orderForm.package)?.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
<motion.button
  type="submit"
  disabled={loading}
  className={`w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 text-xl font-bold rounded-xl shadow-xl transition-all duration-300 uppercase ${
    loading ? "opacity-70 cursor-not-allowed" : ""
  }`}
  whileHover={!loading ? { scale: 1.02 } : {}}
  whileTap={!loading ? { scale: 0.98 } : {}}
>
  <span className="flex items-center justify-center">
    {loading ? (
      <>
        <span className="mr-2 animate-spin">⏳</span>
        Processing...
      </>
    ) : (
      <>
        <span className="mr-2">🛒</span>
        PLACE ORDER NOW - PAY ON DELIVERY
      </>
    )}
  </span>
</motion.button>

{/* Error Message */}
{error && (
  <p className="text-center text-red-600 font-semibold mt-4">{error}</p>
)}


              <div className="text-center text-sm text-gray-600 space-y-2">
                <p className="flex items-center justify-center">
                  <span className="mr-2">🚚</span>
                  Free delivery nationwide
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">💰</span>
                  Pay when you receive your package
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">✅</span>
                  100% Money-back guarantee
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "How long does it take to see results?",
                a: "Most customers see visible results within 7-10 days of consistent use. Complete removal may take 2-3 weeks depending on the size and type of skin tag or wart."
              },
              {
                q: "Is it safe for all skin types?",
                a: "Yes! Our formula is made from natural ingredients and is safe for all skin types. However, we recommend doing a patch test first if you have very sensitive skin."
              },
              {
                q: "Will it leave scars?",
                a: "No, our product is specifically formulated to remove skin tags, warts, and moles without leaving scars when used as directed."
              },
              {
                q: "How do I use the product?",
                a: "Simply apply a small amount directly to the affected area twice daily. Detailed instructions are included with every package."
              },
              {
                q: "Do you offer delivery nationwide?",
                a: "Yes, we deliver to all 36 states in Nigeria completely FREE of charge. You only pay when you receive your package."
              },
              {
                q: "What if the product doesn't work for me?",
                a: "We offer a 100% money-back guarantee. If you're not satisfied with the results after 30 days, we'll refund your money."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don't Let Skin Tags Hold You Back!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have transformed their skin naturally
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center text-lg">
                <span className="mr-2">✓</span>
                Free Nationwide Delivery
              </div>
              <div className="flex items-center text-lg">
                <span className="mr-2">✓</span>
                Pay on Delivery
              </div>
              <div className="flex items-center text-lg">
                <span className="mr-2">✓</span>
                100% Money Back Guarantee
              </div>
            </div>

            <motion.button
              onClick={scrollToOrder}
              className="bg-white text-red-600 px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ORDER NOW - LIMITED TIME OFFER
            </motion.button>

            <p className="text-sm mt-6 opacity-75">
              *This offer expires in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">HBESTY Wart Remover</h3>
          <p className="text-gray-400 mb-6">
            Your trusted solution for natural skin tag and wart removal
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span>Free Delivery Nationwide</span>
            <span>Pay on Delivery</span>
            <span>100% Natural Ingredients</span>
            <span>Money Back Guarantee</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-500 text-sm">
            <p>&copy; 2024 HBESTY. All rights reserved. | Contact: +2348114580792</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://api.whatsapp.com/send?phone=+2348114580792&text=Hi, I want to order HBESTY Wart Remover`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
        </svg>
      </motion.a>
    </div>
  );
}