import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);
  
  const login = async (email: string, password: string) => {
    // In a real app, this would call an API endpoint
    // For demo purposes, we'll simulate a successful login
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, we'll accept any login
    const mockUser = {
      id: '1',
      name: email.split('@')[0],
      email
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    toast.success('Logged in successfully!');
    navigate('/dashboard');
  };
  
  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would call an API endpoint
    // For demo purposes, we'll simulate a successful registration
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = {
      id: '1',
      name,
      email
    };
    
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    toast.success('Account created successfully!');
    navigate('/dashboard');
  };
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};