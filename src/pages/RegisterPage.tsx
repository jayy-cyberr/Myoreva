import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, isLoading, error } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const checkPasswordStrength = (password: string) => {
    let score = 0;
    let message = '';
    
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    switch (score) {
      case 0:
      case 1:
        message = 'Weak';
        break;
      case 2:
        message = 'Fair';
        break;
      case 3:
        message = 'Good';
        break;
      case 4:
        message = 'Strong';
        break;
      default:
        message = '';
    }
    
    setPasswordStrength({ score, message });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'password') {
      checkPasswordStrength(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear specific error when field is updated
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
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.acceptTerms) {
      errors.acceptTerms = 'You must accept the terms and conditions';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      await register(
        `${formData.firstName} ${formData.lastName}`,
        formData.email,
        formData.password
      );
      navigate('/');
    } catch (err) {
      // Error is handled by the auth context
    }
  };
  
  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container-custom max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-primary p-6 text-white text-center">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p className="text-gray-200 mt-1">Join MYOREVA for a healthier lifestyle</p>
          </div>
          
          <div className="p-6 md:p-8">
            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`input-field pr-10 ${formErrors.password ? 'border-red-500' : ''}`}
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
                {formErrors.password ? (
                  <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                ) : formData.password && (
                  <div className="mt-1">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${
                            passwordStrength.score <= 1
                              ? 'bg-red-500'
                              : passwordStrength.score === 2
                              ? 'bg-yellow-500'
                              : passwordStrength.score === 3
                              ? 'bg-blue-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-gray-500">{passwordStrength.message}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`input-field ${formErrors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                </div>
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className={`h-4 w-4 mt-1 text-secondary focus:ring-secondary border-gray-300 rounded ${
                      formErrors.acceptTerms ? 'border-red-500' : ''
                    }`}
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-secondary hover:text-primary">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-secondary hover:text-primary">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {formErrors.acceptTerms && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.acceptTerms}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
              
              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-secondary hover:text-primary font-medium">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;