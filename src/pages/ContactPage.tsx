import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-background py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            Have questions about our products or need assistance? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Our Location</h3>
            <p className="text-gray-600">
              Bodija Market Area<br />
              Ibadan, Oyo State<br />
              Nigeria
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone & WhatsApp</h3>
            <p className="text-gray-600 mb-2">
              <a href="tel:+2348114580792" className="hover:text-secondary">+234 811 458 0792</a>
            </p>
            <p className="text-gray-600">
              <a href="https://wa.me/2348114580792" className="hover:text-secondary">WhatsApp Support</a>
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-2">
              <a href="mailto:info@myoreva.com" className="hover:text-secondary">info@myoreva.com</a>
            </p>
            <p className="text-gray-600">
              <a href="mailto:support@myoreva.com" className="hover:text-secondary">support@myoreva.com</a>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mb-4 bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Send className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for reaching out. We've received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${formErrors.name ? 'border-red-500' : ''}`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${formErrors.email ? 'border-red-500' : ''}`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input-field ${formErrors.subject ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.subject && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`input-field resize-none ${formErrors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          
          {/* Hours & Map */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex items-start mb-4">
                <Clock className="text-primary mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">Find Us</h3>
              <div className="rounded-lg overflow-hidden h-80 bg-gray-200">
                {/* This would be a Google Maps embed in a real implementation */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center p-4">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="text-gray-600">
                      Google Maps would be embedded here.<br />
                      Bodija Market Area, Ibadan, Oyo State
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept payments through Paystack, Flutterwave, bank transfers, and cash on delivery
                for orders within Ibadan.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">How long does shipping take?</h3>
              <p className="text-gray-600">
                Standard shipping within Nigeria takes 3-5 business days. Express shipping is available
                for 1-2 day delivery. Local delivery in Ibadan is same-day or next-day.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Currently, we only ship within Nigeria. We're working on expanding our shipping options
                to other African countries soon.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">What is your return policy?</h3>
              <p className="text-gray-600">
                We accept returns within 7 days of delivery if the product is unused and in its original
                packaging. Please contact our customer service for return instructions.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Are your products tested on animals?</h3>
              <p className="text-gray-600">
                No, we're proud to be a cruelty-free company. None of our products or ingredients are
                tested on animals.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Do you offer wholesale options?</h3>
              <p className="text-gray-600">
                Yes, we offer wholesale pricing for retailers. Please contact us at
                wholesale@myoreva.com for more information and pricing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="bg-primary rounded-xl shadow-md p-8 text-white">
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
        </div>
      </div>
    </div>
  );
};

export default ContactPage;