
import React, { useState } from 'react';
import { ICONS } from '../constants';

const CATS = [
  { 
    name: 'Living Room', 
    icon: ICONS.LivingRoom, 
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    desc: 'Elegant living spaces featuring Ecoboards WPC wall panels and designer louvers.'
  },
  { 
    name: 'Bedroom', 
    icon: ICONS.Bedroom, 
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200',
    desc: 'Serene bedroom environments with moisture-proof WPC door frames and wardrobes.'
  },
  { 
    name: 'Dining Area', 
    icon: ICONS.Dining, 
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200',
    desc: 'Stylish dining settings with termite-resistant WPC partitions and CNC Jali screens.'
  },
  { 
    name: 'Commercial', 
    icon: ICONS.Commercial, 
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    desc: 'Heavy-duty WPC boards designed for high-traffic office and retail environments.'
  },
  { 
    name: 'Exteriors', 
    icon: ICONS.Exterior, 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    desc: 'Weather-proof exterior louvers that withstand monsoon and high heat effortlessly.'
  },
];

const Categories: React.FC = () => {
  const [selectedInspiration, setSelectedInspiration] = useState<typeof CATS[0] | null>(null);

  return (
    <div className="py-10 lg:py-16 border-b border-slate-50">
      <div className="container mx-auto px-4 text-center mb-8 lg:mb-12">
        <span className="text-[10px] font-black text-[#8cc63f] uppercase tracking-[0.3em] mb-3 block">Design Gallery</span>
        <h2 className="text-3xl font-black text-[#4b7947] uppercase tracking-tighter">Space Inspirations</h2>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
          {CATS.map((cat) => (
            <button 
              key={cat.name} 
              onClick={() => setSelectedInspiration(cat)} 
              className="flex flex-col items-center gap-4 lg:gap-5 group"
            >
              <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-[2rem] bg-[#f0f4f0] text-[#4b7947] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8cc63f] group-hover:text-white shadow-sm hover:shadow-xl`}>
                <div className="scale-75 lg:scale-100 transform transition-transform">
                  {cat.icon}
                </div>
              </div>
              <span className="text-[9px] lg:text-[10px] font-black text-slate-500 group-hover:text-[#4b7947] uppercase tracking-widest transition-colors">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Inspiration Image Modal */}
      {selectedInspiration && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white w-full max-w-5xl rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative animate-fadeIn flex flex-col md:flex-row max-h-[85vh] md:max-h-[90vh]">
            <button 
              onClick={() => setSelectedInspiration(null)}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors z-20 shadow-xl"
            >
              <i className="fa-solid fa-xmark text-lg lg:text-xl"></i>
            </button>
            <div className="md:w-2/3 h-56 md:h-auto overflow-hidden bg-slate-100 shrink-0">
              <img 
                src={selectedInspiration.img} 
                className="w-full h-full object-cover" 
                alt={selectedInspiration.name}
                loading="lazy"
              />
            </div>
            <div className="md:w-1/3 p-6 lg:p-14 flex flex-col justify-center bg-white overflow-y-auto">
               <span className="text-[10px] lg:text-xs font-black text-[#8cc63f] uppercase tracking-widest mb-3 lg:mb-4">Eco Inspiration</span>
               <h3 className="text-2xl lg:text-3xl font-black text-[#4b7947] mb-4 lg:mb-6">{selectedInspiration.name}</h3>
               <p className="text-slate-500 mb-8 lg:mb-10 leading-relaxed text-sm">
                 {selectedInspiration.desc}
               </p>
               <a 
                 href="#shop" 
                 onClick={() => setSelectedInspiration(null)}
                 className="bg-[#4b7947] text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black uppercase tracking-widest text-center text-[10px] lg:text-xs hover:bg-[#8cc63f] transition-colors"
               >
                 See Products Used
               </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
