import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Calculate shipping cost - free over ₦5000
  const shippingCost = totalPrice > 5000 ? 0 : 1500;
  const grandTotal = totalPrice + shippingCost;

  return (
    <div className="bg-background py-8 md:py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold">
                    Cart Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                </div>

                <ul className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 sm:p-6"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="flex-shrink-0 w-full sm:w-20 h-20 mb-4 sm:mb-0 sm:mr-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <Link to={`/products/${item.id}`} className="font-medium text-gray-800 hover:text-secondary">
                            {item.name}
                          </Link>
                          <div className="text-gray-600 mt-1">₦{item.price.toLocaleString()} per item</div>
                        </div>
                        <div className="flex items-center mt-4 sm:mt-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-500 hover:text-gray-700"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-500 hover:text-gray-700"
                            aria-label="Increase quantity"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="font-semibold text-gray-800 mt-4 sm:mt-0 sm:ml-6 sm:text-right">
                          ₦{(item.price * item.quantity).toLocaleString()}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 block sm:inline-block mt-2 sm:mt-1 sm:ml-3"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <Link
                    to="/products"
                    className="text-primary hover:text-secondary font-medium flex items-center"
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₦{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shippingCost === 0 ? 'Free' : `₦${shippingCost.toLocaleString()}`}
                      </span>
                    </div>
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₦{grandTotal.toLocaleString()}</span>
                      </div>
                      <p className="text-green-600 text-sm mt-1">
                        {totalPrice < 5000 
                          ? `Add ₦${(5000 - totalPrice).toLocaleString()} more for free shipping!` 
                          : 'You qualified for free shipping!'}
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/checkout"
                    className="btn btn-primary w-full mt-6"
                  >
                    Proceed to Checkout
                  </Link>
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">We Accept</h3>
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-100 text-gray-800 p-2 rounded text-xs">Paystack</div>
                      <div className="bg-gray-100 text-gray-800 p-2 rounded text-xs">Flutterwave</div>
                      <div className="bg-gray-100 text-gray-800 p-2 rounded text-xs">Bank Transfer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;