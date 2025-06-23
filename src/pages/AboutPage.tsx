import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Add this line


const AboutPage: React.FC = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                MYOREVA was founded with a simple mission: to provide premium wellness products
                that combine the best of Nigerian traditional remedies with modern science.
              </p>
              <div className="flex items-center">
                <Leaf className="text-secondary mr-3" size={24} />
                <span className="text-xl font-medium">Wellness Redefined</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3865610/pexels-photo-3865610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Natural wellness products"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To improve the wellness of Nigerians by providing natural, effective, and affordable products
              that promote health, beauty, and a balanced lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Natural Ingredients</h3>
              <p className="text-gray-600">
                We source the finest natural ingredients, many grown locally in Nigeria,
                to create products that work in harmony with your body.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Assured</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure safety, efficacy,
                and the highest quality standards before reaching our customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-gray-600">
                We're committed to exceptional customer service and creating products
                that address the real wellness needs of our community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600">The story of how MYOREVA became Nigeria's trusted wellness brand</p>
            </div>

            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/3">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <h3 className="text-xl font-bold text-primary">2020</h3>
                    <p className="text-secondary font-medium">The Beginning</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-3">Founded in Ibadan</h4>
                  <p className="text-gray-600 mb-4">
                    MYOREVA was founded by a team of health enthusiasts and traditional medicine experts
                    who saw the potential to blend African wellness traditions with modern science.
                  </p>
                  <p className="text-gray-600">
                    We started with a small line of herbal teas and natural remedies, selling at local markets
                    and gaining a reputation for quality and effectiveness.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/3">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <h3 className="text-xl font-bold text-primary">2022</h3>
                    <p className="text-secondary font-medium">Expansion</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-3">Growing Our Reach</h4>
                  <p className="text-gray-600 mb-4">
                    As demand grew, we expanded our product line to include skincare, household items,
                    and more health products, all maintaining our commitment to natural ingredients.
                  </p>
                  <p className="text-gray-600">
                    We opened our first dedicated store in Ibadan and launched our online platform to
                    serve customers across Nigeria.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/3">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <h3 className="text-xl font-bold text-primary">2025</h3>
                    <p className="text-secondary font-medium">Today</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-3">Nigeria's Trusted Wellness Brand</h4>
                  <p className="text-gray-600 mb-4">
                    Today, MYOREVA is recognized across Nigeria as a leading provider of natural wellness products.
                  </p>
                  <p className="text-gray-600">
                    We continue to innovate and expand our offerings, staying true to our roots while embracing
                    new technologies and scientific advances to bring the best in wellness to our customers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals dedicated to bringing you the finest wellness products
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Oluwaseun Adeyemi</h3>
              <p className="text-secondary font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                A wellness advocate with over 15 years of experience in traditional medicine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Chioma Nwankwo</h3>
              <p className="text-secondary font-medium mb-2">Head of Research</p>
              <p className="text-gray-600">
                PhD in Pharmacognosy with expertise in medicinal plants and natural product development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Emeka Okonkwo</h3>
              <p className="text-secondary font-medium mb-2">Production Manager</p>
              <p className="text-gray-600">
                An expert in quality control and sustainable manufacturing practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Amina Bello</h3>
              <p className="text-secondary font-medium mb-2">Customer Experience</p>
              <p className="text-gray-600">
                Dedicated to ensuring every customer has an exceptional experience with our products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Values</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide everything we do at MYOREVA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Natural Excellence</h3>
              <p className="text-gray-200">
                We believe in the power of nature to heal and nourish. Our products harness natural
                ingredients, avoiding harsh chemicals and artificial additives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">African Heritage</h3>
              <p className="text-gray-200">
                We celebrate and preserve traditional African wellness knowledge, integrating it with
                modern science to create effective, innovative products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Community Impact</h3>
              <p className="text-gray-200">
                We're committed to supporting local communities through sustainable sourcing, fair trade
                practices, and community wellness initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Continuous Innovation</h3>
              <p className="text-gray-200">
                We're always exploring, learning, and improving to bring you the most effective wellness
                solutions that meet the evolving needs of our customers.
              </p>
            </motion.div>
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