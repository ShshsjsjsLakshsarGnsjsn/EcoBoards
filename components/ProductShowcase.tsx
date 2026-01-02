
import React, { useState } from 'react';

const CATEGORIES = ['All', 'Boards', 'Doors', 'Door Frames', 'Louvers', 'Jali'];

const PRODUCTS = [
  { 
    id: '1', 
    title: 'Standard WPC Board', 
    cat: 'Boards', 
    tag: 'Factory Price', 
    img: 'https://i.pinimg.com/736x/17/a2/4f/17a24fbc40fb918a9abb74d8b19191fd.jpg' 
  },
  { 
    id: '3', 
    title: 'Aesthetic Louvers', 
    cat: 'Louvers', 
    tag: 'New Arrival', 
    img: 'https://i.pinimg.com/1200x/b9/ee/42/b9ee42ffed4e20d945cb9985532f29fa.jpg' 
  },
  { 
    id: '4', 
    title: 'Intricate CNC Jali', 
    cat: 'Jali', 
    tag: 'Eco Friendly', 
    img: 'https://i.pinimg.com/736x/07/4c/bc/074cbcdaacc34108de4fdaaaa48103ff.jpg' 
  },
  { 
    id: '6', 
    title: 'Designer WPC Door', 
    cat: 'Doors', 
    tag: 'Luxury', 
    img: 'https://i.pinimg.com/736x/f0/ac/43/f0ac43546ad3e9009360d994e939ce22.jpg' 
  },
  { 
    id: '7', 
    title: 'Solid WPC Door Frame', 
    cat: 'Door Frames', 
    tag: 'Termite Proof', 
    img: 'https://i.pinimg.com/736x/1a/87/17/1a8717cfb845f93507f7407bf429995c.jpg' 
  },
];

const ProductShowcase: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.cat === filter);

  const handleInquiry = (productTitle: string) => {
    // Nepal country code 977
    const WHATSAPP_NUMBER = "9779827302663";
    const msg = encodeURIComponent(`Hi Ecoboards Nepal! I'm interested in the ${productTitle}. Can you share more details and bulk pricing?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-black text-[#4b7947] mb-6">Our Factory Products</h2>
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 lg:px-8 lg:py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${filter === c ? 'bg-[#4b7947] text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {filteredProducts.map((p) => (
          <div key={p.id} className="group animate-fadeIn cursor-pointer" onClick={() => setSelectedProduct(p)}>
            <div className="relative aspect-[4/5] rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm transition-shadow duration-300 group-hover:shadow-2xl bg-white will-change-transform">
              <img 
                src={p.img} 
                alt={p.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x800/f0f4f0/4b7947?text=Ecoboards'; 
                }}
              />
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-[#8cc63f] text-white text-[9px] font-black px-4 py-1.5 rounded-xl uppercase tracking-widest shadow-lg">
                {p.tag}
              </div>
            </div>
            <div className="mt-6 lg:mt-8 text-center">
              <span className="text-[10px] font-black text-[#8cc63f] uppercase tracking-[0.2em] mb-2 block">{p.cat}</span>
              <h4 className="text-lg lg:text-xl font-bold text-slate-800 mb-2 group-hover:text-[#4b7947] transition-colors">{p.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-4xl rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-fadeIn max-h-[90vh] overflow-y-auto md:overflow-hidden">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors z-10 shadow-md"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="md:w-1/2 h-64 md:h-auto shrink-0 relative">
              <img src={selectedProduct.img} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="md:w-1/2 p-6 lg:p-14 flex flex-col justify-center">
               <span className="text-[10px] lg:text-xs font-black text-[#8cc63f] uppercase tracking-widest mb-3 lg:mb-4">{selectedProduct.cat}</span>
               <h3 className="text-2xl lg:text-3xl font-black text-slate-800 mb-3 lg:mb-4">{selectedProduct.title}</h3>
               <p className="text-slate-500 mb-6 lg:mb-8 leading-relaxed text-sm">
                 100% factory-grade waterproof WPC solutions. Termite proof and borer resistant. Made in Nepal.
               </p>
               <button 
                 onClick={() => handleInquiry(selectedProduct.title)}
                 className="w-full bg-[#4b7947] text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black uppercase tracking-widest text-[10px] lg:text-xs hover:bg-[#8cc63f] transition-colors"
               >
                 Inquire on WhatsApp
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
