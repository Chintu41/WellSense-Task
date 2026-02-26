import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute, TrainerRoute } from './components/Protection';

// Lazy load service components
const Diagnostics = lazy(() => import('./components/Diagnostics'));
const Ecommerce = lazy(() => import('./components/Ecommerce'));
const CloudKitchen = lazy(() => import('./components/CloudKitchen'));
const LMS = lazy(() => import('./components/LMS'));
const FitSense = lazy(() => import('./components/FitSense'));

// Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));

// Dashboards
const UserDashboard = lazy(() => import('./pages/dashboard/UserDashboard'));
const TrainerDashboard = lazy(() => import('./pages/dashboard/TrainerDashboard'));

// Component for loading state
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router basename="/WellSense-Task">
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar />
          <main className="overflow-x-hidden pt-20 lg:pt-0"> {/* Adjust for fixed navbar height */}
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Dashboard Routes */}
                <Route path="/dashboard/user" element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                } />
                <Route path="/dashboard/trainer" element={
                  <PrivateRoute>
                    <TrainerRoute>
                      <TrainerDashboard />
                    </TrainerRoute>
                  </PrivateRoute>
                } />

                <Route path="/services/diagnostics" element={<Diagnostics />} />
                <Route path="/services/ecommerce" element={<Ecommerce />} />
                <Route path="/services/cloud-kitchen" element={<CloudKitchen />} />
                <Route path="/services/lms" element={<LMS />} />
                <Route path="/services/fitsense" element={<FitSense />} />
                {/* Fallback to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
          <StickyCTA />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
