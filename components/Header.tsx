
import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-2 lg:py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-2 lg:gap-3 group shrink-0" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="relative w-10 h-10 lg:w-20 lg:h-20 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle */}
                <circle cx="100" cy="100" r="90" stroke="#4b7947" strokeWidth="4" />
                
                {/* Top Leaves */}
                <path d="M100 20 Q 50 20 50 70 Q 100 80 100 50 Z" fill="#8cc63f" />
                <path d="M100 20 Q 150 20 150 70 Q 100 80 100 50 Z" fill="#4b7947" />
                
                {/* Center Text */}
                <text x="100" y="115" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="42" fill="#4b7947">ECO</text>
                <text x="100" y="145" textAnchor="middle" fontFamily="sans-serif" fontWeight="500" fontSize="24" fill="#8cc63f" letterSpacing="3">BOARDS</text>

                {/* Bottom Leaves */}
                <path d="M95 185 Q 65 185 65 155 Q 95 145 95 160 Z" fill="#4b7947" />
                <path d="M105 185 Q 135 185 135 155 Q 105 145 105 160 Z" fill="#8cc63f" />
              </svg>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col justify-center h-full pt-1 pl-1">
              <span className="text-lg lg:text-xl font-black text-[#4b7947] leading-none tracking-tighter">ECOBOARDS</span>
              <span className="text-[10px] lg:text-[12px] text-slate-500 font-bold leading-tight">स्वदेशी उत्पादन</span>
            </div>
          </a>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="text-[9px] lg:text-[11px] font-black text-slate-600 hover:text-[#4b7947] uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Call Factory Button */}
            <a href="tel:+9779827302663" className="flex items-center gap-2 bg-[#f0f4f0] text-[#4b7947] px-3 py-2 lg:px-5 lg:py-2 rounded-full text-[9px] lg:text-[10px] font-black hover:bg-[#4b7947] hover:text-white transition-all whitespace-nowrap">
              <i className="fa-solid fa-phone"></i>
              CALL FACTORY
            </a>

            {/* Mobile Menu Button - Hamburger - Hidden on Tablet (md) and up */}
            <button 
              className="md:hidden text-2xl text-[#4b7947] w-10 h-10 flex items-center justify-center ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Hidden on Tablet (md) and up */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-white z-[60] p-8 flex flex-col gap-6 animate-fadeIn border-t border-slate-100 h-screen">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={(e) => handleScroll(e, link.path)}
              className="text-xl font-black text-[#4b7947] uppercase cursor-pointer border-b border-slate-50 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+9779827302663" className="mt-4 flex items-center justify-center gap-3 bg-[#4b7947] text-white py-4 rounded-2xl font-black uppercase">
             <i className="fa-solid fa-phone"></i>
             Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
