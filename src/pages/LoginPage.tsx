import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isLoading, error } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Get the redirect path from location state or default to homepage
  const from = location.state?.from?.pathname || '/';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(formData.email, formData.password);
      navigate(from, { replace: true });
    } catch (err) {
      // Error is handled by the auth context
    }
  };
  
  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container-custom max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-primary p-6 text-white text-center">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-gray-200 mt-1">Sign in to your MYOREVA account</p>
          </div>
          
          <div className="p-6 md:p-8">
            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-secondary hover:text-primary">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
              
              <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-secondary hover:text-primary font-medium">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;