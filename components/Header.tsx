
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Custom SVG Logo based on Screenshot */}
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle */}
                <circle cx="100" cy="100" r="90" stroke="#4b7947" strokeWidth="4" />
                
                {/* Top Leaves */}
                {/* Left Light Green */}
                <path d="M100 20 Q 50 20 50 70 Q 100 80 100 50 Z" fill="#8cc63f" />
                {/* Right Dark Green */}
                <path d="M100 20 Q 150 20 150 70 Q 100 80 100 50 Z" fill="#4b7947" />
                
                {/* Center Text */}
                <text x="100" y="115" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="42" fill="#4b7947">ECO</text>
                <text x="100" y="145" textAnchor="middle" fontFamily="sans-serif" fontWeight="500" fontSize="24" fill="#8cc63f" letterSpacing="3">BOARDS</text>

                {/* Bottom Leaves */}
                {/* Left Dark Green */}
                <path d="M95 185 Q 65 185 65 155 Q 95 145 95 160 Z" fill="#4b7947" />
                {/* Right Light Green */}
                <path d="M105 185 Q 135 185 135 155 Q 105 145 105 160 Z" fill="#8cc63f" />
              </svg>
            </div>
            
            {/* Desktop Text Side Label */}
            <div className="hidden sm:flex flex-col justify-center h-full pt-1 pl-1">
              <span className="text-xl font-black text-[#4b7947] leading-none tracking-tighter">ECOBOARDS</span>
              <span className="text-[12px] text-slate-500 font-bold leading-tight">स्वदेशी उत्पादन</span>
            </div>
          </a>

          {/* Core Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="text-[11px] font-black text-slate-600 hover:text-[#4b7947] uppercase tracking-widest transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Functional Contact */}
          <div className="flex items-center gap-4">
            <a href="tel:+9779827302663" className="hidden md:flex items-center gap-2 bg-[#f0f4f0] text-[#4b7947] px-5 py-2 rounded-full text-[10px] font-black hover:bg-[#4b7947] hover:text-white transition-all">
              <i className="fa-solid fa-phone"></i>
              CALL FACTORY
            </a>
            <button 
              className="lg:hidden text-2xl text-[#4b7947]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"}></i>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-[60] p-8 flex flex-col gap-6 animate-fadeIn">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={(e) => handleScroll(e, link.path)}
              className="text-2xl font-black text-[#4b7947] uppercase cursor-pointer"
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
