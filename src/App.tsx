import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import JobSearch from './pages/JobSearch';
import ResumeBuilder from './pages/ResumeBuilder';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/jobs" element={<JobSearch />} />
              <Route path="/resume" element={<ResumeBuilder />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;