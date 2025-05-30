import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { User, Package, Heart, LogOut, Settings, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: { pathname: '/profile' } }} />;
  }
  
  const handleLogout = () => {
    logout();
  };
  
  return (
    <div className="bg-background py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="p-6 bg-primary text-white">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <User size={32} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">{user?.name}</h2>
                    <p className="text-gray-200 text-sm">{user?.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'orders'
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Package size={18} className="mr-3" />
                      My Orders
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('wishlist')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'wishlist'
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Heart size={18} className="mr-3" />
                      Wishlist
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('payments')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'payments'
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <CreditCard size={18} className="mr-3" />
                      Payment Methods
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                        activeTab === 'settings'
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Settings size={18} className="mr-3" />
                      Account Settings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 rounded-md flex items-center text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={18} className="mr-3" />
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold">My Orders</h2>
                  </div>
                  
                  <div className="p-6">
                    {/* Empty state for orders */}
                    <div className="text-center py-8">
                      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Package size={24} className="text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-gray-600 mb-6">
                        You haven't placed any orders yet. Start shopping to see your orders here.
                      </p>
                      <Link to="/products" className="btn btn-primary">
                        Start Shopping
                      </Link>
                    </div>
                    
                    {/* This would be a list of orders in a real application */}
                    {/* <ul className="divide-y divide-gray-100">
                      <li className="py-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Order #123456</p>
                            <p className="text-sm text-gray-600">Placed on March 15, 2025</p>
                            <p className="text-sm text-green-600 mt-1">Delivered</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₦15,000.00</p>
                            <button className="text-sm text-secondary mt-1">View Details</button>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                  </div>
                </div>
              )}
              
              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold">My Wishlist</h2>
                  </div>
                  
                  <div className="p-6">
                    {/* Empty state for wishlist */}
                    <div className="text-center py-8">
                      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Heart size={24} className="text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
                      <p className="text-gray-600 mb-6">
                        Save your favorite products to your wishlist for quick access later.
                      </p>
                      <Link to="/products" className="btn btn-primary">
                        Explore Products
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Payment Methods Tab */}
              {activeTab === 'payments' && (
                <div>
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold">Payment Methods</h2>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      Manage your saved payment methods for faster checkout.
                    </p>
                    
                    {/* Empty state for payment methods */}
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-gray-100 p-2 rounded mr-3">
                            <CreditCard size={20} className="text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">No payment methods saved</p>
                            <p className="text-sm text-gray-600">
                              Add a payment method for faster checkout
                            </p>
                          </div>
                        </div>
                        <button className="btn btn-outline btn-sm">Add New</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold">Account Settings</h2>
                  </div>
                  
                  <div className="p-6">
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            defaultValue={user?.name.split(' ')[0]}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            defaultValue={user?.name.split(' ')[1] || ''}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="input-field"
                          defaultValue={user?.email}
                          readOnly
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Your email address cannot be changed
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="input-field"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <h3 className="font-semibold mb-4 pb-2 border-b border-gray-100">
                        Default Address
                      </h3>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter your address"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            State
                          </label>
                          <select className="input-field">
                            <option value="">Select a state</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Abuja">Abuja FCT</option>
                            <option value="Rivers">Rivers</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            className="input-field"
                            placeholder="Postal code"
                          />
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mb-4 pb-2 border-b border-gray-100">
                        Password
                      </h3>
                      
                      <div className="mb-6">
                        <button type="button" className="btn btn-outline">
                          Change Password
                        </button>
                      </div>
                      
                      <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;