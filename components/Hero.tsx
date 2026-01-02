
import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000',
    title: 'Factory Direct Solutions',
    subtitle: 'Ecoboards Premium WPC',
    desc: 'The sustainable choice for modern builders. 100% waterproof and termite proof.',
    link: '#shop'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000',
    title: 'Architectural Jali',
    subtitle: 'Precision Engineering',
    desc: 'Define your spaces with our weather-resistant louvers and custom CNC jali screens.',
    link: '#shop'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[550px] lg:h-[750px] overflow-hidden group bg-slate-900">
      {HERO_SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
        >
          <div className="absolute inset-0">
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 h-full relative z-20 flex flex-col justify-end pb-24 items-start">
            <div className="max-w-2xl text-white">
              <span className="inline-block px-3 py-1 bg-[#8CC63F]/90 rounded text-[10px] font-black tracking-widest uppercase mb-4">
                {slide.title}
              </span>
              <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight mb-4">
                {slide.subtitle}
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                {slide.desc}
              </p>
              <div className="flex gap-4">
                <a 
                  href={slide.link}
                  onClick={(e) => scrollToProducts(e, slide.link)}
                  className="bg-[#4B7947] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#8CC63F] transition-all flex items-center gap-3 shadow-2xl cursor-pointer"
                >
                  View Products
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 right-10 z-30 flex gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-12 bg-[#8CC63F]' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
