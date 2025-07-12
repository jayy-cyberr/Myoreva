import { useState, useEffect } from "react";
import { CheckCircle, Star, Clock, Shield, Award, Truck, Lock, Zap, Home, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

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
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 58,
    seconds: 43,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    alternativePhone: "",
    address: "",
    city: "",
    state: "",
    package: "",
    comment: "",
  });

  const [showStickyButton, setShowStickyButton] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = "+2348114580792";
  const whatsappMessage = encodeURIComponent("Hi, I want to buy WART REMOVER");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowStickyButton(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call for form submission
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        // Redirect to thank you page
        navigate('/thank-you', { 
          state: { 
            orderData: formData,
            orderNumber: `WR${Date.now()}` 
          } 
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your order. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "REMOVES SKIN TAGS/WARTS, SCARS, ACNE, PIMPLES AND OTHER BLEMISHES",
    "PAIN-FREE REMOVAL",
    "NO SCARRING AFTER USE",
    "MADE FROM NATURAL INGREDIENTS",
    "SAFE FOR ALL SKIN TYPES",
    "REDUCES FRICTION AND IRRITATION ON SKIN TAGS",
    "RELIEVES SKIN DISCOMFORT FROM SKIN TAGS AND BLEMISHES",
    "PREVENTS SKIN TAGS AND BLEMISHES FROM TURNING INTO SKIN LESIONS"
  ];

  const causes = [
    "Friction: Skin rubbing against skin, clothing, or jewelry.",
    "Nutritional deficiencies: Lack of vitamin C, E, or zinc.",
    "Poor hygiene: Infrequent bathing or using harsh soaps.",
    "Diabetes: Insulin resistance and skin irritation.",
    "Aging: Weakened skin collagen and elastin.",
    "Genetics: Family history."
  ];

  const reviews = [
    {
      name: "Anonymous",
      review: "So far, the product has done a great job of removing skin tags and that's all I can ask for from it. Zero pain and very good results.",
      rating: 5
    },
    {
      name: "IkeChukwu Charles",
      review: "My wife has used it with great results and this time I plan to buy some for myself.",
      rating: 5
    },
    {
      name: "Dakylah Thomas",
      review: "This works great, but does need more than one application. Took three applications to get my wart completely gone. Very easy to use applicator! Would highly recommend and will buy again.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      review: "Amazing product! Removed my warts without any pain or scarring. Highly recommend to anyone struggling with skin tags.",
      rating: 5
    },
    {
      name: "Michael",
      review: "Fast and effective. I was skeptical at first but this really works. Will definitely order again to have the rest removed.",
      rating: 5
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const getAnimationClass = (sectionId: string) => {
    return visibleSections.has(sectionId) 
      ? 'opacity-100 transform translate-y-0 transition-all duration-1000 ease-out' 
      : 'opacity-0 transform translate-y-10';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 overflow-x-hidden">
      {/* Top Notification Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 text-center font-medium animate-pulse">
        ⚠️ PAYMENT ON DELIVERY + FREE DELIVERY!
      </div>

      {/* Hero Section - Reduced spacing and font sizes */}
      <section 
        id="hero"
        data-animate
        className={`px-4 py-4 pt-10 max-w-7xl mx-auto mx-4 mt-4 rounded-3xl shadow-2xl overflow-hidden relative ${getAnimationClass('hero')}`}
      >
        {/* Multi-layered welcoming background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/60"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-orange-100/40 to-transparent"></div>
        
        {/* Decorative elements - reduced sizes */}
        <div className="absolute top-8 left-8 w-48 h-48 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-64 h-64 bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-yellow-100/10 to-orange-100/10 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="relative z-10 text-center mb-6">
          

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight drop-shadow-lg">
            Finally, a fast, easy, and quick way to remove{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">skin tags, moles, and warts</span>{" "}
            without spending a huge amount of money on surgeries.
          </h1>


          {/* Enhanced Countdown Timer - Reduced size */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-3 rounded-xl text-center shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-xs font-semibold">Hours</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-3 rounded-xl text-center shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-xs font-semibold">Minutes</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white px-4 py-3 rounded-xl text-center shadow-xl transform hover:scale-105 transition-transform">
              <div className="text-xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-xs font-semibold">Seconds</div>
            </div>
          </div>


<div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Clock className="w-4 h-4 mr-2" />
            In Less Than 7-10 Days - Only Made For Those Who Care About Their Skin
          </div>

          <button
            onClick={scrollToOrder}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-xl font-bold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
          >
            🛒 ORDER NOW
          </button>


        </div>
      </section>



      {/* Product Introduction Section with scroll animation */}
      <section 
        id="intro"
        data-animate
        className={`bg-white py-16 px-4 ${getAnimationClass('intro')}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">INTRODUCING!!</h2>
            {/* <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
              Permanent Solution To All Kinds of Warts
            </h3> */}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={wartRemoverImg1}
                alt="HBESTY Wart Remover Product"
                className="w-full rounded-lg shadow-2xl object-cover"
              />
            </div>

            <div>
              <span className="bg-red-600 text-white mb-4 px-4 py-2 rounded-md text-sm font-semibold inline-block">Don't Miss This!!</span>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Effective Against:
                </h4>
                <ul className="space-y-2 text-green-700">
                  <li>- Stubborn Wart Tissues</li>
                  <li>- Corns & Calluses</li>
                  <li>- Skin Irritation</li>
                  <li>- Destroys Wart Virus</li>
                </ul>
                <div className="mt-4 flex items-center">
                  <Shield className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">100% Effective & Safe</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='32' fill='%2322c55e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='white' font-family='Arial, sans-serif' font-weight='bold'%3E100%25%3C/text%3E%3C/svg%3E"
                    alt="Guaranteed"
                    className="w-16 h-16 mr-4 rounded-full object-cover"
                  />
                  <span className="text-blue-800 font-bold">100% GUARANTEED!</span>
                </div>
              </div>

              <button
                onClick={scrollToOrder}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-bold rounded-lg transition-colors duration-200"
              >
                🛒 Order Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section 
        id="problem"
        data-animate
        className={`bg-blue-50 py-16 px-4 ${getAnimationClass('problem')}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">DEAR FRIENDS</h2>

          <div className="space-y-6 text-lg text-gray-700">
            <p className="transform hover:scale-105 transition-transform duration-300">Are you tired of using different creams, serums, and oil that promises heaven and earth only to find out that it doesn't work?</p>
            <p className="font-semibold text-blue-600 transform hover:scale-105 transition-transform duration-300">Has The Chase For A Better Product That Work Programmed You Like A Clock Work?</p>
            <p className="transform hover:scale-105 transition-transform duration-300">The Search Never Ends Even When You Have Exhausted Your Money, Time And Every Possible Means</p>
          </div>

          <div className="bg-red-100 border border-red-200 rounded-lg p-8 mt-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-red-600">BUT WAIT.......</h3>
            <p className="text-xl text-red-700 font-semibold">
              Why Spending Over ₦200,000 For Skin Surgery, When You Can Get A Perfect Result With Less Than ₦15,000?
            </p>
          </div>

          <div className="bg-green-100 border border-green-200 rounded-lg p-8 mt-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <p className="text-lg text-green-800">
              Here Is a Tested & Trusted Remedy That Has Helped over{" "}
              <span className="font-bold text-green-600">10,709 Nigerians</span>{" "}
              Make Incredible Transformations and Regain their original Skin Glow and Beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Image showcase with animations */}
      <div className="grid md:grid-cols-2 gap-12 items-center px-4 py-8 max-w-6xl mx-auto">
        <div className="transform hover:scale-105 transition-transform duration-500">
          <img
            src={result}
            alt="Result"
            className="w-full rounded-lg shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
          />
        </div>
        <div className="transform hover:scale-105 transition-transform duration-500">
          <img
            src={remova}
            alt="Skin Tag Removal"
            className="w-full rounded-lg shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
          />
        </div>
      </div>

      {/* Results Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            NO MORE SKIN TAGS/WARTS, SCARS, ACNE, PIMPLES AND OTHER BLEMISHES
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <img
                src={mygif}
                alt="Person using product"
                className="w-full rounded-lg shadow-lg mb-4 object-cover"
              />
            </div>
            <div className="text-center">
              <img
                src={moles}
                alt="Before and after comparison"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
      
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              SAY GOOD BYE TO WARTS WITH OUR HBESTY CREAM
            </h3>
            <img
              src={flyer2}
              alt="7 days results"
              className="mx-auto rounded-lg shadow-lg object-cover max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Image showcase with animations 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center px-4 py-8 max-w-6xl mx-auto">
        <div className="transform hover:scale-105 transition-transform duration-500">
          <img
            src={hbess}
            alt="Result"
            className="w-full rounded-lg shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
          />
        </div>
        <div className="transform hover:scale-105 transition-transform duration-500">
          <img
            src={nomorewart}
            alt="Skin Tag Removal"
            className="w-full rounded-lg shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
          />
        </div>
      </div>

      {/* Education Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            WHAT IS SKIN TAG/WART™
          </h2>

          <div className="bg-white shadow-lg rounded-lg">
            <div className="p-8">
              <p className="text-lg text-gray-700 text-center mb-8">
                SKIN TAG/WART Is The Swelling Or Puffiness Of The Skin Around The Eyes. It Is Characterized By The Accumulation Of Fluid Or Inflammation In The Tissues Surrounding The Skin, Giving Them A Swollen Appearance.
              </p>

              <div className="text-center mb-8">
                <img
                  src={beforeanda}
                  alt="Skin condition example"
                  className="mx-auto rounded-lg shadow-lg object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-red-600 text-center mb-6">
                CAUSES OF SKIN TAG/WART ?
              </h3>

              <div className="space-y-4">
                {causes.map((cause, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{cause}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={scrollToOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-colors duration-200"
            >
              🛒 Yes! I Want To Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">BENEFITS</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-green-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-colors duration-200"
            >
              🛒 Yes! I Want To Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section - Updated with sliding carousel for mobile */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
            SEE OUR HAPPY CUSTOMERS REVIEWS
          </h2>

          <div className="text-center mb-8">
            <img
              src={review}
              alt="Customer reviews"
              className="mx-auto rounded-lg shadow-lg object-cover max-w-2xl w-full"
            />
          </div>

          {/* Desktop View - Show all reviews in grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{review.review}"</p>
                  <p className="font-semibold text-gray-900">- {review.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Sliding carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white shadow-lg rounded-lg">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4">"{review.review}"</p>
                        <p className="font-semibold text-gray-900">- {review.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">DO YOU WANT FREE DELIVERY?</h2>
          <h3 className="text-2xl text-orange-300 mb-8">Take Advantage Of Our FREE Delivery Promo</h3>

          <div className="bg-white text-gray-900 rounded-lg p-8 mb-8">
            <img
              src={review3}
              alt="WhatsApp conversation"
              className="mx-auto rounded-lg shadow-lg object-cover max-w-xl w-full"
            />
          </div>
<p className="text-3x1 mb-8">
  <span className="text-orange-400 font-bold ">
    <strong>ATTENTION:</strong>
  </span>{' '}
  <span className="text-black-800 text-sm sm:text-base block mt-2">
    Note that we provide fast delivery but in rare cases some deliveries may take 1–2 working days.
    
  </span>
  <br />
  If you CANNOT receive your order within 1–2 working days, DO NOT place an order.
    We will contact you immediately and start processing your order.
</p>

          
        </div>
      </section>

      {/* Order Form Section with enhanced styling */}
      <section 
        id="order-section" 
        data-animate
        className={`bg-white py-16 px-4 ${getAnimationClass('order-section')}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
            KINDLY FILL THE FORM BELOW TO PLACE YOUR ORDER NOW!!!
          </h2>

          <div className="shadow-2xl rounded-lg bg-white">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-semibold text-gray-700 mb-2">YOUR FULL NAME *</label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-lg font-semibold text-gray-700 mb-2">YOUR PHONE NUMBER(S) *</label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="If you have more than 1 number then separate with comma(,)"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="alternativePhone" className="block text-lg font-semibold text-gray-700 mb-2">ALTERNATIVE/WHATSAPP PHONE NUMBER</label>
                  <input
                    id="alternativePhone"
                    type="tel"
                    value={formData.alternativePhone}
                    onChange={(e) => setFormData({...formData, alternativePhone: e.target.value})}
                    className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number we can reach on WhatsApp. This can be your wife's, husband or anybody close to you."
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-lg font-semibold text-gray-700 mb-2">FULL DELIVERY ADDRESS *</label>
                  <textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] resize-vertical"
                    placeholder="Please indicate any popular landmark"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-lg font-semibold text-gray-700 mb-2">CITY *</label>
                    <input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-lg font-semibold text-gray-700 mb-2">STATE *</label>
                    <input
                      id="state"
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="package" className="block text-lg font-semibold text-gray-700 mb-2">KINDLY SELECT YOUR DESIRED PACKAGE *</label>
                  <select
                    id="package"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                    className="w-full text-lg p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    required
                  >
                    <option value="">Select a package</option>
                    <option value="1-basic">1 Wart Remover = ₦13,500 (Basic) Regular</option>
                    <option value="2-popular">2 Wart Remover = ₦20,500 (Popular Choice)</option>
                    <option value="3-recommended">3 Wart Remover = ₦29,500 (Highly Recommended) Perfect!</option>
                  </select>
                </div>



                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-xl font-bold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '🔄 PROCESSING...' : '🛒 PLACE YOUR ORDER NOW'}
                </button>
              </form>
            </div>
          </div>
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
    href="https://api.whatsapp.com/send?phone=+2348114580792&text=Hi,%20I%20want%20to%20buy%20WART%20REMOVER"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg transition-colors duration-200 flex items-center justify-center"
  >
    <FaWhatsapp className="w-5 h-5 mr-2" />
    Chat Us On WhatsApp
  </a>
</div>


          <div className="space-y-4 text-lg">
            <p><strong>Delivery Time:</strong> Within 1-2 Days.</p>
            <p>You will receive a confirmation SMS/CALL from our customer care after you place your order.</p>
          </div>

          <div className="mt-8">
            <button
              onClick={scrollToOrder}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold rounded-lg transition-colors duration-200"
            >
              🛒 Yes! I Want To Buy Now
            </button>
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
            This Site Is Not A Part Of The Facebook Website Or Facebook Inc. Additionally, This Site Is NOT Endorsed By Facebook In Any Way. FACEBOOK Is A Trademark Of FACEBOOK, Inc.
          </p>
          
          <p className="text-xs text-center text-gray-500 mt-6">
  <a href="/privacy-policy" className="underline hover:text-blue-500">Privacy Policy</a> • 
  <a href="/terms" className="underline hover:text-blue-500 ml-2">Terms of Service</a>
</p>
        </div>
      </footer>

      {/* Floating Elements */}
      <>
        
        {/* Fixed WhatsApp Widget - Better mobile positioning */}
                <div className="fixed right-4 bottom-20 md:bottom-24 z-50">
          <div className="relative group">
            {/* WhatsApp tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
              
            </div>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none flex items-center justify-center"
              aria-label="Contact us on WhatsApp"
            >
              <a href=""></a>
             <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            </a>
          </div>
        </div>


        {/* Mobile Sticky Order Button - Updated positioning to avoid WhatsApp widget overlap */}
        {showStickyButton && (
          <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">Limited Time Offer!</p>
                <p className="text-xs text-gray-600">Only 25 left in stock</p>
              </div>
              <button
                onClick={scrollToOrder}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                🛒 ORDER NOW
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
