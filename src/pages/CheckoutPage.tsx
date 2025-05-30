import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: 'Oyo',
    zipCode: '',
    deliveryMethod: 'standard',
    paymentMethod: 'paystack'
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Calculate shipping cost - free over ₦5000 or for local pickup
  const shippingCost = formData.deliveryMethod === 'pickup' ? 0 : 
                        (totalPrice > 5000 ? 0 : 1500);
  const grandTotal = totalPrice + shippingCost;
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    
    if (formData.deliveryMethod !== 'pickup') {
      if (!formData.address.trim()) errors.address = 'Address is required';
      if (!formData.city.trim()) errors.city = 'City is required';
      if (!formData.state.trim()) errors.state = 'State is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Order successful
      setOrderComplete(true);
      clearCart();
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was a problem processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (cartItems.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }
  
  if (orderComplete) {
    return (
      <div className="bg-background py-16">
        <div className="container-custom max-w-lg mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mb-6 text-green-500 flex justify-center">
              <CheckCircle size={64} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. We've received your order and will process it as soon as possible.
              You will receive a confirmation email shortly.
            </p>
            <div className="mt-8">
              <Link to="/" className="btn btn-primary w-full mb-4">
                Return to Home
              </Link>
              <Link to="/products" className="text-primary hover:text-secondary font-medium">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-background py-8 md:py-12">
      <div className="container-custom">
        <div className="mb-6">
          <Link to="/cart" className="flex items-center text-gray-600 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Cart
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`input-field ${formErrors.firstName ? 'border-red-500' : ''}`}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`input-field ${formErrors.lastName ? 'border-red-500' : ''}`}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
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
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input-field ${formErrors.phone ? 'border-red-500' : ''}`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold">Delivery Method</h2>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-start mb-4">
                      <input
                        type="radio"
                        id="delivery-standard"
                        name="deliveryMethod"
                        value="standard"
                        checked={formData.deliveryMethod === 'standard'}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="delivery-standard" className="text-sm">
                        <span className="font-medium block">Standard Delivery</span>
                        <span className="text-gray-600">
                          {totalPrice > 5000 ? 'Free' : '₦1,500'} - Estimated delivery in 3-5 business days
                        </span>
                      </label>
                    </div>
                    <div className="flex items-start mb-4">
                      <input
                        type="radio"
                        id="delivery-express"
                        name="deliveryMethod"
                        value="express"
                        checked={formData.deliveryMethod === 'express'}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="delivery-express" className="text-sm">
                        <span className="font-medium block">Express Delivery</span>
                        <span className="text-gray-600">
                          ₦2,500 - Estimated delivery in 1-2 business days
                        </span>
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="radio"
                        id="delivery-pickup"
                        name="deliveryMethod"
                        value="pickup"
                        checked={formData.deliveryMethod === 'pickup'}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="delivery-pickup" className="text-sm">
                        <span className="font-medium block">Store Pickup (Ibadan)</span>
                        <span className="text-gray-600">
                          Free - Pick up your order from our Ibadan location
                        </span>
                      </label>
                    </div>
                  </div>
                  
                  {formData.deliveryMethod !== 'pickup' && (
                    <div className="mt-6">
                      <h3 className="font-medium mb-4">Shipping Address</h3>
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address*
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`input-field ${formErrors.address ? 'border-red-500' : ''}`}
                        />
                        {formErrors.address && (
                          <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>
                        )}
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City*
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`input-field ${formErrors.city ? 'border-red-500' : ''}`}
                          />
                          {formErrors.city && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                            State*
                          </label>
                          <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className={`input-field ${formErrors.state ? 'border-red-500' : ''}`}
                          >
                            <option value="Oyo">Oyo</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Abuja FCT">Abuja FCT</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Other">Other</option>
                          </select>
                          {formErrors.state && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.state}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          Postal/ZIP Code (Optional)
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-start mb-4">
                      <input
                        type="radio"
                        id="payment-paystack"
                        name="paymentMethod"
                        value="paystack"
                        checked={formData.paymentMethod === 'paystack'}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="payment-paystack" className="text-sm">
                        <span className="font-medium block">Paystack</span>
                        <span className="text-gray-600">
                          Pay securely with your debit/credit card
                        </span>
                      </label>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <input
                        type="radio"
                        id="payment-flutterwave"
                        name="paymentMethod"
                        value="flutterwave"
                        checked={formData.paymentMethod === 'flutterwave'}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="payment-flutterwave" className="text-sm">
                        <span className="font-medium block">Flutterwave</span>
                        <span className="text-gray-600">
                          Pay with Flutterwave - supports multiple payment options
                        </span>
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="radio"
                        id="payment-transfer"
                        name="paymentMethod"
                        value="transfer"
                        checked={formData.paymentMethod === 'transfer'}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="payment-transfer" className="text-sm">
                        <span className="font-medium block">Bank Transfer</span>
                        <span className="text-gray-600">
                          Pay via bank transfer - instructions will be sent via email
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:hidden mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shippingCost === 0 ? 'Free' : `₦${shippingCost.toLocaleString()}`}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>₦{grandTotal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full md:w-auto md:px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Complete Order'}
              </button>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="hidden md:block">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <ul className="divide-y divide-gray-100 mb-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-3 flex justify-between">
                      <div className="flex">
                        <div className="w-12 h-12 rounded overflow-hidden mr-3">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₦{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `₦${shippingCost.toLocaleString()}`}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₦{grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;