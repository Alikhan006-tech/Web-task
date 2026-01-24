import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading pages 
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component 
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white text-blue-600 font-bold tracking-widest uppercase animate-pulse">
    Loading Studio...
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white">
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* 404 Redirect to Home Page */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;