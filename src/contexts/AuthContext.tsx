import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for existing user session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('myoreva-user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (e) {
        localStorage.removeItem('myoreva-user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // This is a mockup of an API call
      // In a real application, this would be a fetch to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulated response (mock data)
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email
      };
      
      // Save to localStorage and update state
      localStorage.setItem('myoreva-user', JSON.stringify(mockUser));
      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulated successful registration
      const newUser = {
        id: Date.now(), // Generate a unique ID
        name,
        email
      };
      
      // Save to localStorage and update state
      localStorage.setItem('myoreva-user', JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Registration failed. Please try again later.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('myoreva-user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    isLoading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};