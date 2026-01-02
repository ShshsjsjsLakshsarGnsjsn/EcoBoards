
import React from 'react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sanjay Shrestha',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200',
    content: "Ecoboards has been my trusted WPC partner for many residential projects in Kathmandu. Their board quality and waterproof capabilities are unmatched in the market."
  },
  {
    id: '2',
    name: 'Manju Tamang',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200&h=200',
    content: "Switching to WPC doors from Ecoboards was the best decision for our home. No swelling during monsoon, and they look stunning."
  },
  {
    id: '3',
    name: 'Bishal Chaudhary',
    role: 'Furniture Manufacturer',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200&h=200',
    content: "The density of Ecoboards WPC is perfect for precision CNC work. Our Jali designs come out sharp every single time."
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <div className="mb-10 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-black text-[#1b4332] mb-4">Building Trust Together</h2>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">What Our Partners & Customers Say</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[40px] shadow-xl shadow-slate-200/50 relative border border-slate-50 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            <i className="fa-solid fa-quote-left absolute top-6 left-6 lg:top-8 lg:left-8 text-slate-100 text-5xl lg:text-6xl"></i>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <p className="text-slate-600 italic leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">"{t.content}"</p>
              <div className="flex flex-col items-center">
                <img src={t.image} alt={t.name} className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-slate-50 mb-4 object-cover shadow-md" loading="lazy" />
                <h4 className="font-bold text-slate-800 uppercase tracking-wide text-sm lg:text-base">{t.name}</h4>
                <span className="text-xs text-[#d4a373] font-bold">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
