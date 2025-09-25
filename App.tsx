import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, AnimatedBackground } from './components/index';
import { HomePage, AboutPage, ServicesProductsPage, ServiceDetailPage, ContactPage } from './pages/index';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className={`bg-white text-black min-h-screen`}>
      <AnimatedBackground />
      <HashRouter>
        <ScrollToTop />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services-products" element={<ServicesProductsPage />} />
            <Route path="/item/:itemId" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;