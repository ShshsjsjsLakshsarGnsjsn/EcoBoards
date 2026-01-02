
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ToolsSection from './components/ToolsSection';
import ProductShowcase from './components/ProductShowcase';
import ComparisonSection from './components/ComparisonSection';
import ProfessionalAdvice from './components/ProfessionalAdvice';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow pt-24 lg:pt-32">
        <Hero />
        
        <section id="inspiration" className="bg-white">
          <Categories />
        </section>

        <section id="shop" className="py-10 lg:py-16 bg-slate-50">
          <ProductShowcase />
        </section>

        <section id="services" className="py-10 lg:py-16 bg-white border-b border-slate-50">
          <ProfessionalAdvice />
        </section>

        <section className="py-10 lg:py-16 bg-slate-50">
          <ComparisonSection />
        </section>

        <section id="tools" className="py-10 lg:py-16 bg-white">
          <ToolsSection />
        </section>

        <section id="blog" className="py-10 lg:py-16 bg-slate-50">
          <BlogSection />
        </section>

        <section id="testimonials" className="py-10 lg:py-16 bg-white">
          <Testimonials />
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;
