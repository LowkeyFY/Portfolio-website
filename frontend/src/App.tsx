import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignWork from './components/DesignWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import RouteTracker from './components/RouteTracker';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function HomePage() {
  return (
    <>
      <Navbar />
      <FadeIn><Hero /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><DesignWork /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <RouteTracker />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-body">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}
