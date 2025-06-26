import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have questions about our products or need assistance? We're here to help!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
            icon: <Phone className="text-primary" size={28} />,
            title: 'Phone & WhatsApp',
            details: (
              <>
                <a href="tel:+2348114580792" className="hover:text-secondary block">+234 811 458 0792</a>
                <a href="https://wa.me/2348114580792" className="hover:text-secondary block">WhatsApp Support</a>
              </>
            )
          }, {
            icon: <Mail className="text-primary" size={28} />,
            title: 'Email Us',
            details: (
              <>
                {/* <a href="mailto:info@myoreva.com" className="hover:text-secondary block">info@myoreva.com</a> */}
                <a href="mailto:support@myoreva.com" className="hover:text-secondary block">support@myoreva.com</a>
              </>
            )
          },

          {
            icon: <MapPin className="text-primary" size={28} />,
            title: 'Our Location',
            details: 'Ibadan, Oyo State\nNigeria'
          }, 
        
        ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 text-center"
            >
              <div className="mb-4 bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">{item.details}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" className="input-field mb-4" />
              <input type="email" placeholder="Your Email" className="input-field mb-4" />
              <input type="text" placeholder="Subject" className="input-field mb-4" />
              <textarea placeholder="Your Message" rows={5} className="input-field resize-none mb-6"></textarea>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </motion.div>

          {/* Hours & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex items-start mb-4">
                <Clock className="text-primary mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between"><span className="text-gray-600">Mon - Fri:</span><span className="font-medium">8:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span className="text-gray-600">Saturday:</span><span className="font-medium">10:00 AM - 4:00 PM</span></li>
                    
                  </ul>
                </div>
              </div>
            </div>

            {/* GOOGLE MAP */}

            {/* <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">Find Us</h3>
              <div className="rounded-lg overflow-hidden h-80 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-gray-600">Google Maps Embed Coming Soon<br />Ibadan, Oyo State</p>
                </div>
              </div>
            </div> */}

          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary rounded-xl shadow-md p-8 text-white"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-200 mb-6">
              Subscribe to our newsletter for updates on new products, wellness tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none"
                required
              />
              <button type="submit" className="btn bg-secondary text-white hover:bg-secondary/90 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
