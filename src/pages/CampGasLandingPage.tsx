import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import camp from '../assets/products/campgas2.jpg';
import camp1 from '../assets/products/campgas.jpg';
import campground from '../assets/products/campppl.jpg';
import campfry from '../assets/products/campfrying.jpg';
import easy from '../assets/products/easyto.webp';
// import kett from '../assets/products/kettle.jpg';
import video1 from '../assets/products/vid1.mp4';
import video2 from '../assets/products/vid2.mp4';
import packageImg1 from "../assets/products/1.jpg";
import packageImg2 from "../assets/products/2.jpg";
import packageImg3 from "../assets/products/3.jpg";


import {
  Star,
  Flame,
  Shield,
  Truck,
  Clock,
  CheckCircle,
  Phone,
  Home,
  Zap,
  Wind,
  Users,
  Award,
  MapPin,
  Package,
  ArrowRight,
  Timer,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Bold
} from "lucide-react";

export default function CampGasLandpingPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

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
    package: ""
  });

  // Your actual packages array structure
const packages = [
  {
    id: "1 Camping Gas + 1 Cylinder",
    name: "REGULAR",
    subtitle: "1 Camping Gas + 1 Cylinder",
    image: packageImg1,
    price: "38,500",
    originalPrice: "46,500",
    savings: "8,000",
    popular: false,
    features: ["Free Delivery", "Easy Return Policy", "1 Year Warranty"]
  },
  {
    id: "1 Camping Gas + 2 Cylinders",
    name: "SILVER",
    subtitle: "1 Camping Gas + 2 Cylinders",
    image: packageImg2,
    price: "45,000",
    originalPrice: "58,500",
    savings: "13,500",
    popular: true,
    features: ["Free Delivery", "Easy Return Policy", "1 Year Warranty"]
  },
  {
    id: "1 Camping Gas + 3 Cylinders",
    name: "FAMILY CAMPING",
    subtitle: "1 Camping Gas + 3 Cylinders",
    image: packageImg3,
    price: "53,500",
    originalPrice: "76,500",
    savings: "23,000",
    popular: false,
    features: ["Free Delivery", "Easy Return Policy", "1 Year Warranty", "Best Value for Families"]
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
      name: "Anonymous",
      location: "Abuja",
      rating: 5,
      text: "Abeg, this camp gas dey work like magic! I used it for my outdoor cooking and it was like a breeze! No more stress, no more hassle. The flame is steady, the heat is strong, and its so easy to use.",
      image: "https://ui-avatars.com/api/?name=Anonymous&background=000000&color=ffffff"
    },
    {
      name: "Mr Lawrence",
      location: "Port Harcourt",
      rating: 5,
      text: "This camp gas cylinder na God sent o! I use am for my BBQ gatherings and its a game changer. The gas lasts long, the burner is strong, and its so portable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Ultra Portable",
      description: "Lightweight and compact design perfect for trips, camping, hiking, and outdoor adventures"
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Quick Setup",
      description: "Easy to set up and start cooking in seconds with simple ignition system"
    },
    // {
    //   icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
    //   title: "Premium Quality",
    //   description: "Made with high-quality materials and undergoes rigorous testing for durability"
    // }
  ];

  const productImages = [
    // "https://ext.same-assets.com/766014306/3315234400.jpeg",
    "https://ext.same-assets.com/766014306/3744395389.jpeg",
    "https://ext.same-assets.com/766014306/3829765178.jpeg",
    camp,
    camp1,
    campground,
    
  ];

  const productVideos = [
    // "https://ext.same-assets.com/766014306/2132041780.mp4",
    // "https://ext.same-assets.com/766014306/2049059161.mp4",
    video1,
    video2
  ];

// Product image2
const imageControls = useAnimation();
const imageSectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const node = imageSectionRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageControls.start({ opacity: 1, y: 0 });
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(node);
  return () => observer.disconnect();
}, [imageControls]);

  

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

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
      const triggerPoint = window.innerHeight * 0.8;
      setShowStickyOrder(scrollPosition > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/2348114580792?text=Hi,%20I%20want%20to%20buy%20CAMPING%20GAS%20-%20${packages.find(p => p.id === selectedPackage)?.name}%20Package`;

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

  if (!availability) {
    setLoading(false);
    setError('⚠️ Please select your availability');
    return;
  }

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
      availability,
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

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
  
        <div className="w-full bg-gradient-to-b from-green-50 via-white to-emerald-50 overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-800 via-green-600 to-teal-500 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:20px_20px]"></div>
        </motion.div>

        <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            {/* Left Content */}
            <motion.div 
              className="text-center lg:text-left space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:from-yellow-500 hover:to-amber-600 px-4 py-2 text-xs sm:text-sm font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  🔥 LIMITED TIME OFFER
                </motion.div>
                <motion.div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 px-4 py-2 text-xs sm:text-sm font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                >
                  ✅ FREE DELIVERY
                </motion.div>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Professional
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 drop-shadow-lg"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Camp Gas Stove
                  </motion.span>
                </h1>
                <motion.p 
                  className="text-lg sm:text-xl md:text-2xl text-gray-100 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Cook Anywhere, Anytime as a Camper, Hiker & Adventure Lover
                </motion.p>
              </motion.div>

              <motion.p 
                className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Are you tired of running out of gas in the middle of cooking or working?

                Our Portable Camping Gas Stove is here to save the day!
              
                {/* Perfect for camping, hiking, BBQ gatherings and all outdoor adventures. */}
              </motion.p>

              {/* Pricing */}
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 max-w-md mx-auto lg:mx-0 shadow-xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <motion.div 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ₦38,500
                    </motion.div>
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
                  <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${stockProgress}%` }}
                      transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div 
                className="bg-gradient-to-r from-emerald-700 to-teal-800 rounded-2xl p-4 sm:p-6 max-w-md mx-auto lg:mx-0 shadow-2xl border border-emerald-600/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
                  </motion.div>
                  <p className="text-xs sm:text-sm font-semibold text-yellow-300">OFFER EXPIRES IN:</p>
                </div>
                <motion.div 
                  className="grid grid-cols-4 gap-2 text-center"
                  variants={staggerContainer}
                  animate="animate"
                >
                  {[
                    { label: "Days", value: timeLeft.days }, 
                    { label: "Hours", value: timeLeft.hours }, 
                    { label: "Mins", value: timeLeft.minutes }, 
                    { label: "Secs", value: timeLeft.seconds }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label} 
                      className="bg-white/20 backdrop-blur-sm rounded-lg p-2 sm:p-3 hover:bg-white/30 transition-all duration-300"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                      <motion.div 
                        className="text-lg sm:text-2xl font-bold text-white"
                        key={item.value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </motion.div>
                      <div className="text-[10px] sm:text-xs text-gray-200">{item.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <motion.button
                  onClick={scrollToPackages}
                  className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full shadow-2xl w-full sm:w-auto relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent "
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 ">ORDER NOW - FREE DELIVERY</span>
                </motion.button>
                
              </motion.div>
            </motion.div>

            {/* Right Content - Auto-sliding Product Gallery */}
            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-lg mx-auto">
                <motion.div 
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProductImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="aspect-square relative"
                    >
                      <img
                        src={productImages[currentProductImage]}
                        alt={`Professional Camp Gas Stove ${currentProductImage + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Manual navigation */}
                <motion.button
                  onClick={() => setCurrentProductImage((prev) => (prev - 1 + productImages.length) % productImages.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setCurrentProductImage((prev) => (prev + 1) % productImages.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>

                {/* Floating badges */}
                <motion.div 
                  className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 z-10"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <div className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-2 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    <Truck className="w-3 h-3 sm:w-4 sm:h-4 mr-1 inline" />
                    Free Shipping
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



{/* First Product Images */}
<motion.section
  className="py-8 bg-white"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.15 }} // "once: false" means replay on scroll
  transition={{ duration: 0.8 }}
>
  <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Tagline */}
    <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
      Portable Gas Stove You Can Trust
    </span>

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
      COOK ANYWHERE AT ANYTIME AS A CAMPER, HIKER, PICNIC ENTHUSIAST AND ADVENTURE LOVER.
    </h2>

    {/* Intro Text */}
    <p className="max-w-2xl mx-auto text-gray-500-bold  mb-4">
      🔥Say goodbye to heavy cooking gear!🔥
    </p>
    <p className="max-w-2xl mx-auto text-gray-500 mb-10">Our Mini Camping Gas is small enough to fit in your backpack but powerful enough to cook all your favorite meals.
      Take it on your next trip and experience the freedom of outdoor cooking!</p>

    {/* Offer Text */}
    <p className="mb-2">🔥29% OFF💝 Portable Camping Gas Stove</p>
    <p className="text-lg sm:text-md font-bold text-red-600 mb-10">
      ✅ Don't delay, Take Action Now. Buy While It's Still In Stock — ORDER NOW
    </p>

    {/* Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {[easy, campfry].map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative rounded-lg overflow-hidden shadow-lg group"
        >
          <motion.img
            src={img}
            alt={`Product view ${index + 1}`}
            loading="eager"
            {...{ fetchpriority: "high" }}
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>





      {/* Product Video Section */}
<section className="py-8 sm:py-8 lg:py-20 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 relative">
  <motion.div 
    className="absolute inset-0 opacity-30"
    style={{ y: backgroundY }}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
  </motion.div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="inline-block bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        See CAMPING GAS™ In Action
      </motion.div>
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Watch How Easy It Is To Use
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        See why thousands of outdoor enthusiasts choose our portable camp gas stove for their adventures
      </motion.p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {productVideos.map((video, index) => {
        const poster = productImages?.[index] || "/default-poster.jpg";
        const src = video || "/videos/default.mp4";

        if (!video) console.warn(`Missing video at index ${index}`);

        return (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900 transition-all duration-500 group-hover:shadow-3xl">
              {/* Video with working controls */}
              <video
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                poster={poster}
                controls
                autoPlay
                muted
                playsInline
                loop
              >
                <source src={src} type="video/mp4" />
               
              </video>

              {/* Transparent overlay – now non-blocking */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/20 transition-all duration-500 pointer-events-none"></div>

              {/* LIVE badge animation */}
              <motion.div 
                className="absolute top-4 left-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  LIVE VIDEO
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>


  <div className="mt-8 flex justify-center">
  <motion.a
    href="#packages"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600"
  >
     YES! I'M INTERESTED NOW!
  </motion.a>
</div>
</section>


      {/* Product Images Gallery */}
      <section className="py-8 sm:py-16 lg:py-8 bg-gradient-to-br from-emerald-50 to-teal-100 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16,185,129,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5,150,105,0.1) 0%, transparent 50%)`
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-emerald-100 to-green-200 text-green-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              Portable Camping Gas Stove Gallery
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Every Detail Matters
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  zIndex: 10
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <motion.img
                    src={image}
                    alt={`Camp Gas Stove Detail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.15 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-sm font-semibold">Professional Quality</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6 sm:py-10 lg:py-10 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-100 relative">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "radial-gradient(circle at 0% 0%, rgba(249,115,22,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(249,115,22,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(249,115,22,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-orange-100 to-amber-200 text-orange-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Why Choose Our Camping Gas Stove
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              You Can't Be Disappointed On Your Outdoor Trip!
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >With our reliable and efficient gas cylinders, you'll never have to worry about running out of power again.
Our Camp Gas is here to save the day!
            </motion.p>
          </motion.div>

          <motion.div 
  className="flex flex-wrap justify-center gap-6 sm:gap-8"
  variants={staggerContainer}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.2 }}
>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 shadow-lg bg-white rounded-2xl overflow-hidden relative"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  rotateY: 5
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="p-6 sm:p-8 text-center relative z-10">
                  <motion.div 
                    className="text-orange-500 mb-4 sm:mb-6 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      color: "#f97316"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 flex justify-center">
  <motion.a
    href="#packages"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600"
  >
     YES! I'M INTERESTED NOW!
  </motion.a>
</div>
        </div>
      </section>


{/* Second Product Image section */}
<section ref={imageSectionRef} className="py-8 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
      Say Goodbye to unfinished cooking 🔥 our reliable camping gas stoves, designed to keep you cooking no matter the situation.
    </span>
    <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
     Never Let Gas Shortages Ruin Your Meals!
    </h2>
    <p className="max-w-2xl mx-auto text-gray-500 mb-10">
     
Easy to use, safe, and efficient, you can cook your favorite meals anywhere, anytime. Don't let gas worries hold you back - get your camping gas stove today!

    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  {[campground, campfry].map((img, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={imageControls}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative rounded-lg overflow-hidden shadow-lg group"
    >
      <motion.img
        src={img}
        alt={`Product view ${index + 1}`}
        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
        whileHover={{ scale: 1.05 }}
      />
    </motion.div>
      ))}
    </div>
  
  </div>

  
     {/* Order Now Button */}
  <div className="mt-6 flex justify-center">
  <motion.a
    href="#packages"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600"
  >
     YES! I'M INTERESTED NOW!
  </motion.a>
</div>
</section>





      {/* Trust Indicators */}
      <section className="py-6 sm:py-6 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear"
          }}
          style={{
            backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: "86+", label: "Happy Customers This Week", color: "text-green-400", icon: "🎯" },
              { value: "100", label: "Units Imported", color: "text-blue-400", icon: "📦" },
              { value: "24hrs", label: "Fast Delivery", color: "text-yellow-400", icon: "⚡" },
              { value: "14", label: "Units Left", color: "text-red-400", icon: "🔥" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="space-y-1 sm:space-y-2 transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-white/10"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-2xl mb-2"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className={`text-2xl sm:text-3xl font-bold ${stat.color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-10 lg:py-10 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear"
          }}
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, rgba(249,115,22,0.1) 0deg, transparent 90deg, rgba(239,68,68,0.1) 180deg, transparent 270deg)`
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Customer Reviews
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Happy Customers Reviews
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join thousands of satisfied customers across Nigeria who trust our products
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="px-2 sm:px-4"
                >
                  <motion.div 
                    className="bg-white shadow-2xl rounded-2xl overflow-hidden hover:shadow-3xl transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="p-6 sm:p-8 lg:p-12 text-center">
                      <motion.div 
                        className="flex justify-center mb-4 sm:mb-6"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                          >
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current mx-0.5" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <motion.blockquote 
                        className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 italic leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        "{testimonials[currentTestimonial].text}"
                      </motion.blockquote>
                      <motion.div 
                        className="flex items-center justify-center space-x-3 sm:space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <motion.img
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-orange-200"
                          whileHover={{ scale: 1.1 }}
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 flex items-center">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            {testimonials[currentTestimonial].location}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial dots */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{ 
                    scale: index === currentTestimonial ? 1.3 : 1
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


{/* ATTENTION PLEASE! */}
      <section>

        <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div 
              className="max-w-2xl mx-auto border-red-200 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center mb-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock className="h-4 w-4 mr-2 text-red-600" />
                </motion.div>
                <span className="text-red-800 font-xl text-4xl">
                  <strong>ATTENTION PLEASE:</strong>
                </span>
              </div>
              <p className="text-red-800 text-sm sm:text-base">
                We are charged for every order that you place. <br />
                If you CANNOT receive your order within 1-2 working days, please DO NOT place an order. <br />
                {/* If you will be TRAVELING and will not be available DO NOT place an order. <br /> */}
                We will contact you immediately and start processing your order. <br />Thanks for  your understanding!
              </p>

              <div className="mt-10 flex justify-center">
  <motion.a
    href="#packages"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-red-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-transform duration-300 hover:bg-green-600"
  >
     YES! I'M INTERESTED NOW!
  </motion.a>
</div>
            </motion.div>
          </motion.div>
          
      </section>

      {/* PACKAGE SELECTION */}
      <section id="packages" className="py-2 sm:py-2 lg:py-2 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(239,68,68,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)`
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-red-100 to-rose-200 text-red-800 px-6 py-3 rounded-full text-3xl font-bold mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Choose Your Package
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Select Your Perfect Package
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              All packages include free delivery nationwide
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`relative overflow-hidden transition-all duration-500 rounded-2xl shadow-lg cursor-pointer ${
                  pkg.popular
                    ? 'ring-4 ring-orange-500 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50'
                    : 'hover:shadow-xl bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-100'
                } ${selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: pkg.popular ? 0 : 3
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {pkg.popular && (
                  <motion.div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                    animate={{ 
                      y: [-2, 2, -2],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 sm:px-3 py-1 rounded-full font-semibold shadow-md text-[10px] sm:text-xs">
                      🎯 MOST POPULAR
                    </div>
                  </motion.div>
                )}

                <div className="text-center pt-6 sm:pt-8 px-6">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-1 tracking-widetext-3xl sm:text-4xl font-extrabold text-red-600 text-center mb-2 tracking-wider drop-shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {pkg.name}
                  </motion.h3>
                  <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 text-center">{pkg.subtitle}</p>



                   {/* Product Image */}
  <motion.img 
    src={pkg.image} 
    alt={pkg.name} 
    className="w-full max-w-[220px] h-auto object-contain mx-auto mb-4 rounded-xl shadow-lg"
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.3 }}
  />




                  <div className="py-4 sm:py-6">
                    <motion.div 
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      ₦{pkg.price}
                    </motion.div>
                    <div className="text-base sm:text-lg text-gray-500 line-through mb-2">₦{pkg.originalPrice}</div>
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full inline-block shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      Save ₦{pkg.savings}
                    </motion.div>
                  </div>
                </div>

                <div className="px-4 sm:px-6 pb-6 sm:pb-8">
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {pkg.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-sm sm:text-base text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full transition-all duration-300 relative overflow-hidden ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg'
                        : 'bg-gradient-to-r from-gray-900 to-slate-800 hover:from-gray-800 hover:to-slate-700 text-white'
                    }`}
                    onClick={() => {
                      setOrderForm({...orderForm, package: pkg.id});
                      document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      I  Want  This  Package
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </span>
                  </motion.button>

                  <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                    ORDER BEFORE 11:59pm AND Get Free DELIVERY
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
        </div>
      </section>
      

      {/* Order Form */}
      <section id="order-form" className="py-18 sm:py-12 lg:py-12 bg-gradient-to-br from-gray-100 via-slate-100 to-stone-200 relative">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear"
          }}
          style={{
            backgroundImage: `conic-gradient(from 0deg at 30% 70%, rgba(239,68,68,0.1) 0deg, transparent 120deg, rgba(16,185,129,0.1) 240deg, transparent 360deg)`
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
               className= "bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white p-6 sm:p-8 text-center relative overflow-hidden" 



                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 relative z-10">PLACE ORDER YOUR BELOW...</h2>
                <p className="text-base sm:text-lg opacity-90 relative z-10">Fill the form below to complete your order</p>
              </motion.div>

              <motion.div 
                className="p-6 sm:p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <form onSubmit={handleOrderSubmit} className="space-y-6">
                  <motion.div 
                    className="grid sm:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        YOUR FULL NAME *
                      </label>
                      <motion.input
                        type="text"
                        required
                        value={orderForm.fullName}
                        onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
                        placeholder=""
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        YOUR PHONE NUMBER(S) *
                      </label>
                      <motion.input
                        type="tel"
                        required
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
                        placeholder=""
                        whileFocus={{ scale: 1.02 }}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        IF YOU HAVE MORE THAN 1 NUMBER THEN SEPERATE WITH COMMA(,).
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      ALTERNATIVE/WHATSAPP PHONE NUMBER
                    </label>
                    <motion.input
                      type="tel"
                      value={orderForm.whatsappPhone}
                      onChange={(e) => setOrderForm({...orderForm, whatsappPhone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
                      placeholder=""
                      whileFocus={{ scale: 1.02 }}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      NUMBER WE CAN REACH ON WHATSAPP. THIS CAN BE YOUR WIFE'S, HUSBAND OR ANYBODY CLOSE TO YOU.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      FULL DELIVERY ADDRESS *
                    </label>
                    <motion.input
                      type="text"
                      required
                      value={orderForm.address}
                      onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
                      placeholder=""
                      whileFocus={{ scale: 1.02 }}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        PLEASE INDICATE ANY POPULAR LANDMARK.
                      </p>
                  </motion.div>

                  <motion.div 
                    className="grid sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        CITY *
                      </label>
                      <motion.input
                        type="text"
                        required
                        value={orderForm.city}
                        onChange={(e) => setOrderForm({...orderForm, city: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
                        placeholder=""
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                        STATE *
                      </label>
                      <motion.input
                        type="text"
                        required
                        value={orderForm.state}
                        onChange={(e) => setOrderForm({...orderForm, state: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-all duration-300 hover:border-gray-400"
                        placeholder=""
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      KINDLY SELECT YOUR DESIRED PACKAGE *
                    </label>
                    <div className="space-y-3">
                      {packages.map((pkg) => (
                        <motion.label 
                          key={pkg.id} 
                          className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-transparent hover:border-red-200 hover:bg-red-50 transition-all duration-300"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          <input
                            type="radio"
                            name="package"
                            value={pkg.id}
                            checked={orderForm.package === pkg.id}
                            onChange={(e) => setOrderForm({...orderForm, package: e.target.value})}
                            className="mr-3 text-red-500 focus:ring-red-500 w-4 h-4"
                          />
                          <span className="text-gray-700 font-medium">
                            1 Camping Gas, {pkg.id === 'regular' ? '1' : pkg.id === 'silver' ? '2' : '3'} Cylinder = ₦{pkg.price}
                            {pkg.popular && ' (Popular Choice)'}
                            {pkg.id === 'family' && ' (Highly Recommended Family)'}
                          </span>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-2 uppercase">
                      ARE YOU AVAILABLE TO RECEIVE YOUR ORDER WITHIN 24-48HRS? *
                    </label>
                    <div className="space-y-2">
                      <motion.label 
                        className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-transparent hover:border-green-200 hover:bg-green-50 transition-all duration-300"
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <input
                          type="radio"
                          name="availability"
                          value="yes"
                          className="mr-3 text-red-500 focus:ring-red-500 w-4 h-4"
                          required
                        />
                        <span className="text-gray-700 font-medium">YES</span>
                      </motion.label>
                      <motion.label 
                        className="flex items-center cursor-pointer p-3 rounded-lg border-2 border-transparent hover:border-red-200 hover:bg-red-50 transition-all duration-300"
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <input
                          type="radio"
                          name="availability"
                          value="no"
                          className="mr-3 text-red-500 focus:ring-red-500 w-4 h-4"
                          required
                        />
                        <span className="text-gray-700 font-medium">NO</span>
                      </motion.label>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="border-t pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-gray-50 to-slate-100 p-6 rounded-lg mb-6 shadow-inner"
                      whileHover={{ scale: 1.01 }}
                    >
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

                    </motion.div>
<motion.button
  type="submit"
  disabled={loading} // ✅ prevent multiple clicks
  className={`w-full transition-transform duration-300 text-white py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-lg shadow-lg uppercase relative overflow-hidden
    ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
  whileHover={!loading ? { scale: 1.02 } : {}}
  whileTap={!loading ? { scale: 0.98 } : {}}
>
  <motion.span
    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
    initial={{ x: "-100%" }}
    whileHover={!loading ? { x: "100%" } : {}}
    transition={{ duration: 0.8 }}
  />

  {/* ✅ Change text dynamically */}
  <span className="relative z-10">
    {loading ? "Processing..." : "Click Here To Order"}
  </span>
</motion.button>

                    {/* <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                      By clicking the button above, you'll be redirected to our thank you page
                    </p> */}
                  </motion.div>


                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      

      
{/* Sticky Order Button - Mobile */}
<AnimatePresence>
  {showStickyOrder && (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 p-4 bg-black shadow-2xl border-t z-50 lg:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button 
        onClick={scrollToPackages}
        className="w-full bg-red-600 transition-transform duration-300 hover:bg-green-700  text-white py-4 text-lg font-semibold shadow-lg rounded-lg relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10 flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          YES! I'M INTERESTED NOW!
        </span>
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>

{/* Sticky Order Button - Desktop */}
<AnimatePresence>
  {showStickyOrder && (
    <motion.button
      onClick={scrollToPackages}
      className="hidden lg:flex fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg z-50"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: [0, -5, 0], opacity: 1 }}
      transition={{ 
        duration: 1, 
        y: { repeat: Infinity, repeatDelay: 3, duration: 0.6, ease: "easeInOut" } 
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      YES! I'M INTERESTED NOW!
    </motion.button>
  )}
</AnimatePresence>


      {/* WhatsApp Button */}
      <motion.div 
        className="fixed right-4 bottom-20 sm:bottom-4 z-50  lg:hidden"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 hover:animate-none flex items-center justify-center"
              aria-label="Contact us on WhatsApp"
            >
              <a href=""></a>
             <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            </a>
            </motion.div>





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


      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-8">NEED SOME HELP?</h2>

          <div className="mb-8">
            <p className="text-lg mb-4">CALL OUR CUSTOMER CARE LINE</p>
            <a
              href="tel:+2348114580792"
              className="text-4xl font-bold text-white hover:text-orange-400 transition-colors duration-200"
            >
              +234 811 458 0792
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <a
    href="https://api.whatsapp.com/send?phone=+2348114580792&text=Hi,%20I%20want%20to%20buy%20CAMPING%20GAS%20STOVE"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 flex items-center justify-center"
  >
    <FaWhatsapp className="w-5 h-5 mr-2" />
    Chat Us On WhatsApp
  </a>
</div>


          <div className="space-y-4 text-lg">
            <p><strong>Delivery Time:</strong> Within 1-3 Days.</p>
            <p>You will receive a confirmation SMS/CALL from our customer care after you place your order.</p>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Order Before Timer Stops & Get Free Shipping
          </p>
          
          <p className="text-center text-sm text-gray-600 mt-4 flex justify-center items-center gap-1">
  <Home className="w-4 h-4 text-white" />
  <a href="/products" className="underline text-white hover:text-blue-600 ml-1">
    Back to Our Products Page
  </a>
</p>

        </div>
      </section>



      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            This Site Is Not A Part Of The Facebook Website Or Facebook Inc.
            Additionally, This Site Is NOT Endorsed By Facebook In Any Way.
            FACEBOOK Is A Trademark Of FACEBOOK, Inc.
          </p>
          <p className="text-xs text-center text-gray-500 mt-6">
            <a href="/privacy-policy" className="underline hover:text-blue-500">Privacy Policy</a> • 
            <a href="/terms" className="underline hover:text-blue-500 ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
