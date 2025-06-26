import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const missionItems = [
{
    icon: <Award className="text-secondary" size={32} />,
    title: "Quality Assured",
    description:
      "Every product undergoes rigorous testing to ensure safety, efficacy, and the highest quality standards before reaching our customers.",
  },

  {
    icon: <Leaf className="text-secondary" size={32} />,
    title: "Designed for Real Life",
    description:
      "Every MYOREVA product is created with care-made to support your everyday wellness in ways that feel natural, simple, and effective.",
  },
  
  {
    icon: <Heart className="text-secondary" size={32} />,
    title: "Customer First",
    description:
      "We're committed to exceptional customer service and creating products that address the real wellness needs of our community.",
  },
];

// Helper component for slide cards
const SlideCard = ({ icon, title, description }: any) => (
  <div className="bg-white rounded-xl p-8 shadow-sm text-center w-72 mx-auto md:mx-0">
    {icon && (
      <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
    )}
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutPage: React.FC = () => {
  // States for slides index
  const [missionIndex, setMissionIndex] = useState(0);

  // Mission handlers
  const missionNext = () =>
    setMissionIndex((prev) => (prev === missionItems.length - 1 ? 0 : prev + 1));
  const missionPrev = () =>
    setMissionIndex((prev) => (prev === 0 ? missionItems.length - 1 : prev - 1));

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                MYOREVA was founded with a simple mission: to provide premium wellness products that unite the finest remedies with modern science.
              </p>
              <div className="flex items-center">
                <Leaf className="text-secondary mr-3" size={24} />
                <span className="text-xl font-medium">Wellness Redefined</span>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3865610/pexels-photo-3865610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Natural wellness products"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "To enhance everyday wellness by offering natural, effective, high-quality, affordable and accessible products that support health, beauty, and a balanced lifestyle."
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {missionItems.map(({ icon, title, description }, i) => (
              <SlideCard
                key={i}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </div>

          {/* Mobile slides */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={missionIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <SlideCard {...missionItems[missionIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={missionPrev}
                aria-label="Previous Mission"
                className="btn btn-outline px-4"
              >
                Prev
              </button>
              <button
                onClick={missionNext}
                aria-label="Next Mission"
                className="btn btn-outline px-4"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Wellness Journey</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Discover the MYOREVA difference with our premium wellness products designed for your health and well-being.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products" className="btn btn-primary">
                    Shop Now
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="MYOREVA products"
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
